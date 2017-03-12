/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import JobSearchData from './lib/JobSearchData';
import JobPageData from './lib/JobPageData';
import HouseSearchData from './lib/HouseSearchData';
import todoSearchResults from './lib/todoSearchResults'
import HousePageData from './lib/HousePageData.js'

let test = 'loading..';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        JobSearchData.listJobsByLoc('Seattle', 'WA').then((res)=>{
            test = JSON.stringify(res);
            this.setState({showText: true})
        });
    }

    render() {
        return (
            <Text>{test}</Text>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('mytopia', () => Blink);

export default Blink;