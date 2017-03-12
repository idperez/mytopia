import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet, Navigator, Text, Icon } from 'react-native';

import Home from './app/Home/Home';
import Search from './app/Home/Search';

import JobPage from './app/Home/Jobs/JobPage';
import HomePage from './app/Home/Housing/HomePage';
import LifePage from './app/Home/Life/LifePage';

import Stats from './app/Stats/Stats';

import Preferences from './app/Home/Preferences';

import Favorites from './app/Favorites/Favorites';

import { Router, Scene } from 'react-native-router-flux';

export default class mytopia extends Component {

    render() {
        const TabIcon = ({ selected, title }) => {
            return (
                <Text style={{color: selected ? '#00704a' :'black'}}>{title}</Text>
            );
        };

        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="tabbar"
                        tabs
                        tabBarStyle={{ backgroundColor: '#ffffff'}} >
                        <Scene key="main" title="HOME" icon={TabIcon}>
                            <Scene
                                key="search"
                                component={Search}
                                title={<Text style={styles.headerText}>mytopia</Text>}
                                initial
                            />
                            <Scene
                                key="home"
                                component={Home}
                                title={<Text style={styles.headerText}>mytopia</Text>}
                            />
                            <Scene
                                key="job"
                                component={JobPage}
                                title={<Text style={styles.headerText}>mytopia</Text>}
                            />
                            <Scene
                                key="house"
                                component={HomePage}
                                title={<Text style={styles.headerText}>mytopia</Text>}
                            />
                            <Scene
                                key="life"
                                component={LifePage}
                                title={<Text style={styles.headerText}>mytopia</Text>}
                            />
                            <Scene
                                key="preferences"
                                component={Preferences}
                                title={<Text style={styles.headerText}>mytopia</Text>}
                            />
                        </Scene>
                        <Scene key="fav" title="SAVED" icon={TabIcon}>
                            <Scene
                                key="favorites"
                                component={Favorites}
                                title={<Text style={styles.headerText}>mytopia</Text>}
                                initial
                            />
                        </Scene>
                        <Scene key="stats" title="STATS" icon={TabIcon}>
                            <Scene
                                key="graphs"
                                component={Stats}
                                title={<Text style={styles.headerText}>mytopia</Text>}
                                initial
                            />
                        </Scene>
                        <Scene key="more" title="MORE" icon={TabIcon}>
                            <Scene
                                key="search"
                                component={Search}
                                title={<Text style={styles.headerText}>mytopia</Text>}
                                initial
                            />
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 30
    },
    headerText: {
        color: '#00704a',
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        fontStyle: 'italic'
    }
});

AppRegistry.registerComponent('mytopia', () => mytopia);
