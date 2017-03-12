import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import { Icon, Grid, Row, Col, Card, ListItem, Button } from 'react-native-elements';

import JobPageData from './../../../lib/JobPageData';

import HouseSearchData from './../../../lib/HouseSearchData';
import HousingPageCard from './../Housing/HousingPageCard';

import todoListData from './../../../lib/todoSearchResults';
import LifePageCard from './../Life/LifePageCard';

import StarRating from 'react-native-star-rating';

let results = '';
let housing = '';
let life = '';

import Accordion from 'react-native-collapsible/Accordion';

import Hr from 'react-native-hr'

const SECTIONS = [
    {
        title: 'See Ratings'
    }
];

const MANAGEMENT = [
    {
        title: 'View Boss'
    }
];

const REVIEWS = [
    {
        title: 'See A Review'
    }
];

const HOMES = [
    {
        title: 'View Homes'
    }
];

const TODO = [
    {
        title: 'Explore Things To Do'
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
        this.state = {headline: 'No Reviews For This Company'};
        this.state = {pro: ''};
        this.state = {con: ''};
        this.state = {housing: <Text>loading...</Text>};
        this.state = {life: <Text>loading...</Text>};

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
            this.setState({headline: results.featuredReview.headline});
            this.setState({pro: results.featuredReview.pros});
            this.setState({con: results.featuredReview.cons});
        });

        HouseSearchData.getHousingSearchData('austin', 'tx').then((res) => {

            housing = res.houseList.map((house, i) => {
                return <HousingPageCard
                    key={i}
                    price={house.price}
                    attributes={house.attributes}
                    address={house.address}
                    houseType={house.houseType}
                />;
            });

            this.setState({housing: housing});
        });

        todoListData.getTodoList('austin', 'texas').then((res) => {

            life = res.map((life, i) => {
                return <LifePageCard
                    key={i}
                    name={life.name}
                    rating={life.rating}
                />;
            });

            this.setState({life: life});
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
                <Text style={styles.ratingText}>Headline</Text>
                <Text style={styles.ratingText}>{this.state.headline}</Text>
                <Hr lineColor='#b3b3b3' textColor='steelblue' />
                <Text style={styles.ratingText}>Pros</Text>
                <Text style={styles.ratingText}>{this.state.pro}</Text>
                <Hr lineColor='#b3b3b3' textColor='steelblue' />
                <Text style={styles.ratingText}>Cons</Text>
                <Text style={styles.ratingText}>{this.state.con}</Text>
            </View>
        );
    }

    renderHeaderHomes(section) {
        return (
            <View style={styles.ratingStart}>
                <Text style={styles.seeRatings}>{section.title}</Text>
            </View>
        );
    }

    renderContentHomes(section) {
        return (
            <View>
                {this.state.housing}
            </View>
        );
    }

    renderHeaderToDo(section) {
        return (
            <View style={styles.ratingStart}>
                <Text style={styles.seeRatings}>{section.title}</Text>
            </View>
        );
    }

    renderContentToDo(section) {
        return (
            <View>
                {this.state.life}
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
                            sections={REVIEWS}
                            renderHeader={this.renderHeaderReviews.bind(this)}
                            renderContent={this.renderContentReviews.bind(this)}
                        />
                    </Card>
                    <Card
                        title="Homes Nearby">
                        <Accordion
                            sections={HOMES}
                            renderHeader={this.renderHeaderHomes.bind(this)}
                            renderContent={this.renderContentHomes.bind(this)}
                        />
                    </Card>
                    <Card
                        title="Stuff Nearby">
                        <Accordion
                            sections={TODO}
                            renderHeader={this.renderHeaderToDo.bind(this)}
                            renderContent={this.renderContentToDo.bind(this)}
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