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


/*


 gov : {
 "county_name": "Travis",
 "description": null,
 "feat_class": "Populated Place",
 "feature_id": "32087",
 "fips_class": "C1",
 "fips_county_cd": "453",
 "full_county_name": "Travis County",
 "link_title": null,
 "url": "http://www.ci.austin.tx.us/",
 "name": "Austin",
 "primary_latitude": "30.26",
 "primary_longitude": "-97.74",
 "state_abbreviation": "TX",
 "state_name": "Texas"
 }

 weather: {
    "location": {
    "name": "Austin",
        "region": "Texas",
        "country": "United States of America",
        "lat": 30.27,
        "lon": -97.74,
        "tz_id": "America/Chicago",
        "localtime_epoch": 1489297981,
        "localtime": "2017-03-12 0:53"
   },
    "current": {
    "last_updated_epoch": 1489297981,
        "last_updated": "2017-03-12 00:53",
        "temp_c": 16.7,
        "temp_f": 62.1,
        "is_day": 0,
        "condition": {
        "text": "Overcast",
            "icon": "//cdn.apixu.com/weather/64x64/night/122.png",
            "code": 1009
    },
    "wind_mph": 0.0,
        "wind_kph": 0.0,
        "wind_degree": 30,
        "wind_dir": "NNE",
        "pressure_mb": 1021.0,
        "pressure_in": 30.6,
        "precip_mm": 0.2,
        "precip_in": 0.01,
        "humidity": 96,
        "cloud": 100,
        "feelslike_c": 16.7,
        "feelslike_f": 62.1,
        "vis_km": 16.0,
        "vis_miles": 9.0
}
}*/
/*

[
    {
        "county_name": "Travis",
        "description": null,
        "feat_class": "Populated Place",
        "feature_id": "32087",
        "fips_class": "C1",
        "fips_county_cd": "453",
        "full_county_name": "Travis County",
        "link_title": null,
        "url": "http://www.ci.austin.tx.us/",
        "name": "Austin",
        "primary_latitude": "30.26",
        "primary_longitude": "-97.74",
        "state_abbreviation": "TX",
        "state_name": "Texas"
    }
]*/