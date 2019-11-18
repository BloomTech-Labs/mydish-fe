import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../styles/createRecipeStyles';

export default function TagButton(props) {
    const {tag, color, setColor, toggleColor, tagsIncluded, recipe, setRecipe} = props;

    return (
        <TouchableOpacity style={color.active.includes(tag) ? styles.tagButtonPressed : styles.tagButtons} 
            onPress = {() => {toggleColor(tag,color,setColor); tagsIncluded(tag,recipe,setRecipe)}}>

            <Text style={color.active.includes(tag) ? {color: 'white'} : {color: '#215506'}} 
            onPress = {() => {toggleColor(tag,color,setColor); tagsIncluded(tag,recipe,setRecipe)}}>
                {tag}
            </Text>

        </TouchableOpacity>
    )
}