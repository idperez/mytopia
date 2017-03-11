/*
    to-do search results based on user prefs
 */
"use strict";

const yelp = require('yelp-fusion');
const keys = require('./Keys.js');
const request = require('request');
const qs = require('querystring');
const user = require('./User.js');

const LIMIT = 50;
// Limit keywords by number of keys
const limitFunct = function(keywords){
    return Math.floor(LIMIT/(keywords.length));
};
/*
{
    "distance": 6097.220680178,
    "phone": "+19086386969",
    "categories": [
    {
        "alias": "parks",
        "title": "Parks"
    },
    {
        "alias": "hiking",
        "title": "Hiking"
    }
],
    "is_closed": false,
    "transactions": [],
    "name": "Hacklebarney State Park",
    "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/80ninBYFPQ0z-eHs9Owpag/o.jpg",
    "id": "hacklebarney-state-park-long-valley",
    "location": {
    "address2": "",
        "city": "Long Valley",
        "address3": "",
        "display_address": [
        "119 Hacklebarney Rd",
        "Long Valley, NJ 07853"
    ],
        "zip_code": "07853",
        "address1": "119 Hacklebarney Rd",
        "country": "US",
        "state": "NJ"
},
    "url": "https://www.yelp.com/biz/hacklebarney-state-park-long-valley?adjust_creative=z4rq50TEkyGgxdcoaC1u2g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=z4rq50TEkyGgxdcoaC1u2g",
    "review_count": 31,
    "coordinates": {
    "latitude": 40.7513402,
        "longitude": -74.7328419
},
    "rating": 4.5,
    "display_phone": "(908) 638-6969"
}
*/
exports.getTodoList = function(city, state){
    return new Promise((resolve, reject)=>{
        let userKeywords = user.profile.todo; // TODO loop through users preferred todo
        let location = (city.replace(new RegExp(' ', 'g'), '+')).toLowerCase(); // TODO - change state to initals
        let results = [];
        let count = userKeywords.length;

        yelp.accessToken(keys.yelp.id, keys.yelp.secret).then(response => {
            let token = response.jsonBody.access_token;

            userKeywords.forEach((userKeyword)=> {
                const client = yelp.client(token);
                client.search({
                    term:userKeyword,
                    location: city + ', ' + state,
                    limit: limitFunct(userKeywords)
                }).then(response => {
                    count = count - 1;
                    results = results.concat(response.jsonBody.businesses);
                    if(count <= 0){
                        resolve(results);
                    }
                }).catch(e => {
                    reject(e);
                });
            });

        }).catch(e => {
            console.log(e);
        });

    });
};

// TESTING
/*
 exports.getTodoList('Long Valley', 'NJ').then((res)=>{
    console.log(res.length);
 }).catch((err)=>{
 console.log(err);
 });
*/