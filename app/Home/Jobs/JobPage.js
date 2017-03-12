import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import JobPageData from './../../../lib/JobPageData';

let results = "";

class JobPage extends Component {

    constructor(props) {
        super(props);

        this.state = {favorite: 'favorite-border'};
    }

    componentDidMount() {

        results = <Text>loading...</Text>;

        this.state = {results: results};

        JobPageData.getCompanyInformation('Glassdoor').then((res) => {

            results = JSON.stringify(res);

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

export default JobPage;