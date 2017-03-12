/*
    House search data
 */
"use strict";
const keys = require('./Keys.js');
const user = require('./User.js');
const qs = require('querystring');
var HTMLParser = require('fast-html-parser');

const REALTOR_ENDPOINT = 'http://www.homefinder.com';
const BUY = '';
const RENT = 'rentals';

/*
Example return:

[{
    price: '$760,000',
    houseType: 'Single Family Home',
    attributes: '4 Beds 4 Full, 1 Half Baths',
    address: '12 Salisbury Ln.  Township of Washington, NJ 07853',
    realtor:
    { name: 'Debra Burke',
        company: 'Coldwell Banker Residential Brokerage Chester/Hackettstown Office',
        phone: '(908) 879-4900' },
    photo: 'http://img5.homefinder.com/i/4b17b104-fe4c-11e6-9eaa-ecf4bbed67d8/w200-h-q'
    } ]
*/

exports.getHousingSearchData = function(city, state){
    return new Promise(function(resolve, reject) {

        let query = {
            pgsz: 50
        };
        query = qs.stringify(query);

        let endpoint = setupEndpoint(city, state);

        fetch(endpoint + '?' + query, {
        }).then((body)=> {return body.text()})
            .then((htmlBody) => {
                let searchResults = getHomesList(htmlBody);
                user.addHouseCount(city,searchResults.length);
                searchResults = {
                    count: searchResults.length,
                    houseList: searchResults
                };
                resolve(searchResults);

        });

    });
};

function getHomesList(page){
    page = HTMLParser.parse(page);
    var homesList = [];
    var results = page
            .childNodes[0]
            .childNodes[3] // Body
            .childNodes[7] // MainContainer
            .childNodes[3] // Section
            .childNodes[1] // LeftColumn
            .childNodes; // Results List in html

    results.forEach((res)=>{
        if(res.classNames && res.classNames[0] === 'resultsBands'){
            var top = res.childNodes[1].childNodes[1];
            var information = top.childNodes[3];
            var realtor = information.childNodes[3];
            var realtorName = realtor.childNodes[3].text.trim();
            var realtorComp = realtor.childNodes[1].text.trim();
            var realtorPhone = realtor.childNodes[5].text.trim();
            information = information.childNodes[1];
            var price = information.childNodes[1].text.trim();
            var type = information.childNodes[5].text.trim();
            var attr = information.childNodes[7].text.trim();
            var addr = information.childNodes[3].text.trim();
            // Photos
            var photo = top.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[1].rawAttrs;
            var regex = /src=['"](.*?)['"]/;
            photo = regex.exec(photo)[1];


            homesList.push({
                price: price,
                houseType: type,
                attributes: attr,
                address: addr,
                realtor: {
                    name: realtorName,
                    company: realtorComp,
                    phone: realtorPhone
                },
                photo: photo

            });
        }
    });

    return homesList;
}

// Set endpoint params
function setupEndpoint(city, state){
    let endpoint = REALTOR_ENDPOINT;

    if(user.profile.housingPrefs.type === "Rent"){
        endpoint += '/' + RENT;
    }

    city = city.replace(new RegExp(' ', 'g'), '-'); // Fix city to match website params
    endpoint += '/' + state + '/' + city;


    return endpoint;
}

// TESTING
/*
exports.getHousingSearchData('Long Valley', 'NJ').then((res)=>{
   // console.log(res);
}).catch((err)=>{
    console.log(err);
});
*/