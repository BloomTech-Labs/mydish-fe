import React from 'react'

import { View, Text, Button } from 'react-native';


const RecipeList = props => (
    <View>
        <Text style ={{fontSize: 20}}> Recipe List: </Text>
        <View>
            {props.recipes.length > 0 ? (
                props.recipes.map(recipe => (
                    <View>
                        <Text h4>{recipe.title}</Text>
                        {/* <Text>{recipe.minutes}</Text> */}
                        <Text>{recipe.notes}</Text>
                        <Text>{recipe.categories}</Text>
                        {/* <Text>{recipe.ingredients}</Text> */}
                        <Text>{recipe.likes}</Text>
                        {/* <Text>{recipe.steps}</Text> */}
                        <Text>{recipe.ancestor}</Text>
                        <Button title="Save" />
                    </View>))
            ) : (<View>
                <Text h2>No Recipes</Text>
            </View>)}

        </View>

    </View>
)

export default RecipeList
