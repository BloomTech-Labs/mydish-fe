import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/individualRecipeStyles';

export default function IndividualRecipeInstruction({step, color}) {
    return (
        <View style={color.active.includes('Ingredients') ? styles.hidden : styles.stepTextView}>
            <Text style={styles.stepText}>{step.ordinal}. {step.body}</Text>
        </View>
    )
}


