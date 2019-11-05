import React from 'react'
import {View, Text} from 'react-native'

import styles from '../styles/individualRecipeStyles.js'

const IndividualRecipeIngredient = ({ing, color}) => {

    return ( 
    <View style={color.active.includes('Instructions') ? styles.hidden : styles.ingredientList}>
        <View style={styles.ingredientView}>
        <Text style={styles.ingredientText}>{ing.quantity} {ing.unit}</Text>
        </View>
        <View style={styles.ingredientView}>
        <Text style={styles.ingredientText}>{ing.name}</Text>
        </View>
    </View>)
}

export default IndividualRecipeIngredient;