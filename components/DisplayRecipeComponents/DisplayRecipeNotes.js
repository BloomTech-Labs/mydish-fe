import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/individualRecipeStyles';

export default function DisplayRecipeNotes({ notes, index }) {
  return (
    <>
      <View style={styles.recipeFieldsList}>
        <Text style={styles.recipeFieldsText}>
          {index + 1}. {notes.description}
        </Text>
      </View>
    </>
  );
}
