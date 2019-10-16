import React, {Component} from 'react';
import { View, Text } from 'react-native';

export default class extends Component {
    constructor (props) {
        super(props)

        this.state = {
            productId: this.props.navigation.getParam('itemId', 0)
        }
    }

    componentDidMount() {
        return fetch(`https://world.openfoodfacts.org/api/v0/product/${this.state.productId}.json`)
                .then(res => {
                    res.json()
                })
                .then(responseAProduct => {
                    console.log(responseAProduct)
                })

        /* 
        details à ajouter : 

        - generic_name
        - categories
        - quantity ?
        - image_url
        - nutriments (bouche for)


        */
    }

    render() {
        return(
            <View>
                <Text>Single</Text>
            </View>
        )
    }
}