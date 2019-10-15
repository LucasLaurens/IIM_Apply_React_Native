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
        try {
            let response = fetch('https://fr-en.openfoodfacts.org/1.json')
                            .then(res => {
                                res = response.json()
                            })

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
                    keyExtractor={({id}, i) => id }
                    renderItem={
                          ({item}) => <Text>{item.brands_tags}</Text>
                        }
                    />
            </View>
        )
    }
}