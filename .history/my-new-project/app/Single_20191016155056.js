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
            index: this.props.navigation.getParam('index', 0),
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
    }

    render() {
        const { product, index } = this.state
        return(
            <View style={[styles.list, (index%2 != 0) ? {backgroundColor: "#FFF"} : {backgroundColor: "#e74c3c"}]}>
                <Text style={[styles.name, styles.margin, (index%2 == 0) ? {color: "#FFF"} : {color: "#e74c3c"}]}>{ product.product_name }</Text>
                <Image
                    style={[styles.image, {height: 250}]}
                    source={{uri: product.image_url}}
                />
                <Text style={[styles.text, styles.margin, (index%2 == 0) ? {color: "#FFF"} : {color: "#e74c3c"}]}> categories ({product.categories}) </Text>
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
        height: "100%"
    },
    image: {
        width: "100%"
    },
    name: {
        textAlign: "center",
        fontWeight: "700",
        fontSize: 30
    },
    text: {
        fontSize: 15
    }

})