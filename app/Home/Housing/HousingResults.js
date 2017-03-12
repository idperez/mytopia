import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Card } from 'react-native-elements';

import HousingCard from './HousingCard';

import HouseSearchData from './../../../lib/HouseSearchData';

let results = "";

class HousingResults extends Component {
    constructor(props) {
        super(props);
        this.state = {favorite: 'favorite-border'};
    }

    componentDidMount() {

        results = <Text>loading...</Text>;

        this.state = {results: results};

        let city = this.props.location.split(',')[0].trim();
        let state = this.props.location.split(',')[1].trim();

        HouseSearchData.getHousingSearchData(city, state).then((res) => {

            results = res.houseList.map((house, i) => {
                return <HousingCard
                    key={i}
                    image={house.photo}
                    price={house.price}
                    attributes={house.attributes}
                    address={house.address}
                    houseType={house.houseType}
                />;
            });

            this.setState({results: results});
        });
    }

    render () {
        return(
            <View>
                {this.state.results}
            </View>
        );
    }
}

export default HousingResults;