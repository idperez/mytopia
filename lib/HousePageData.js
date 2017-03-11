/*
 Data for the job details page
 */
"use strict";

const keys = require('./Keys.js');
const qs = require('querystring');
const x2j = require('./xml2json.js');
var DOMParser = require('xmldom').DOMParser;



const ZILLOW_ENDPOINT = 'http://www.zillow.com/webservice/GetSearchResults.htm';


// Glassdoor company information
// Returns undefined if company not found
exports.getHouseInformation = function(address, city, state){
    return new Promise(function(resolve, reject) {

        let query = {
            'zws-id': keys.zillow.ZWSID,
            address: address,
            citystatezip: city + ',+' + state
        };

        query = qs.stringify(query);

        fetch(ZILLOW_ENDPOINT + '?' + query)
            .then((res)=> {return res.text()})
            .then((body) => {
                let doc = new DOMParser().parseFromString(body);
                resolve(x2j.xml2json(doc));

            }).catch(err=>reject(err));

    });
};
