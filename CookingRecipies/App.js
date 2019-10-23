
import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomePage from './Component/homePage.js'
import Login from './Component/Login.js'
import SignUp from './Component/signUp'


const TabNavigator = createBottomTabNavigator({
  Home: {screen: HomePage},
  Login: {screen: Login},
  SignUp: {screen: SignUp},
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

const AppContainer = createAppContainer(TabNavigator);

export default App = () => {
  return (
    <AppContainer/>
  )
}