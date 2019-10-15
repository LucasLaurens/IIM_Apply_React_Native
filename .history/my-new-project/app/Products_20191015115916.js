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
            isLoading: false
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
                isLoading: true
            })
        }).catch(e => {
            console.error(e)
        })
    }

    Item() {
        return (
            <Animated.View                 // Special animatable View
                style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
                <Text>{this.props.title}</Text>
                <Image
                    style={{width: 66, height: 58}}
                    source={{uri: this.props.uri}}
                />
                <Text>{this.props.expire_at}</Text>
                <Text>{this.props.qty}</Text>
                <Button
                    title="More Details"
                    onPress={() => navigate('Profile', {name: 'Jane'})}
                />
            </Animated.View>
        );
    }

          
    render(){
        if(this.state.isLoading){
            return (
                <View>
                    <FlatList
                        style={styles.productList}
                        data={this.state.productList}
                        renderItem={
                            ({item}) => <Item 
                                            title={item.product_name} 
                                            uri={item.image_url} 
                                            expire_at={item.expiration_date}
                                            qty={item.product_quantity} />
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

const FadeInView = (props) => {
    const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0
  
    React.useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 10000,
        }
      ).start();
    }, [])

const styles = StyleSheet.create({
    productList: {
        backgroundColor: "#ccc",
        color: "#444"
    }
})