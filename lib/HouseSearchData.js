/*
    House search data
 */
"use strict";
const keys = require('./Keys.js');
const user = require('./User.js');
const request = require('request');
const qs = require('querystring');
var HTMLParser = require('fast-html-parser');

const REALTOR_ENDPOINT = 'http://www.homefinder.com';
const BUY = '';
const RENT = 'rentals';

exports.getHousingSearchData = function(city, state){
    return new Promise(function(resolve, reject) {

        let query = {
            pgsz: 50
        };
        query = qs.stringify(query);

        let endpoint = setupEndpoint(city, state);

        request({url: endpoint + '?' + query, jar: false}, function (error, response, body) {
            if (error) {
                reject(error);
            }
            else {
                let searchResults = getHomesList(body);
                resolve(searchResults);
            }
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
            var information = res.childNodes[1].childNodes[1].childNodes[3];
            var realtor = information.childNodes[3];
            information = information.childNodes[1];
            console.log(realtor);
        }
    });

    return results;
}

// Set endpoint params
function setupEndpoint(city, state){
    let endpoint = REALTOR_ENDPOINT;

    if(user.profile.housingPrefs.type === "Buy"){
        //endpoint += '/' + BUY;
    }
    else{
        endpoint += '/' + RENT;
    }

    city = city.replace(new RegExp(' ', 'g'), '-'); // Fix city to match website params
    endpoint += '/' + state + '/' + city;


    return endpoint;
}


exports.getHousingSearchData('Long Valley', 'NJ').then((res)=>{
   // console.log(res);
}).catch((err)=>{
    console.log(err);
});