/*
    Job search by city
 */
'use strict';
const qs = require('querystring');
const user = require('./User.js');
var HTMLParser = require('fast-html-parser');

const ENDPOINT = 'https://www.indeed.com/jobs';
const RESULTS_LIMIT = 3;
const MAX_RATING_INDEED = 60;
const MAX_RATING_TOPIA = 5;


// Jobs list by location
/*
    EXAMPLE RETURN:
     count: #
     jobList: [{
         title: 'Entry Level Software Developer',
         company: 'General Atomics and Affiliated Companies',
         location: 'San Diego, CA',
         rating: 3.7
     }, ...]

 */
exports.listJobsByLoc = function(city, state) {

    return new Promise((resolve, reject)=> {

        let jobTitles = user.profile.jobTitles;
        let jobs;
        let counter = jobTitles.length;
        jobTitles.forEach((job)=> {

            job = (job.replace(new RegExp(' ', 'g'), '+')).toLowerCase(); // replace space with a + sign
            let location = (city.replace(new RegExp(' ', 'g'), '+') + ',+' + state).toLowerCase();

            let query = {
                q: job,
                l: location,
                limit: RESULTS_LIMIT,
            };

            query = qs.stringify(query);

            fetch(ENDPOINT + '?' + query)
                .then((body)=> {return body.text()})
                .then((htmlBody) => {
                    counter = counter - 1;
                    htmlBody = new HTMLParser.parse(htmlBody);
                    jobs = getSearchResults(htmlBody.firstChild);
                    if(counter <= 0){
                        resolve(jobs);
                    }

            });
        });
    });
};

// Get indeed web crawl results
function getSearchResults(page){
    var results = page // html
        .childNodes[3] // body
        .childNodes[24] //resultsBody
        .childNodes[0] //TR
        .childNodes[0] //TD
        .childNodes[5] //pageContent
        .childNodes[1] //TR
        .childNodes[3] //resultsCol
        .childNodes;
    let jobCount = results[5].childNodes[0].text.split(' ');
    jobCount = jobCount[jobCount.length - 1];
    let jobResult = [];

        results.forEach((res)=>{
            let elemClass = res.classNames? res.classNames[1] : null;
            if(elemClass && elemClass === 'row'){
                let title = res.childNodes[1].text.replace(/\r?\n|\r/g, "").trim();
                let company = res.childNodes[3].childNodes[1].text.replace(/\r?\n|\r/g, "").trim();
                // Location
                let location = res.childNodes[5].childNodes[0].classNames
                    ? res.childNodes[5].childNodes[0].text // No rating
                    : res.childNodes[7].childNodes[0].text; // Has rating
                // Rating
                let rating = 'Not rated';
                // If it's been rated
                if(res.childNodes[5].childNodes[1]) {
                    rating = res.childNodes[5].childNodes[1].childNodes[0].rawAttributes.style;
                    rating = rating.split('width: ');
                    rating = Number(rating[1].replace(/[^0-9\.]+/g,"")); // Extract number from width
                    rating = (rating / MAX_RATING_INDEED).toFixed(2); // Get rating percentage from indeed
                    rating = (MAX_RATING_TOPIA * rating).toFixed(1); // Get rating in MyTopia scale
                }

                let description = res.childNodes[9].childNodes[1].childNodes[1].childNodes[1].childNodes[1].text;
                description = description.replace(new RegExp('\n', 'g'), '');

                jobResult.push({
                    title: title,
                    company: company,
                    location: location,
                    rating: rating,
                    description: description
                });
            }
    });

    var jobSearch = {
        count: jobCount,
        jobList: jobResult
    };

    return jobSearch;
}


//TESTING
/*
exports.listJobsByLoc('Austin', 'Texas').then((body)=>{
    console.log(body);
});

*/