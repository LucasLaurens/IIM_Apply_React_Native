import React from 'react';
import { View, Text } from 'react-native';

export default class Scan extends React.Component {

  static navigationOptions = {
      title: 'Single',
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
