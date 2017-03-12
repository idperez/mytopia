"use strict";

const dict = require('./Diction.js');


const CITY_ENDPOINT = 'http://api.sba.gov/geodata/all_links_for_city_of/';

exports.getCityInfo = function(city, state){
    return new Promise((resolve, reject) => {

        city = city.trim().toLowerCase();
        if(state.trim().length > 2)
            state = dict.getStateLetters(state);
        if(!state)
            reject("Invalid state");

        fetch(CITY_ENDPOINT + city + '/' + state + '.json')
            .then((res)=> {return res.text()})
            .then((body) => {
                resolve(body);

            }).catch(error => reject(error));


    });
};
