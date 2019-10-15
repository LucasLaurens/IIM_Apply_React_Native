import React, {Component} from 'react';
import { View } from 'react-native';

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
        console.log(products)
        return products.products
    }

    async componentDidMount() {
        let productsList = await this.getProducts() 
        this.setState({
            food: foodList
        })
    }

    render(){
        let { food } = this.state;
        return (
            <View>
                

                {/* <FlatList
                    data={[
                        {key: food}
                      ]}
                      renderItem={({item}) => {
                      <Text>{item.brands_tags}</Text>
                      
                      }}
                    /> */}
            </View>
        )
    }
}