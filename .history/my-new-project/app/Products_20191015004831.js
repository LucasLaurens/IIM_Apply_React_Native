import React, {Component} from 'react';
import { View, FlatList } from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    async getProducts() {
        let response = await fetch('https://fr-en.openfoodfacts.org/1.json')
        let products = await response.json()
        return products.products
    }

    async componentDidMount() {
        let productsList = await this.getProducts() 
        this.setState({
            products: productsList
        })
        console.log(this.state.products)
    }

    render(){
        let { products } = this.state;
        return (
            <View>
                <FlatList
                    data={this.state.products}
                      renderItem={
                          ({item}) => <Text>{item.brands_tags}</Text>
                        }
                    />
            </View>
        )
    }
}