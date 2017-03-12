import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import { Icon, Grid, Row, Col, Card, ListItem, Button } from 'react-native-elements';

import JobPageData from './../../../lib/JobPageData';

import StarRating from 'react-native-star-rating';

let results = "";
let photo = "";

import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
    {
        title: 'See Ratings'
    }
];

const MANAGEMENT = [
    {
        title: 'View CEO'
    }
];

const REVIEWS = [
    {
        title: 'See A Review'
    }
];

class JobPage extends Component {

    constructor(props) {
        super(props);

        this.state = {favorite: 'favorite-border'};
    }

    componentDidMount() {

        results = <Text>loading...</Text>;

        this.state = {results: results};
        this.state = {photo: 'https://facebook.github.io/react/img/logo_og.png'};
        this.state = {cultureAndValuesRating: 0};
        this.state = {seniorLeadershipRating: 0};
        this.state = {compensationAndBenefitsRating: 0};
        this.state = {careerOpportunitiesRating: 0};
        this.state = {workLifeBalanceRating: 0};
        this.state = {ceoName: "Not Found"};
        this.state = {ceoPhoto: 'https://facebook.github.io/react/img/logo_og.png'};

        JobPageData.getCompanyInformation('Glassdoor').then((res) => {

            results = res;

            this.setState({results: results.name});
            this.setState({photo: results.squareLogo});
            this.setState({cultureAndValuesRating: results.cultureAndValuesRating});
            this.setState({seniorLeadershipRating: results.seniorLeadershipRating});
            this.setState({compensationAndBenefitsRating: results.compensationAndBenefitsRating});
            this.setState({careerOpportunitiesRating: results.careerOpportunitiesRating});
            this.setState({workLifeBalanceRating: results.workLifeBalanceRating});
            this.setState({ceoName: results.ceo.name});
            this.setState({ceoPhoto: results.ceo.image.src});
        });
    }

    renderHeader(section) {
        return (
            <View style={styles.ratingStart}>
                <Text style={styles.seeRatings}>{section.title}</Text>
            </View>
        );
    }

    renderContent(section) {
        return (
            <View style={styles.rating}>
                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={parseInt(this.state.cultureAndValuesRating)}
                    starSize={20}
                />
                <Text style={styles.ratingText}>Culture</Text>
                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={parseInt(this.state.seniorLeadershipRating)}
                    starSize={20}
                />
                <Text style={styles.ratingText}>Leadership</Text>
                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={parseInt(this.state.compensationAndBenefitsRating)}
                    starSize={20}
                />
                <Text style={styles.ratingText}>Benefits</Text>
                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={parseInt(this.state.careerOpportunitiesRating)}
                    starSize={20}
                />
                <Text style={styles.ratingText}>Opportunity</Text>
                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={parseInt(this.state.workLifeBalanceRating)}
                    starSize={20}
                />
                <Text style={styles.ratingText}>Work/Life Balance</Text>
            </View>
        );
    }

    renderHeaderManagement(section) {
        return (
            <View style={styles.ratingStart}>
                <Text style={styles.seeRatings}>{section.title}</Text>
            </View>
        );
    }

    renderContentManagement(section) {
        return (
            <View style={styles.rating}>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: this.state.ceoPhoto}}
                />
                <Text style={styles.ratingText}>{this.state.ceoName}</Text>
                <Text style={styles.ratingText}>CEO</Text>
            </View>
        );
    }

    renderHeaderReviews(section) {
        return (
            <View style={styles.ratingStart}>
                <Text style={styles.seeRatings}>{section.title}</Text>
            </View>
        );
    }

    renderContentReviews(section) {
        return (
            <View style={styles.rating}>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: this.state.ceoPhoto}}
                />
                <Text style={styles.ratingText}>{this.state.ceoName}</Text>
                <Text style={styles.ratingText}>CEO</Text>
            </View>
        );
    }

    render () {

        return(
            <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
                <View style={styles.hero}>
                    <Image
                        style={{width: 50, height: 50}}
                        source={{uri: this.state.photo}}
                    />
                    <Text style={styles.title}>{this.props.jobTitle}</Text>
                    <Text>{this.state.results}</Text>
                </View>
                    <Grid>
                        <Col>
                            <Card
                                title="Ratings">
                                <Accordion 
                                    sections={SECTIONS} 
                                    renderHeader={this.renderHeader.bind(this)} 
                                    renderContent={this.renderContent.bind(this)} 
                                />
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                title="Management">
                                <Accordion
                                    sections={MANAGEMENT}
                                    renderHeader={this.renderHeaderManagement.bind(this)}
                                    renderContent={this.renderContentManagement.bind(this)}
                                />
                            </Card>
                        </Col>
                    </Grid>
                    <Card
                        title="Reviews">
                        <Accordion
                            sections={MANAGEMENT}
                            renderHeader={this.renderHeaderReviews.bind(this)}
                            renderContent={this.renderContentReviews.bind(this)}
                        />
                    </Card>
            </ScrollView>
        );
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
    title: {
        marginTop: 5
    },
    rating: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    ratingStart: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    seeRatings: {
        color: '#00704a',
        fontWeight: 'bold',
        fontFamily: 'Verdana',
    },
    ratingText: {
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


export default JobPage;