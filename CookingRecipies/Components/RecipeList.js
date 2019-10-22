import React from 'react';
import Recipe from './Recipe';
import {View} from 'react-native';
import samplerecipes from './samplerecipes.json';

console.log('sample recipes : ', samplerecipes[0]);

const RecipeList = () => {

    const [recipes, setRecipes] = React.useState(samplerecipes)
   
    return (
        <View>
            {recipes.map( recp => <Recipe recipe={recp} />)}
         </View>
    )  
}

export default RecipeList;

