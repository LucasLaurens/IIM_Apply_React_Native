import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default class Home extends Component {

    render(){
        return (
            <View>
                <Text>{this.props.name}</Text>
            </View>
        )
    }
}