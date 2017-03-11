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

import JobPageData from './lib/JobSearchData';
let test = 'loading..';
JobPageData.listJobsByLoc('Austin', 'TX').then((res)=>{
  test = JSON.stringify(res);
});

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        JobPageData.listJobsByLoc('Austin', 'TX').then((res)=>{
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