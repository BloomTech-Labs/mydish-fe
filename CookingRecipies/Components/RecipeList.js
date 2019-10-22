import React from 'react';
import Recipe from './Recipe';
import {ScrollView, View} from 'react-native';
import samplerecipes from './samplerecipes.json';

console.log('sample recipes : ', samplerecipes[0]);

const RecipeList = () => {

    const [recipes, setRecipes] = React.useState(samplerecipes)
   
    return (
        <ScrollView>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                 {recipes.map( recp => <Recipe recipe={recp} />)}
            </View>
         </ScrollView>
    )  
}

export default RecipeList;

