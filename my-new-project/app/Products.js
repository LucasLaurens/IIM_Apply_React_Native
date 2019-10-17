import React, {Component} from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';
import Btn from './utilities/Button';
import { Button, Icon, SearchBar } from 'react-native-elements';

export default class Products extends Component {

    static navigationOptions = {
        title: 'Produits',
    };

    constructor(props) {
        super(props)
        this.state = {
            productList: [],
            isLoading: false,
            search: '',
        }
    }

    componentDidMount() {
        return fetch("https://fr-en.openfoodfacts.org/category/vegetables-based-foods.json", {
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

    updateSearch = search => {
        this.setState({ search });
    };

          
    render(){
        if(this.state.isLoading){
            const { search } = this.state;
            let filtered = this.state.productList.filter(
                (item) => {
                    return item.product_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                }
            )
            console.log(filtered)
            return (
                <View>
                    <View >
                        <Button
                            buttonStyle= {{
                                backgroundColor: "#c0392b",
                                borderRadius: 0,
                                height: 50
                            }}
                            titleStyle={{
                                color: "#fff",
                                fontWeight: "700"
                            }}
                            type="solid"
                            title="Scan"
                            onPress={() => {
                                this.props.navigation.navigate('Scan');
                            }}
                            icon={
                                <Icon
                                    containerStyle={{marginRight: 15}}
                                    name="barcode"
                                    type='font-awesome'
                                    color='#fff'
                                />
                            }
                        />
                    </View>
                    <View>
                    <SearchBar
                        containerStyle={{
                            backgroundColor: "#c0392b"
                        }}
                        placeholder="Type Here..."
                        onChangeText={this.updateSearch}
                        value={search}
                        ref={search => this.search = search}
                    />
                    </View>
                    <View>
                    {filtered.length == 0 ? 
                        <Text style={[styles.listName, styles.margin, {color: "#e74c3c"}]}>Il n'y a pas de légumes avec cette recherche...</Text>
                        :  <FlatList
                            data={filtered}
                            renderItem={
                                ({item, index}) => <Item
                                                    products={item}
                                                    index={index}
                                                    title={item.product_name} 
                                                    uri={item.image_small_url}
                                                    id={item.id}
                                                />
                                }
                            keyExtractor={({id}, i) => id }
                            />
                        }
                    </View>
                </View>
            )
        } else {
            return (
                <View style={{backgroundColor: "#000", height: "100%"}}>
                    <Text 
                        style={styles.loading}
                    >Loading...</Text>
                </View>
            )
        }
    }
}

class Item extends Component {
    constructor (props) {
        super(props)
    }


    render () {
        return (
            <View style={[styles.list, (this.props.index%2 == 0) ? styles.jambotron : ""]}>
                <Image
                    style={styles.margin}
                    style={styles.img}
                    source={{uri: this.props.uri}}
                />
                <Text style={[styles.listName, styles.margin, (this.props.index%2 == 0) ? {color: "#FFF"} : {color: "#e74c3c"}]}>{this.props.title}</Text>
                <Btn
                    buttonStyle={(this.props.index%2 == 0) ? {borderColor: "#FFF"} : {borderColor: "#e74c3c"}, {borderRadius: 0}}
                    titleStyle={(this.props.index%2 == 0) ? {color: "#FFF"} : {color: "#e74c3c"}}
                    iconColor={(this.props.index%2 == 0) ? "#FFF" : "#e74c3c"}
                    style={styles.margin}
                    itemId={this.props.id}
                    index={this.props.index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    margin: {
        margin: 15
    },
    list: {
        display: "flex",
    },
    listName: {
        textAlign: "center",
        fontWeight: "700",
        fontSize: 30
    },
    img: {
        width: "100%", 
        height: 250
    },
    listText: {
        textAlign: "center",
        fontSize: 15
    },
    jambotron: {
        backgroundColor: "#e74c3c"
    },
    loading: {
        color: "#fff",
        marginTop: "50%",
        marginLeft: "35%",
        fontSize: 50,
        fontWeight: "700"
    }

})