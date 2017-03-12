"use strict";
const keys = require('./Keys.js');
const dict = require('./Diction.js');
const qs = require('querystring');
const CITY_ENDPOINT = 'http://api.sba.gov/geodata/all_links_for_city_of/';
const WEATHER_ENDPOINT = 'https://api.apixu.com/v1/current.json';

exports.getCityInfo = function(city, state){
    return new Promise((resolve, reject) => {

        var json = {};

        city = city.trim().toLowerCase();
        if(state.trim().length > 2)
            state = dict.getStateLetters(state);
        if(!state)
            reject("Invalid state");

        fetch(CITY_ENDPOINT + city + '/' + state + '.json')
            .then((res)=> {return res.text()})
            .then((govBody) => {

                json['gov'] = govBody;

                let query = {
                    key: keys.apixu.key,
                    q: city
                };

                query = qs.stringify(query);

                fetch(WEATHER_ENDPOINT + '?' + query)
                    .then((res)=> {return res.text()})
                    .then((weatherBody) => {
                        json['weather'] = weatherBody;
                        resolve(json);
                    });

            }).catch(error => reject(error.message));


    });
};
