import React from 'react';
import Products from './app/Products';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

// const AppNavigator = createBottomTabNavigator({
//     Products: Products,
//   },
//   {
//     initialRouteName: 'Products',
//   });

// const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <Products />
  }
}
