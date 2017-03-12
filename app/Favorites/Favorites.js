import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Icon, Card, Button, Grid, Col, Row } from 'react-native-elements';

import Hr from 'react-native-hr';

import Accordion from 'react-native-collapsible/Accordion';

import StarRating from 'react-native-star-rating';

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
    },
    {
        name: 'Phoenix'
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
        if(section.title === "Jobs") {
            return (
                <View>
                    <Card
                        key={0} >
                        <View style={styles.view}>
                            <Text style={styles.title}>Software Engineer</Text>
                        </View>
                        <Hr lineColor='#b3b3b3' textColor='steelblue' />
                        <View style={styles.view}>
                            <Grid>
                                <Row>
                                    <Text style={styles.company}>GlassDoor</Text>
                                </Row>
                                <Row>
                                    <Text style={styles.location}>San Francisco, CA</Text>
                                </Row>
                                <Row>
                                    <StarRating
                                        disabled={true}
                                        maxStars={5}
                                        rating={4}
                                        starSize={20}
                                    />
                                </Row>
                            </Grid>
                        </View>
                        <Button
                            icon={{name: 'work'}}
                            backgroundColor='#8dc63f'
                            buttonStyle={{marginTop: 5, borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='View Job'/>
                    </Card>
                </View>
            );
        } else if(section.title === "Homes") {
            return (
                <View>
                    <Card
                        key={0}>
                        <View style={styles.view}>
                            <Text style={styles.title}>$350,000</Text>
                        </View>
                        <Hr lineColor='#b3b3b3' textColor='steelblue' />
                        <View style={styles.view}>
                            <Grid>
                                <Row>
                                    <Text style={styles.company}>Apartment</Text>
                                </Row>
                                <Row>
                                    <Text style={styles.location}>1 Bedroom 1 Bath</Text>
                                </Row>
                                <Row>
                                    <Text style={styles.location}>101 S Spruce St</Text>
                                </Row>
                            </Grid>
                        </View>
                        <Button
                            icon={{name: 'home'}}
                            backgroundColor='#8dc63f'
                            buttonStyle={{marginTop: 5, borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='View Home' />
                    </Card>
                </View>
            );
        } else {
            return (
                <View>
                    <Card
                        key={0}>
                        <View style={styles.view}>
                            <Text style={styles.title}>The Cow Palace</Text>
                        </View>
                        <Hr lineColor='#b3b3b3' textColor='steelblue' />
                        <View style={styles.stars}>
                            <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={4}
                                starSize={15}
                            />
                        </View>
                        <Button
                            icon={{name: 'room'}}
                            backgroundColor='#8dc63f'
                            buttonStyle={{marginTop: 5, borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='View Business'
                            />
                    </Card>
                </View>
            );
        }
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
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    company: {
        marginBottom: 5,
        marginTop: 5
    },
    location: {
        marginBottom: 5
    },
    view: {
        marginLeft: 7
    },
    stars: {
        marginLeft: 90,
        marginTop: 5,
        marginBottom: 5,
        width: 60
    }
});

export default Favorites;