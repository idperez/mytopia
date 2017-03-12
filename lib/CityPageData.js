"use strict";

const dict = require('./Diction.js');
var HTMLParser = require('fast-html-parser');


const CITY_ENDPOINT = 'https://www.apartments.com/local/';

exports.getCityInfo = function(city, state){
    return new Promise((resolve, reject) => {

        city = city.trim().toLowerCase();
        if(state.trim().length > 2)
            state = dict.getStateLetters(state);
        if(!state)
            reject("Invalid state");

        fetch(CITY_ENDPOINT + city + '-' + state)
            .then((res)=> {return res.text()})
            .then((body) => {
                body = parsePage(body);
                resolve(body);

            }).catch(error => reject(error));


    });
};

function parsePage(page){
    page = new HTMLParser.parse(page);
    let result = page.childNodes[0]
        .childNodes[3] // Body
        .childNodes[2] // Main wrapper
        .childNodes[3] // Main
        .childNodes[1] // Neighborhood
        .childNodes[1] // Search app wrapper
        .childNodes[1].text
    ;

    return result;
}