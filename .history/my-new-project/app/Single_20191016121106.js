import React, {Component} from 'react';
import { View, Text } from 'react-native';

export default class extends Component {
    constructor (props) {
        super(props)

        this.state = {
            productId: this.props.navigation.getParam('itemId', 0),
            product: []
        }
    }

    componentDidMount() {
        return fetch(`https://world.openfoodfacts.org/api/v0/product/${this.state.productId}.json`)
                .then(res => {
                    return res.json()
                })
                .then(responseAProduct => {
                    this.setState({
                        product: responseAProduct
                    })
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
        const {product} = this.state.product
        return(
            <View>
                <Text>{product.generic_name}</Text>
            </View>
        )
    }
}