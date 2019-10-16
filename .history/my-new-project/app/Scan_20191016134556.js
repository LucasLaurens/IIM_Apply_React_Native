import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default class Scan extends React.Component {

  static navigationOptions = {
      title: 'Single',
      type: Camera.Constants.Type.back
  };

  constructor (props) {
    super(props)

    this.state = {
        ScanRoute: this.props.navigation.getParam('Scan', 0)
    }
}


  render() {
    return (
      <View><Text>Scan</Text></View>
    )
  }
}
