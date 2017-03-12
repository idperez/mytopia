import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Card, Icon, Grid, Row, Column, Button } from 'react-native-elements';

import Hr from 'react-native-hr'
import Toast from 'react-native-simple-toast';
import StarRating from 'react-native-star-rating';

import { Actions } from 'react-native-router-flux';

class JobCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            didFavorite: false,
            favorite: 'favorite-border'
        };
    }

    favorite() {
        if(this.state.didFavorite) {
            // un-favorite
            this.setState({
                favorite: 'favorite-border',
                didFavorite: false
            });
            this.showToast('Removed Job');
        } else {
            // favorite
            this.setState({
                favorite: 'favorite',
                didFavorite: true
            });
            this.showToast('Saved Job');
        }
    }

    showToast(message) {
        Toast.show(message);
    }

    viewJob() {
        Actions.job({jobTitle : this.props.title});
    }

    render () {
        return (<View>
            <Card
                key={0} >
                <View style={styles.view}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <Hr lineColor='#b3b3b3' textColor='steelblue' />
                <View style={styles.view}>
                    <Grid>
                        <Row>
                            <Text style={styles.company}>{this.props.company}</Text>
                        </Row>
                        <Row>
                            <Text style={styles.location}>{this.props.location}</Text>
                        </Row>
                        <Row>
                            <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={this.props.rating}
                                starSize={20}
                            />
                        </Row>
                    </Grid>
                </View>
                <Icon
                    name={this.state.favorite}
                    color={'#8dc63f'}
                    onPress={() => this.favorite()}
                />
                <Button
                    icon={{name: 'work'}}
                    backgroundColor='#8dc63f'
                    buttonStyle={{marginTop: 5, borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='View Job'
                    onPress={this.viewJob.bind(this)}/>
            </Card>
        </View>);
    }
}

const styles = StyleSheet.create({
    view: {
        marginLeft: 7
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
    }
});

export default JobCard;