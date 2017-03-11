import React, { Component } from 'react';

import {
    Navigator,
    Image,
    StyleSheet
} from 'react-native';

import NavigationBar from 'react-native-navbar';

export default class Header extends Component {
    render() {
        return (<NavigationBar
            title={<Image
                source={require('./../Images/title.png')}
                style={styles.image}
                /> }
            />
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 40
    }
});