import React, {Component} from 'react';
import { View, FlatList, Text, StyleSheet, Image, Button } from 'react-native';

export default class Products extends Component {

    static navigationOptions = {
        title: 'Produits',
    };

    constructor(props) {
        super(props)
        this.state = {
            productList: [],
            isLoading: false
        }
    }

    componentDidMount() {
        return fetch("https://fr-en.openfoodfacts.org/category/waters.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
                method: "GET",
                cache: "no-cache",
                mode: "cors",
        })
        .then(res => {
            return res.json()
        })
        .then(responseJson => {
            this.setState({
                productList: responseJson.products,
                isLoading: true
            })
        }).catch(e => {
            console.error(e)
        })
    }

          
    render(){
        if(this.state.isLoading){
            return (
                <View>
                    <FlatList
                        data={this.state.productList}
                        renderItem={
                            ({item}) => <Item 
                                            title={item.product_name} 
                                            uri={item.image_url}
                                            id={item.id}
                                            expire_at={item.expiration_date}
                                            qty={item.product_quantity} />
                            }
                        keyExtractor={({id}, i) => id }
                        />
                </View>
            )
        } else {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        }
    }
}

class Item extends Component {
    constructor (props) {
        super(props)
    }


    render () {
        return (
            <View style={styles.list}>
                <Text style={styles.listName}>{this.props.title}</Text>
                <Image
                    style={{width: 250, height: 250}}
                    source={{uri: this.props.uri}}
                />
                <Text>{this.props.expire_at}</Text>
                <Text>{this.props.qty}</Text>
                <Button
                    style={styles.listBtn}
                    title="More Details"
                    onPress={() => {
                        this.props.navigation.navigate('single', {
                        itemId: this.props.id,
                        });
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        width: "100%",
        margin: "5%"
    },
    listName: {
        fontWeight: "700",
        marginBottom: "2%"
    },
    listImage: {
        marginBottom: "2%"
    },
    listBtn: {
        backgroundColor: "blue"
    }

})