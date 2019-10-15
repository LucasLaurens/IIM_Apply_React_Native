import React, {Component} from 'react';
import { Text, View, Button, TextInput, FlatList } from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: '',
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
            isLoading: true
            food: foodList
        })
    }

    pressButton2(e) {
        e.preventDefault();
        alert(e)
    }

    render(){
        let { food } = this.state;
        return (
            <View>
                <Text>{this.props.name}</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Ecrire un text..."
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    />
                <Button onPress={this.pressButton2} title="Afficher le text"></Button>
                <Text>{this.state.text !== "" ? this.state.text : "Vous n'avez pas encore envoyé une text via l'input"}</Text>

                <FlatList
                    data={[
                        {key: food}
                      ]}
                      renderItem={({item}) => {
                      <Text>{item.brands_tags}</Text>
                      
                      }}
                    />
            </View>
        )
    }
}