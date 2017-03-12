import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import HousingResults from './../Home/Housing/HousingResults';
import JobsResults from './../Home/Jobs/JobsResults';
import LifeResults from './../Home/Life/LifeResults';

import Header from './../Headers/Header';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import Toast from 'react-native-simple-toast';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { location: 'Austin' };
    }

    render () {
        return (<View style={styles.container}>
            <Header/>
            <ScrollView keyboardShouldPersistTaps="always">
            <ScrollableTabView
                tabBarBackgroundColor='#ffffff'>
                <JobsResults tabLabel="Jobs" location={this.state.location} />
                <HousingResults tabLabel="Housing" />
                <LifeResults tabLabel="Life" />
            </ScrollableTabView>
                <Text>{this.props.test}</Text>
            </ScrollView>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00704a'
    }
});


export default Home;