"use strict";

const CITY_ENDPOINT = 'https://www.apartments.com/local/';

exports.getCityInfo = function(city, state){
    return new Promise((resolve, reject) => {

        let location = '';

        city = city.trim().toLowerCase();
        state =

        fetch(CITY_ENDPOINT + location)
            .then((res)=> {return res.text()})
            .then((body) => {



            });


    });
};