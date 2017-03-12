import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Card, Icon, Grid, Row, Column, Button } from 'react-native-elements';

import Hr from 'react-native-hr'
import Toast from 'react-native-simple-toast';

class HousingCard extends Component {
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
            this.showToast('Removed Home');
        } else {
            // favorite
            this.setState({
                favorite: 'favorite',
                didFavorite: true
            });
            this.showToast('Saved Home');
        }
    }

    showToast(message) {
        Toast.show(message);
    }

    render () {
        return (<View>
            <Card
                key={0}
                image={{uri: this.props.image}}>
                <View style={styles.view}>
                    <Text style={styles.title}>{this.props.price}</Text>
                </View>
                <Hr lineColor='#b3b3b3' textColor='steelblue' />
                <View style={styles.view}>
                    <Grid>
                        <Row>
                            <Text style={styles.company}>{this.props.houseType}</Text>
                        </Row>
                        <Row>
                            <Text style={styles.location}>{this.props.attributes}</Text>
                        </Row>
                        <Row>
                            <Text style={styles.location}>{this.props.address}</Text>
                        </Row>
                    </Grid>
                </View>
                <Icon
                    name={this.state.favorite}
                    color={'#8dc63f'}
                    onPress={() => this.favorite()}
                />
                <Button
                    icon={{name: 'home'}}
                    backgroundColor='#8dc63f'
                    buttonStyle={{marginTop: 5, borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='View Home' />
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
        textAlign: 'center'
    },
    company: {
        marginBottom: 5,
        marginTop: 5
    },
    location: {
        marginBottom: 5
    }
});

export default HousingCard;