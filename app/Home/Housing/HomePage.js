import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

let results = "";

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {favorite: 'favorite-border'};
    }

    componentDidMount() {

        results = <Text>loading...</Text>;

        this.state = {results: results};
    }

    render () {
        return(
            <View>
                {this.state.results}
            </View>
        );
    }
}

export default HomePage;