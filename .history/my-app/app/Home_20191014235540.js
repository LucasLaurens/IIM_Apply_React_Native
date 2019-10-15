import React, {Component} from 'react';
import { Text, View, Button, TextInput, FlatList } from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            food: [],
            isLoading: false
        }
    }

    async getFood() {
        let response = await fetch('https://fr-en.openfoodfacts.org/1.json')
        let food = await response.json()
        return food
    }

    async componentDidMount() {
        let foodList = await this.getFood() 
        this.setState({
            isLoading: true,
            food: foodList
        })
    }

    render(){
        let { food } = this.state;
        return (
            <View>
                <Text>{this.props.name}</Text>

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