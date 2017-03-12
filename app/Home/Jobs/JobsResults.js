import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import JobCard from './JobCard';

import JobPageData from './../../../lib/JobSearchData';

import Spinner from 'react-native-loading-spinner-overlay';

let results = "";

class JobsResults extends Component {

    constructor(props) {
        super(props);
        this.state = {favorite: 'favorite-border'};

        results = <View style={{ flex: 1 }}>
            <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
        </View>;

        this.state = {results: results};

        JobPageData.listJobsByLoc(this.props.test, 'TX').then((res) => {

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