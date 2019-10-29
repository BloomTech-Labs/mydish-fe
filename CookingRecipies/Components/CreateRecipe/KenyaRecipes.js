import React, {useState} from 'react';

import CreateRecipeForm from './CreateRecipeForm';
import RecipeList from './RecipeList';

import { View, Text, ScrollView } from 'react-native';

export default function Recipe() {
    const recipeData = [
        {
            title: 'Vegan Meatloaf   ',
            minutes: {
              prepTime: '', 
              cookTime: '',
              totalTime: '',
            },
            notes: "(optional) free-form notes about the recipe",
            categories: [
              "(string) category/tag name"
            ],
            ingredients: {
              name: "",
              quantity: "(number)",
              unit: "string: example- mL or g or cups"
            },
            likes: "(number) total likes",
            steps: [
              {
                ordinal: 1,
                body: "a string- step 1 blah blah blah"
              },
              {
                ordinal: 2,
                body: "a string- step 2 blah blah blah"
              }
            ],
            ancestor: "(optional number) the ID of the previous version of this recipe"
          }  
    ]

    const [recipes, setRecipes] = useState(recipeData)

    const addRecipe = recipe => {
        recipe.id = recipes.length + 1
        setRecipes([...recipes, recipe])
    }

    return (
        <ScrollView>
        <View>
        <Text>Add Recipe</Text>
        <CreateRecipeForm addRecipe = {addRecipe}/>
        {/* <Text>View Recipes</Text> */}
        <RecipeList recipes = {recipes}/>
        </View>
        </ScrollView>
    )
}
