/*
 Data for the job details page
 */
"use strict";

const keys = require('./Keys.js');
const request = require('request');
const qs = require('querystring');

const ZILLOW_ENDPOINT = 'http://www.zillow.com/webservice/GetSearchResults.htm';