import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../styles/createRecipeStyles';

export default function tagButtons({tag, color, switchColor, tagsIncluded}) {

    return (
        <TouchableOpacity style={color.active.includes(tag) ? styles.tagButtonPressed : styles.tagButtons} onPress = {() => {switchColor(tag); tagsIncluded(tag)}}>
            <Text style={color.active.includes(tag) ? {color: 'white'} : {color: '#215506'}} onPress = {() => {switchColor(tag); tagsIncluded(tag)}}>{tag}</Text>
        </TouchableOpacity>
    )
}