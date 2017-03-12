import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';

import { Icon, Card, Button } from 'react-native-elements'


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
                    <Text style={styles.heroText}> Your Preferences</Text>
                </View>
                <View >
                    <Card
                        title='Edit Job Preferences'>
                        <Text style={styles.cardText}>Job Title</Text>
                        <TextInput
                            style = {styles.cardText}
                            placeholder = 'Software Engineer'
                        />
                        <Button
                            icon={{name: 'work'}}
                            backgroundColor='#8dc63f'
                            buttonStyle={{marginTop: 5, borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Save Job Preferences'
                            />
                    </Card>
                    <Card
                        title='Edit Housing Preferences'>
                        <Text style={styles.cardText}>Min Price</Text>
                        <TextInput
                            style = {styles.cardText}
                            placeholder = '$1000'
                        />
                        <Text style={styles.cardText}>Max Price</Text>
                        <TextInput
                            style = {styles.cardText}
                            placeholder = '$2300'
                        />
                        <Text style={styles.cardText}>Bedrooms</Text>
                        <TextInput
                            style = {styles.cardText}
                            placeholder = '1'
                        />
                        <Text style={styles.cardText}>Bathrooms</Text>
                        <TextInput
                            style = {styles.cardText}
                            placeholder = '1'
                        />
                        <Button
                            icon={{name: 'home'}}
                            backgroundColor='#8dc63f'
                            buttonStyle={{marginTop: 5, borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Save Housing Preferences'
                        />
                    </Card>
                    <Card
                        title='Edit Things To Do Preferences'>
                        <Text style={styles.cardText}>Food</Text>
                        <TextInput
                            style = {styles.cardText}
                            placeholder = 'Italian'
                        />
                        <Text style={styles.cardText}>Fun</Text>
                        <TextInput
                            style = {styles.cardText}
                            placeholder = 'Hiking, Movies'
                        />
                        <Button
                            icon={{name: 'favorite'}}
                            backgroundColor='#8dc63f'
                            buttonStyle={{marginTop: 5, borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Save Job Preferences'
                        />
                    </Card>

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
        marginBottom: 15,
        textAlign: 'center',
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

export default Preferences;