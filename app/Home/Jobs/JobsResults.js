import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import JobCard from './JobCard';

const jobs = [
    {
        title: 'Entry Level Software Developer',
        company: 'General Atomics and Affiliated Companies',
        location: 'San Diego, CA',
        rating: 3.7
    },
    {
        title: 'Entry Level Software Developer',
        company: 'General Atomics and Affiliated Companies',
        location: 'San Diego, CA',
        rating: 3.7
    }
];

class JobsResults extends Component {

    constructor(props) {
        super(props);
        this.state = {favorite: 'favorite-border'};
    }

    render () {
        return (<View>
            {
                jobs.map((u, i) => {
                    return (
                        <JobCard
                            key={i}
                            title={u.title}
                        />
                    )
                })
            }
        </View>);
    }
}

export default JobsResults;