/*
    to-do search results based on user prefs
 */
"use strict";

const keys = require('./Keys.js');
const qs = require('querystring');
const user = require('./User.js');

const LIMIT = 50;
const YELP_ENDPOINT = 'https://api.yelp.com/v3/businesses/search';
const YELP_OAUTH = 'https://api.yelp.com/oauth2/token';
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
        let userKeywords = user.profile.todo;
        let results = [];
        let count = userKeywords.length;

        fetch(YELP_OAUTH, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: qs.stringify({
                grant_type: 'client_credentials',
                client_id: keys.yelp.id,
                client_secret: keys.yelp.secret
            })
        }).then(body=> body.json()).then((yelpReturn)=>{
            let token = yelpReturn.access_token;

                userKeywords.forEach((userKeyword) => {
                    let query = {
                        term: userKeyword,
                        limit: limitFunct(userKeywords),
                        location: city + ", " + state
                    };

                    query = qs.stringify(query);

                    // Request search results
                    fetch(YELP_ENDPOINT + '?' + query,{
                        method: 'GET',
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    }).then((res)=> {return res.json()})
                        .then((body) => {
                            count = count - 1;
                            results = results.concat(body.businesses);
                            if (count <= 0) {
                                user.addTodoCount(city,results.length);
                                resolve(results);
                            }
                    }).catch(err=>reject(err));
            });
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