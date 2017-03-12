import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Icon, Card, Button, Grid, Col, Row } from 'react-native-elements';

import Hr from 'react-native-hr';

import Accordion from 'react-native-collapsible/Accordion';

import StarRating from 'react-native-star-rating';

let results = "";

import { Pie } from 'react-native-pathjs-charts';

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

let data = [{
    "name": "Chicago",
    "jobs": 20,
    "homes": 20,
    "stuff": 30
}, {
    "name": "San Diego",
    "jobs": 30,
    "homes": 25,
    "stuff": 40
}, {
    "name": "Seattle",
    "jobs": 80,
    "homes": 20,
    "stuff": 30,
    "color": {'r':223,'g':154,'b':20}
}, {
    "name": "Phoenix",
    "jobs": 15,
    "homes": 50,
    "stuff": 20
}];

let options = {
    margin: {
        top: 20,
        left: 0,
        right: 50,
        bottom: 20
    },
    width: 310,
    height: 310,
    color: '#2980B9',
    r: 50,
    R: 150,
    legendPosition: 'topLeft',
    animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
    },
    label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        color: '#ECF0F1'
    }
};

class Stats extends Component {

    renderHeader(section) {
        return (
            <View style={styles.rating}>
                <Text style={styles.seeRatings}>{section.title}</Text>
            </View>
        );
    }

    renderContent(section) {
        if(section.title === "Jobs") {
            return (
                <View>
                    <Pie data={data}
                         options={options}
                         accessorKey="jobs"
                         margin={{top: 20, left: 0, right: 230, bottom: 20}}
                         color="#2980B9"
                         pallete={
            [
              {'r':25,'g':99,'b':201},
              {'r':24,'g':175,'b':35},
              {'r':190,'g':31,'b':69},
              {'r':100,'g':36,'b':199},
              {'r':214,'g':207,'b':32},
              {'r':198,'g':84,'b':45}
            ]
          }
                         r={50}
                         R={150}
                         legendPosition="topLeft"
                         label={{
            fontFamily: 'Arial',
            fontSize: 8,
            fontWeight: true,
            color: '#ECF0F1'
          }}
                    />
                </View>
            );
        } else if(section.title === "Homes") {
            return (
                <View>
                    <Pie data={data}
                         options={options}
                         accessorKey="homes"
                         margin={{top: 20, left: 0, right: 230, bottom: 20}}
                         color="#2980B9"
                         pallete={
            [
              {'r':25,'g':99,'b':201},
              {'r':24,'g':175,'b':35},
              {'r':190,'g':31,'b':69},
              {'r':100,'g':36,'b':199},
              {'r':214,'g':207,'b':32},
              {'r':198,'g':84,'b':45}
            ]
          }
                         r={50}
                         R={150}
                         legendPosition="topLeft"
                         label={{
            fontFamily: 'Arial',
            fontSize: 8,
            fontWeight: true,
            color: '#ECF0F1'
          }}
                    />
                </View>
            );
        } else {
            return (
                <View>
                    <Pie data={data}
                         options={options}
                         accessorKey="stuff"
                         margin={{top: 20, left: 0, right: 230, bottom: 20}}
                         color="#2980B9"
                         pallete={
            [
              {'r':25,'g':99,'b':201},
              {'r':24,'g':175,'b':35},
              {'r':190,'g':31,'b':69},
              {'r':100,'g':36,'b':199},
              {'r':214,'g':207,'b':32},
              {'r':198,'g':84,'b':45}
            ]
          }
                         r={50}
                         R={150}
                         legendPosition="topLeft"
                         label={{
            fontFamily: 'Arial',
            fontSize: 8,
            fontWeight: true,
            color: '#ECF0F1'
          }}
                    />
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
                        name="explore"
                    />
                    <Text style={styles.heroText}>Compare Cities</Text>
                </View>
                <Card
                    title="See What City Has The Most Hits">
                    <Accordion
                        sections={SECTIONS}
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

export default Stats;