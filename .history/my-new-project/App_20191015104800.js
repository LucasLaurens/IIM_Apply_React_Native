import React from 'react';
import Products from './app/Products';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// const AppNavigator = createStackNavigator({
//     Home: Products,
//   },
//   {
//     initialRouteName: 'Home',
//   });

// const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <Products />
  }
}
