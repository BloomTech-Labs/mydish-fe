import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import RecipeNavigator from './RecipeNavigator';
import LoginNavigator from './LoginNavigator';
import styles from '../styles/navigation.styles';
import search from '../assets/Union.png';
import logout from '../assets/account_circle.png';

const AuthNavigator = createBottomTabNavigator({
    Home : {
        screen : RecipeNavigator,
        navigationOptions : {
            tabBarLabel : 'Explore',
            tabBarIcon : (<Image style={styles.authHomeTab} source={search}/>)
        }
    },
    Login : {
        screen : LoginNavigator,
        navigationOptions : {
            tabBarLabel : 'Login',
            tabBarIcon : (<Image style={styles.createTab} source={logout}/>)
        }
    }
},{initialRouteName : 'Home'})

export default AuthNavigator;