import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/individualRecipeStyles';


export default function IndividualRecipeNotes({color, notes}) {

        return ( 
            <>
                <View style={{paddingRight:'80%'}}>
                    <Text style={color.active.includes('Ingredients') ? styles.hidden : styles.notes}>NOTES</Text>
                </View>
                <Text style={ color.active.includes('Ingredients') ? styles.hidden :styles.stepTextView}>{notes}</Text>
            </>
        )
}