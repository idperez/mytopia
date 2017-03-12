import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Icon } from 'react-native-elements'

let results = "";

class Preferences extends Component {

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
            <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
            <View style={styles.hero}>
                <Icon
                    name="settings"
                />
            </View>
        </ScrollView>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00704a'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    hero: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
        marginTop: 60
    },
    cardText: {
        marginBottom: 10,
        textAlign: 'center',
    },
    logInButton: {
        marginBottom: 5
    },
    image: {
        width: 100,
        height: 70
    }
});

export default Preferences;