import React, {Component} from 'react';
import { View, FlatList, Text } from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productList: []
        }
    }

    componentDidMount() {
            // https://fr-en.openfoodfacts.org/1.json
            return fetch('https://fr-en.openfoodfacts.org/category/waters.json', {
                headers: {
                    'Content-Type': 'application/json',
                    method: "GET"
                }
            })
            .then(res => {
                return res.json()
            })
            .then(response => {
                this.setState({
                    productList: response.products
                })
            }).catch(e => {
                console.error(e)
            })
    }

    render(){
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
    }
}