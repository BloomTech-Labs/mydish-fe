import React from 'react';
import styles from '../styles/styles';
import Recipe from './Recipe';
import {AppRegistry, View, Text} from 'react-native';
// import {name as appName} from '../app.json';
import App from '../App';
import samplerecipes from './samplerecipes.json';

console.log('sample recipes : ', samplerecipes[0]);

const RecipeList = () => {

    const [recipes, setRecipes] = React.useState(samplerecipes)
   
    return (
        <>
        <View/>
          {recipes.map( recp => <Recipe recipe={recp} />)}
         <View/>
         </>
    )  
}

export default RecipeList;

