import React, {Component} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class extends Component {

    static navigationOptions = {
        title: 'Single',
    };

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

        - categories
        - quantity ?
        - nutriments (bouche for)


        */
    }

    render() {
        const { product } = this.state
        return(
            <View style={[styles.list]}>
                <Text style={[styles.name, styles.margin]}>{ product.product_name }</Text>
                <Image
                    style={[styles.image, {height: 250}]}
                    source={{uri: product.image_url}}
                />
                <Text style={[styles.text, styles.margin]}> categories : {product.categories} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    margin: {
        margin: 15
    },
    list: {
        width: "100%",
        backgroundColor: "#c0392b",
        height: "100%"
    },
    image: {
        width: "100%"
    },
    name: {
        textAlign: "center",
        fontWeight: "700",
        color: "#fff",
        fontSize: 30
    },
    text: {
        textAlign: "center",
        color: "#e74c3c",
        fontSize: 15
    }

})