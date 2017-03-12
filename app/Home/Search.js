import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, WebView } from 'react-native';

import { Button, Card, SearchBar, Grid, Row, Icon } from 'react-native-elements';

import { Actions } from 'react-native-router-flux';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = { query: 'Austin, TX' };
    }

    search() {
        Actions.home({ location: this.state.query });
    }

    updateText(input) {
        this.setState({query: input});
    }

    editSelected() {
        Actions.preferences();
    }

    render () {
        return <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
            <View style={styles.hero}>
                <Image
                    source={require('./../Images/icon.png')}
                    style={styles.image}
                />
            </View>
            <View >
                <Card
                    title='Start Your Search'>
                    <SearchBar
                        lightTheme
                        placeholder='Ex: Seattle, WA'
                        onChangeText={this.updateText.bind(this)}
                        onSubmitEditing={this.search.bind(this)}
                    />
                </Card>
                <Card
                    title='Edit Your Preferences'>
                    <Button
                        backgroundColor='#00704a'
                        buttonStyle={styles.logInButton}
                        iconRight
                        title='Edit'
                        onPress={this.editSelected.bind(this)}/>
                </Card>
                <Card
                    title='Live, Work, Play.'>
                    <Text style={styles.cardText}>
                        Mytopia gives you the opportunity to rethink how we find new opportunities, we give you the tools to make the most educated decision for YOU.
                    </Text>
                    <Button
                        backgroundColor='#00704a'
                        buttonStyle={styles.logInButton}
                        iconRight
                        title='Log In'/>
                    <Button
                        backgroundColor='#00704a'
                        buttonStyle={styles.logInButton}
                        iconRight
                        title='Create Account'/>
                </Card>
            </View>
        </ScrollView>;
    };
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

export default Search;