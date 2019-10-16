import React from 'react';
import Products from './app/Products';
import Scan from './app/Scan';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Single from './app/Single';

const AppNavigator = createStackNavigator({
    Products: Products,
    Scan: Scan,
    Single: Single
  },
  {
    initialRouteName: 'Products',
  });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
