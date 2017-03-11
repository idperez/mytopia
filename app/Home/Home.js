import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { SearchBar} from 'react-native-elements';

import HousingResults from './../Home/Housing/HousingResults';
import JobsResults from './../Home/Jobs/JobsResults';
import LifeResults from './../Home/Life/LifeResults';

import Header from './../Headers/Header';

import ScrollableTabView from 'react-native-scrollable-tab-view';

class Home extends Component {
    render () {
        return (<View>
            <Header />
            <SearchBar
                lightTheme
                placeholder='Type Here...' />
            <ScrollView keyboardShouldPersistTaps="always">
            <ScrollableTabView
                tabBarBackgroundColor='#ffffff'>
                <JobsResults tabLabel="Jobs" />
                <HousingResults tabLabel="Housing" />
                <LifeResults tabLabel="Life" />
            </ScrollableTabView>
            </ScrollView>
        </View>);
    }
}

export default Home;