import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import JobCard from './JobCard';

import JobPageData from './../../../lib/JobSearchData';

import Spinner from 'react-native-loading-spinner-overlay';

import Toast from 'react-native-simple-toast';

let results = "";

class JobsResults extends Component {

    constructor(props) {
        super(props);

        this.state = {favorite: 'favorite-border'};
    }

    componentDidMount() {

        results = <Text>loading...</Text>;

        this.state = {results: results};

        let city = this.props.location.split(',')[0];
        let state = this.props.location.split(',')[1];

        JobPageData.listJobsByLoc(city, state).then((res) => {

            results = res.jobList.map((job, i) => {
                return <JobCard
                    key={i}
                    title={job.title}
                    company={job.company}
                    rating={parseInt(job.rating)}
                    location={job.location} />;
            });
            this.setState({results: results});
        });
    }

    render () {

        return(
            <View>
                {this.state.results}
            </View>
        );
    }
}

export default JobsResults;