import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

export default class extends Component {
    constructor (props) {
        super(props)

        this.state = {
            productId: this.props.navigation.getParam('itemId', 0),
            product: {}
        }
    }

    componentDidMount() {
        return fetch(`https://world.openfoodfacts.org/api/v0/product/${this.state.productId}.json`)
                .then(res => {
                    return res.json()
                })
                .then(response => {
                    this.setState({
                        product: response.product
                    })
                }).catch(e => {
                    console.error(e)
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
        const { product } = this.state
        console.log(product)
        return(
            <View>
                <Text>{this.state.product.generic_name}</Text>
                <Image
                    style={{width: 250, height: 250, marginLeft: "15%", marginRight: "15%"}}
                    source={{uri: product.image_url}}
                />
            </View>
        )
    }
}