import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from '../styles/createRecipeStyles';

const CourseType = ({course,recipe,setRecipe}) => {

    return (
            <TouchableOpacity style={styles.tagButtons} onPress = {() => setRecipe({...recipe, categories: [...recipe.categories, "Breakfast"]})}>
                <Text>{course}</Text>
            </TouchableOpacity>
    )
}

export default CourseType;