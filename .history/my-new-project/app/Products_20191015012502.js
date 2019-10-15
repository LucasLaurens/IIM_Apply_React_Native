import React, {Component} from 'react';
import { View, FlatList, Text } from 'react-native';
import axios from 'axios'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        try {
            let response = await axios.get('https://fr-en.openfoodfacts.org/1.json')
            let productList = await response.json()

            this.setState({
                products: productList.products
            })
        } catch (e) {
            console.log(e)
        }
    }

    render(){
        return (
            <View>
                <FlatList
                    data={this.state.products}
                    keyExtractor={(x, i) => i }
                    renderItem={
                          ({item}) => <Text>{item.brands_tags}</Text>
                        }
                    />
            </View>
        )
    }
}