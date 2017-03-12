/*
    JSON User profile for demo
 */

"use strict";


exports.profile = {
    jobTitles: ['Software Engineer'],
    jobCounts: [],
    houseCounts: [],
    todoCounts: [],
    housingPrefs: {
        type: "Rent", // Rent or Buy
        rooms: -1,
        priceRange: ""
    },
    todo: ['hiking', 'movies', 'food'],
    savedJobs: [],
    savedHomes: [],
    savedTodo: []
};

exports.getSavedJobTitles = ()=>{
    return exports.profile.jobTitles;
};

exports.getSavedHousingPrefs = ()=>{
    return exports.profile.housingPrefs;
};

// Add location/count to the count list for user
exports.addJobCount = (location, count)=>{
    var existing = exports.getJobCountByLoc(location);
    if(!existing) {
        exports.profile.jobCounts.push({
            location: location,
            count: count
        });
    }
    else{
        existing.count = count;
    }
};

// If location has job count or not
exports.getJobCountByLoc = (city) => {
    let result = null;
    city = city.trim().toLowerCase();
    exports.profile.jobCounts.forEach((countData)=>{
        let currentCity = countData.location;
        if(currentCity.trim().toLowerCase() === city)
            result = countData;
    });
    return result;
};

exports.getJobCounts = ()=>{
    return exports.profile.jobCounts;
};


// Add location/count to the count list for user
exports.addHouseCount = (location, count)=>{
    var existing = exports.getJobCountByLoc(location);
    if(!existing) {
        exports.profile.houseCounts.push({
            location: location,
            count: count
        });
    }
    else{
        existing.count = count;
    }
};

// If location has job count or not
exports.getHouseCountByLoc = (city) => {
    let result = null;
    city = city.trim().toLowerCase();
    exports.profile.houseCounts.forEach((countData)=>{
        let currentCity = countData.location;
        if(currentCity.trim().toLowerCase() === city)
            result = countData;
    });
    return result;
};

exports.getHouseCounts = ()=>{
    return exports.profile.houseCounts;
};


// Add location/count to the count list for user
exports.addTodoCount = (location, count)=>{
    var existing = exports.getJobCountByLoc(location);
    if(!existing) {
        exports.profile.todoCounts.push({
            location: location,
            count: count
        });
    }
    else{
        existing.count = count;
    }
};

// If location has job count or not
exports.getTodoCountByLoc = (city) => {
    let result = null;
    city = city.trim().toLowerCase();
    exports.profile.todoCounts.forEach((countData)=>{
        let currentCity = countData.location;
        if(currentCity.trim().toLowerCase() === city)
            result = countData;
    });
    return result;
};

exports.getTodoCounts = ()=>{
    return exports.profile.todoCounts;
};


exports.getSavedJobs = ()=>{
    return exports.profile.savedJobs;
};

exports.getSavedHomes = ()=>{
    return exports.profile.savedHomes;
};

exports.getSavedTodo = ()=>{
    return exports.profile.savedTodo;
};

// Return if job is a saved job or not.
exports.isSavedJob = (fav)=> {
    let userJobs = exports.profile.savedJobs;
    let result = false;
    if(fav.title && fav.company && fav.location) {
        for (let i = 0; i < userJobs.length; i++) {
            if (userJobs[i].title === fav.title
                && userJobs[i].company === fav.company
                && userJobs[i].location === fav.location
            ) {
                result = true;
                break;
            }
        }
    }

    return result;
};

// is saved house
exports.isSavedHouse = (fav)=>{
    let result = false;
    let userHouses = exports.profile.savedHomes;
    let addr = fav.address;
    if(addr) {
        for (let i = 0; i < userHouses.length; i++) {
            if (userHouses[i].address
                && userHouses[i].address === addr
            ) {
                result = true;
                break;
            }
        }
    }

    return result;
};

// is saved to-do
exports.isSavedTodo = (fav)=>{
    let result = false;
    let userTodo = exports.profile.savedTodo;
    let lat = fav.coordinates.latitude;
    let long = fav.coordinates.longitude;
    if(lat && long) {
        for (let i = 0; i < userTodo.length; i++) {
            let coords = userTodo.coordinates;
            if (coords
                && coords.latitude === lat
                && coords.longitude === long
            ) {
                result = true;
                break;
            }
        }
    }

    return result;
};


//jobs
exports.addJobFavorite = (fav)=>{
    exports.profile.savedJobs.push(fav);
};
// Remove by title/company and location
exports.removeJobFavorite = (fav)=>{
    let userJobs = exports.profile.savedJobs;
    if(fav.title && fav.company && fav.location) {
        for (let i = 0; i < userJobs.length; i++) {
            if (userJobs[i].title === fav.title
                && userJobs[i].company === fav.company
                && userJobs[i].location === fav.location
            ) {
                userJobs.splice(i, 0);
                break;
            }
        }
    }
};

// housing
exports.addHouseFavorite = (fav)=>{
    exports.profile.savedHomes.push(fav);
};

// Remove by address
exports.removeHouseFavorite = (fav)=>{
    let userHouses = exports.profile.savedHomes;
    let addr = fav.address;
    if(addr) {
        for (let i = 0; i < userHouses.length; i++) {
            if (userHouses[i].address
                && userHouses[i].address === addr
            ) {
                userHouses.splice(i, 0);
                break;
            }
        }
    }
};


// TO-DO
exports.addTodoFavorite = (fav)=>{
    exports.profile.savedTodo.push(fav);
};

// Remove by location because two things can't be in the same place
exports.removeTodoFavorite = (fav)=>{
    let userTodo = exports.profile.savedTodo;
    let lat = fav.coordinates.latitude;
    let long = fav.coordinates.longitude;
    if(lat && long) {
        for (let i = 0; i < userTodo.length; i++) {
            let coords = userTodo.coordinates;
            if (coords
                && coords.latitude === lat
                && coords.longitude === long
            ) {
                userTodo.splice(i, 0);
                break;
            }
        }
    }
};
