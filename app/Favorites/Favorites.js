import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Icon, Card, Button } from 'react-native-elements'

import Accordion from 'react-native-collapsible/Accordion';

let results = "";

const SECTIONS = [
    {
        title: 'Jobs'
    },
    {
        title: 'Homes'
    },
    {
        title: 'Stuff'
    }
];

const CITIES = [
    {
        name: 'Chicago'
    },
    {
        name: 'San Diego'
    },
    {
        name: 'Seattle'
    }
];

class Favorites extends Component {

    renderHeader(section) {
        return (
            <View style={styles.rating}>
                <Text style={styles.seeRatings}>{section.name}</Text>
            </View>
        );
    }

    renderContent(section) {
        return (
            <View>
                <Accordion
                    sections={SECTIONS}
                    renderHeader={this.renderHeaderType.bind(this)}
                    renderContent={this.renderContentType.bind(this)}
                />
            </View>
        );
    }

    renderHeaderType(section) {
        return (
            <View style={styles.rating}>
                <Text style={styles.seeRatingsChild}>{section.title}</Text>
            </View>
        );
    }

    renderContentType(section) {
        return (
            <View>
                <Text>contents</Text>
            </View>
        );
    }

    constructor(props) {
        super(props);

        this.state = {favorite: 'favorite-border'};
    }

    componentDidMount() {

        results = <Text>loading...</Text>;

        this.state = {results: results};

        this.setState({results: results});
    }

    render () {
        return(
            <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
                <View style={styles.hero}>
                    <Icon
                        name="favorite"
                    />
                    <Text style={styles.heroText}>Your Favorites</Text>
                </View>
                        <Card
                            title="Cities Saved">
                            <Accordion
                                sections={CITIES}
                                renderHeader={this.renderHeader.bind(this)}
                                renderContent={this.renderContent.bind(this)}
                            />
                        </Card>
                    <Card
                        title="Dont Like What You See?">
                        <Button
                            backgroundColor='#00704a'
                            iconRight
                            title='Edit Preferences'
                        />
                    </Card>
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
    rating: {
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
    seeRatings: {
        color: '#00704a',
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        marginBottom: 8
    },
    seeRatingsChild: {
        color: '#8dc63f',
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        marginBottom: 5
    },
    ratingText: {
        marginTop: 5
    },
    heroText: {
        marginTop: 5
    },
    logInButton: {
        marginBottom: 5
    },
    image: {
        width: 100,
        height: 70
    }
});

export default Favorites;