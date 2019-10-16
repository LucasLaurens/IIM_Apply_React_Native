import React, {Component} from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';
import Btn from './utilities/Button';
import { Button } from 'react-native-elements';

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
                    <View >
                        <Button
                            buttonStyle= {{
                                backgroundColor: "#c0392b"
                            }}
                            titleStyle={{
                                color: "#fff",
                                fontWeight: "700"
                            }}
                            type="solid"
                            title="Scan"
                            onPress={() => {
                                this.props.navigation.navigate('Scan');
                            }}
                        />
                    </View>
                    <View>
                        <FlatList
                            data={this.state.productList}
                            renderItem={
                                ({item, index}) => <Item
                                                products={item}
                                                index={index} 
                                                title={item.product_name} 
                                                uri={item.image_small_url}
                                                id={item.id}
                                                expire_at={item.expiration_date}
                                                qty={item.product_quantity} />
                                }
                            keyExtractor={({id}, i) => id }
                            />
                    </View>
                </View>
            )
        } else {
            return (
                <View>
                    <Text style={styles.loading}>Loading...</Text>
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
                <Image
                    style={styles.margin}
                    style={styles.img}
                    source={{uri: this.props.uri}}
                />
                <Text style={[styles.listName, styles.margin, (this.props.index%2 == 0) ? {color: "#FFF"} : {color: "#e74c3c"}]}>{this.props.title}</Text>
                <Text style={[styles.listText, {marginTop: 15}, (this.props.index%2 == 0) ? {color: "#FFF"} : {color: "#e74c3c"}]}>Expire at : {this.props.expire_at}</Text>
                <Text style={[styles.listText, (this.props.index%2 == 0) ? {color: "#FFF"} : {color: "#e74c3c"}]}>Quantity : {this.props.qty}</Text>
                <Btn
                    buttonStyle={(this.props.index%2 == 0) ? {borderColor: "#FFF"} : {borderColor: "#e74c3c"}}
                    titleStyle={(this.props.index%2 == 0) ? {color: "#FFF"} : {color: "#e74c3c"}}
                    iconColor={(this.props.index%2 == 0) ? {color: "#FFF"} : {color: "#e74c3c"}}
                    style={styles.margin}
                    itemId={this.props.id}
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
        display: "flex",
    },
    listName: {
        textAlign: "center",
        fontWeight: "700",
        fontSize: 30
    },
    img: {
        width: "100%", 
        height: 250
    },
    listText: {
        textAlign: "center",
        fontSize: 15
    },
    jambotron: {
        backgroundColor: "#e74c3c"
    },
    loading: {
        marginTop: "50%",
        marginLeft: "25%",
        fontSize: 35,
        fontWeight: "700"
    }

})