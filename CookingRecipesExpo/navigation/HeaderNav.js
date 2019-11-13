import React from 'react';
import {Image} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import homePage from '../components/homePage';
import logo from '../assets/LogoGreen.png';


const HeaderNav = createMaterialTopTabNavigator({
    Header : {screen : homePage,
            navigationOptions : {
                tabBarLabel : 'RecipeShare',
                tabBarIcon : ( <Image source={logo}/>)
            }},
    // Create : {screen : CreateNavigator,
    //         navigationOptions : {
    //             tabBarLabel : 'Create',
    //             tabBarIcon : (<Image style={styles.createTab} source={plus}/>)
    //         }},
    // Profile : {screen : Login, 
    //             navigationOptions : {
    //                 tabBarLabel : 'Sign Out',
    //                 tabBarIcon : (<Image style={styles.loginTab} source={logout}/>),
    //                 tabBarOnPress : async ({navigation}) => {
    //                     await AsyncStorage.clear();
    //                     navigation.navigate('Auth');
    //                 }
    //             }
    //         }
    }, {initialRouteName : 'Header'})
    
export default HeaderNav;
