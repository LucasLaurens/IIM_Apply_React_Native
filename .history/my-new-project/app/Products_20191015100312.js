import React, {Component} from 'react';
import { View, FlatList, Text } from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
            // https://fr-en.openfoodfacts.org/1.json
            return fetch('https://fr-en.openfoodfacts.org/category/waters.json')
                            .then(res => {
                                return res.json()
                            })
                            .then(response => {
                                this.setState({
                                    products: response.products
                                })
                            })
    }

    render(){
        return (
            <View>
                <FlatList
                    data={this.state.products}
                    renderItem={
                          ({item}) => <Text>{item.brands_tags}</Text>
                        }
                    keyExtractor={({id}, i) => id }
                    />
            </View>
        )
    }
}