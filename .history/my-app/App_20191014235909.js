import React from 'react';
import Home from './app/Home';
import Search from './app/Search';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Home: Home,
  Search: Search
},
  {
    initialRouteName: 'Home',
  });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
