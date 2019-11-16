import React from 'react'; 
import {View, Text, TextInput} from 'react-native';
import styles from '../styles/createRecipeStyles';


const Notes = ({recipe, setRecipe}) => {
    return (
        <View>
                <Text style={styles.add}>Notes: </Text>
                <TextInput
                style={styles.notesContainer}
                placeholder=''
                multiline={true}
                onChangeText={event => setRecipe({ ...recipe, notes: event })}
                value={recipe.notes} 
                />
         </View>
    )
}

export default Notes;
