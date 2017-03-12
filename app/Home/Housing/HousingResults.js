import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Card } from 'react-native-elements';

import HousingCard from './HousingCard';

import HouseSearchData from './../../../lib/HouseSearchData';

const data = [{
 price: '$760,000',
 houseType: 'Single Family Home',
 attributes: '4 Beds 4 Full, 1 Half Baths',
 address: '12 Salisbury Ln.  Township of Washington, NJ 07853',
 realtor:
 { name: 'Debra Burke',
 company: 'Coldwell Banker Residential Brokerage Chester/Hackettstown Office',
 phone: '(908) 879-4900' },
 photo: 'http://img5.homefinder.com/i/4b17b104-fe4c-11e6-9eaa-ecf4bbed67d8/w200-h-q'
 } ];

let results = "";

class HousingResults extends Component {
    constructor(props) {
        super(props);
        this.state = {favorite: 'favorite-border'};
    }

    componentDidMount() {

        results = <Text>loading...</Text>;

        this.state = {results: results};

        let city = this.props.location.split(',')[0];
        let state = this.props.location.split(',')[1];

        HouseSearchData.getHousingSearchData(city, state).then((res) => {

            results = res.houseList.map((house, i) => {
                return <HousingCard
                    key={i}
                    price={house.price}
                    houseType={house.houseType}
                    attributes={house.attributes}
                    address={house.address} />;
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