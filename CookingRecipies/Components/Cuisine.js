import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../styles/createRecipeStyles';

export default function Cuisine({cuisine,recipe,setRecipe}) {

    return (
        <TouchableOpacity style={styles.tagButtons} onPress={() => setRecipe({...recipe, categories: [...recipe.categories, "American"]})}>
            <Text>{cuisine}</Text>
        </TouchableOpacity>
    )
}