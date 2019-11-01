import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from '../styles/createRecipeStyles';

const CourseType = ({course,recipe,setRecipe, switchColor, tagsIncluded, color}) => {

    return (
            <TouchableOpacity style={color.active.includes(course) ? styles.tagButtonPressed : styles.tagButtons} onPress = {() => {switchColor(course); tagsIncluded(course)}}>
                <Text>{course}</Text>
            </TouchableOpacity>
    )
}

export default CourseType;