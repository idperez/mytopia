import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Card } from 'react-native-elements';

import todoSearchResults from './../../../lib/todoSearchResults';

import LifeCard from './LifeCard';

let results = "";

class LifeResults extends Component {
    constructor(props) {
        super(props);
        this.state = {favorite: 'favorite-border'};
    }

    componentDidMount() {

        results = <Text>loading...</Text>;

        this.state = {results: results};

        let city = this.props.location.split(',')[0];
        let state = this.props.location.split(',')[1];

        todoSearchResults.getTodoList(city, state).then((res) => {

            results = res.map((life, i) => {
                return <LifeCard
                    key={i}
                    image={life.image_url}
                    name={life.name}
                    rating={life.rating}
                     />;
            });
            this.setState({results: results});

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

/*
 {
 "distance": 6097.220680178,
 "phone": "+19086386969",
 "categories": [
 {
 "alias": "parks",
 "title": "Parks"
 },
 {
 "alias": "hiking",
 "title": "Hiking"
 }
 ],
 "is_closed": false,
 "transactions": [],
 "name": "Hacklebarney State Park",
 "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/80ninBYFPQ0z-eHs9Owpag/o.jpg",
 "id": "hacklebarney-state-park-long-valley",
 "location": {
 "address2": "",
 "city": "Long Valley",
 "address3": "",
 "display_address": [
 "119 Hacklebarney Rd",
 "Long Valley, NJ 07853"
 ],
 "zip_code": "07853",
 "address1": "119 Hacklebarney Rd",
 "country": "US",
 "state": "NJ"
 },
 "url": "https://www.yelp.com/biz/hacklebarney-state-park-long-valley?adjust_creative=z4rq50TEkyGgxdcoaC1u2g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=z4rq50TEkyGgxdcoaC1u2g",
 "review_count": 31,
 "coordinates": {
 "latitude": 40.7513402,
 "longitude": -74.7328419
 },
 "rating": 4.5,
 "display_phone": "(908) 638-6969"
 }
 */

export default LifeResults;