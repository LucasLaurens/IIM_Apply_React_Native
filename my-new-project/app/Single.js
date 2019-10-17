import React, {Component} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class extends Component {

    static navigationOptions = {
        title: 'Single',
    };

    constructor (props) {
        super(props)

        this.state = {
            productId: this.props.navigation.getParam('itemId', 0),
            index: this.props.navigation.getParam('index', 0),
            product: {},
            status: ""
        }
    }

    componentDidMount() {
        return fetch(`https://fr-en.openfoodfacts.org/api/v0/product/${this.state.productId}.json`)
                .then(res => {
                    return res.json()
                })
                .then(response => {
                    let product = response.product
                    let status = response.status

                    if(product && product.categories_hierarchy.includes("en:fruits-and-vegetables-based-foods") && status == 1) {
                        this.setState({
                            product: response.product,
                            status: "Loaded !!"
                        })
                    } else {
                        this.setState({
                            status: "error"
                        })
                    }
                }).catch(e => {
                    console.error(e)
                })
    }

    render() {
        const { product, index, status } = this.state
        if(status === "error") {
            return (
                <View style={[styles.list, (index%2 != 0) ? {backgroundColor: "#FFF"} : {backgroundColor: "#e74c3c"}]}>
                    <Text style={[styles.name, styles.margin, (index%2 == 0) ? {color: "#FFF"} : {color: "#e74c3c"}, styles.loading]}>You can only search vegetable and fruit...</Text>
                </View>
            )
        } else {
            return(
                <View style={[styles.list, (index%2 != 0) ? {backgroundColor: "#FFF"} : {backgroundColor: "#e74c3c"}]}>
                    <Text style={[styles.name, styles.margin, (index%2 == 0) ? {color: "#FFF"} : {color: "#e74c3c"}]}>{ product.product_name }</Text>
                    <Image
                        style={[styles.image, {height: 250}]}
                        source={{uri: product.image_url}}
                    />
                    <Text style={[styles.text, styles.margin, (index%2 == 0) ? {color: "#FFF"} : {color: "#e74c3c"}]}>categories ({product.categories}) </Text>
                    <Text style={[styles.listText, {marginTop: 15}, (index%2 == 0) ? {color: "#FFF"} : {color: "#e74c3c"}, {textAlign: "center"}]}>Expire at : {product.expiration_date ? product.expiration_date : "Il n'y a pas de données"}</Text>
                    <Text style={[styles.listText, (index%2 == 0) ? {color: "#FFF"} : {color: "#e74c3c"}, {textAlign: "center"}]}>Quantity : {product.quantity}</Text>
                    <Button
                        type="solid"
                        title="Products"
                        buttonStyle={[(index%2 == 0) ? {backgroundColor: "#FFF"} : {backgroundColor: "#e74c3c"}, {marginTop: 15}]}
                        titleStyle={(index%2 != 0) ? {color: "#FFF"} : {color: "#e74c3c"}}
                        onPress={() => {
                            this.props.navigation.navigate('Products');
                        }}
                    />
                </View>
            )
        }
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
    },
    loading: {
        color: "#fff",
        textAlign: "center",
        marginTop: "50%",
        fontSize: 35,
        fontWeight: "700"
    }

})