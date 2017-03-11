import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet } from 'react-native';

import App from './app/App';

export default class mytopia extends Component {
    render() {
        return (<View style={styles.container}>
                <App />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00704a'
    }
});

AppRegistry.registerComponent('mytopia', () => mytopia);
