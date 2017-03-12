import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Tabs, Tab, Icon } from 'react-native-elements';

import Search from './Home/Search';
import Home from './Home/Home'

class App extends Component {

    constructor() {
        super();
        this.state = {
            selectedTab: 'home',
        }
    }

    changeTab (selectedTab) {
        this.setState({selectedTab})
    }

    render() {
        const { selectedTab } = this.state;
        return (
            <Tabs>
                <Tab
                    titleStyle={styles.title}
                    selectedTitleStyle={styles.selectedTitle}
                    selected={selectedTab === 'home'}
                    title={selectedTab === 'home' ? 'HOME' : null}
                    renderIcon={() => <Icon style={styles.iconContainer} color={'#5e6977'} name='home' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='home' size={30} />}
                    onPress={() => this.changeTab('home')}>
                    <Search navigator={this.props.navigator} />
                </Tab>
                <Tab
                    titleStyle={styles.title}
                    selectedTitleStyle={styles.selectedTitle}
                    selected={selectedTab === 'saved'}
                    title={selectedTab === 'saved' ? 'SAVED' : null}
                    renderIcon={() => <Icon style={styles.iconContainer} color={'#5e6977'} name='favorite' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='favorite' size={30} />}
                    onPress={() => this.changeTab('saved')}>
                    <Home />
                </Tab>
                <Tab
                    titleStyle={styles.title}
                    selectedTitleStyle={styles.selectedTitle}
                    selected={selectedTab === 'compare'}
                    title={selectedTab === 'compare' ? 'COMPARE' : null}
                    renderIcon={() => <Icon style={styles.iconContainer} color={'#5e6977'} name='library-books' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='library-books' size={30} />}
                    onPress={() => this.changeTab('compare')}>
                    <Home />
                </Tab>
                <Tab
                    titleStyle={styles.title}
                    selectedTitleStyle={styles.selectedTitle}
                    selected={selectedTab === 'more'}
                    title={selectedTab === 'more' ? 'MORE' : null}
                    renderIcon={() => <Icon style={styles.iconContainer} color={'#5e6977'} name='list' size={33} />}
                    renderSelectedIcon={() => <Icon color={'#6296f9'} name='list' size={30} />}
                    onPress={() => this.changeTab('more')}>
                    <Home />
                </Tab>
            </Tabs>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 10
    },
    selectedTitle: {
        marginTop: -1,
        marginBottom: 6
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12
    }
});

export default App