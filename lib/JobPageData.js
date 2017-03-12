/*
    Data for the job details page
    FOR RETURN DETAILS: https://www.glassdoor.com/developer/companiesApiActions.htm
 */
"use strict";

const keys = require('./Keys.js');
const qs = require('querystring');

const GLASSDOOR_ENDPOINT = 'http://api.glassdoor.com/api/api.htm';


// Glassdoor company information
// Returns undefined if company not found
exports.getCompanyInformation = function(companyName){
    return new Promise(function(resolve, reject) {

        let query = {
            't.p': keys.glassdoor.partnerId,
            't.k': keys.glassdoor.partnerKey,
            userip: '0.0.0.0',
            useragent: '',
            format: 'json',
            v: 1,   // API version
            action: 'employers',
            q: companyName
        };

        query = qs.stringify(query);

        fetch(GLASSDOOR_ENDPOINT + '?' + query)
            .then((res)=> {return res.text()})
            .then((body) => {
                let company = JSON.parse(body).response.employers[0];
                resolve(company);
        });

    });
};

// TESTING
/*
exports.getCompanyInformation('').then((companyInfo)=>{
   console.log(companyInfo);
});
 */
