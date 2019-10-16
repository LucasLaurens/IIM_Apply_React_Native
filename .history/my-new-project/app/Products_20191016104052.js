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
                            ({item, index}) => <Item
                                            index={index} 
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
            <View style={[styles.list, (this.props.index%2 == 0) ? styles.jambotron : ""]}>
                <Text style={[styles.listName, styles.margin]}>{this.props.title}</Text>
                <Image
                    style={styles.margin}
                    style={{width: 250, height: 250, marginLeft: "15%", marginRight: "15%"}}
                    source={{uri: this.props.uri}}
                />
                <Text style={[styles.listText]}>Expire at : {this.props.expire_at}</Text>
                <Text style={[styles.listText]}>Quantity : {this.props.qty}</Text>
                <Button
                    style={styles.margin}
                    title="More Details"
                    color="#e74c3c"
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
    margin: {
        margin: 15
    },
    list: {
        width: "100%",
    },
    listName: {
        textAlign: "center",
        fontWeight: "700",
        color: "#c0392b",
        fontSize: 30
    },
    listText: {
        textAlign: "center",
        color: "#e74c3c",
        fontSize: 15
    },
    jambotron: {
        backgroundColor: "#ecf0f1"
    }

})