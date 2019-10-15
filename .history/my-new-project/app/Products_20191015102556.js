import React, {Component} from 'react';
import { View, FlatList, Text } from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productList: [],
            isLoading: true
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
                isLoading: false
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
                            ({item}) => <Text>{item.brands}</Text>
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