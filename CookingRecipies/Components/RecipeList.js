import React from 'react';
import styles from '../styles/styles';
import Recipe from './Recipe';
import {AppRegistry, View} from 'react-native';
// import {name as appName} from '../app.json';
import App from '../App';

const RecipeList = () => {

    return (
        <>
        <View/>
            <Recipe/>
         <View/>
         </>
    )  
}

// AppRegistry.registerComponent(appName, () => App );

export default RecipeList;

