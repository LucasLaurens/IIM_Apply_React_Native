import React, {Component} from 'react';
import { View, FlatList, Text } from 'react-native';

export default class Home extends Component {

    static navigationOptions = {
        title: 'Product',
    };

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
                isLoading: é
            })
        }).catch(e => {
            console.error(e)
        })
    }
{/* <Image
          style={{width: 66, height: 58}}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRF */}
    render(){
        if(this.state.isLoading){
            return (
                <View>
                    <FlatList
                        data={this.state.productList}
                        renderItem={
                            ({item}) => <Text>{item.product_name}</Text>
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