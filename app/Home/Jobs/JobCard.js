import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Card, Icon, Grid, Row, Column } from 'react-native-elements';

import Hr from 'react-native-hr'
import Toast from 'react-native-simple-toast';
import StarRating from 'react-native-star-rating';

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
                            <Text style={styles.company}>General Dynamics</Text>
                        </Row>
                        <Row>
                            <Text style={styles.location}>San Diego, CA</Text>
                        </Row>
                        <Row>
                            <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={3.7}
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