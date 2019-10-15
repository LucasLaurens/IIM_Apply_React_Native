import React, {Component} from 'react';
import { View, FlatList, Text } from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        try {
            let response = await fetch('https://fr-en.openfoodfacts.org/1.json')
            let products = await response.json()

            this.setState({
                products: products
            })
        } catch (e) {
            console.log(e)
        }
    }

    render(){
        let { products } = this.state;
        return (
            <View>
                <FlatList
                    data={products}
                      renderItem={
                          ({item}) => <Text>{item.brands_tags}</Text>
                        }
                    />
            </View>
        )
    }
}