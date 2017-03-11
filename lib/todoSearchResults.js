/*
    to-do search results based on user prefs
 */
"use strict";

const yelp = require('yelp-fusion');
const keys = require('./Keys.js');
const request = require('request');
const qs = require('querystring');
const user = require('./User.js');

// Get yelp token
const token = yelp.accessToken(keys.yelp.id, keys.yelp.secret).then(response => {
    console.log(response.jsonBody.access_token);
}).catch(e => {
    console.log(e);
});

exports.getTodoList = function(city, state){
    return new Promise((resolve, reject)=>{
        let userKeywords = user.profile.todo; // TODO loop through users preferred todo
        let location = (city.replace(new RegExp(' ', 'g'), '+')).toLowerCase(); // TODO - change state to initals
        let results = [];
        userKeywords.forEach((userKeyword)=> {
            const client = yelp.client(token);
        });

            resolve(results);

    });
};