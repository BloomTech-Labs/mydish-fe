import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../styles/createRecipeStyles';

export default function Cuisine({cuisine,recipe,setRecipe, color, switchColor, tagsIncluded}) {

    return (
        <TouchableOpacity style={color.active.includes(cuisine) ? styles.tagButtonPressed : styles.tagButtons} onPress = {() => {switchColor(cuisine); tagsIncluded(cuisine)}}>
            <Text>{cuisine}</Text>
        </TouchableOpacity>
    )
}