import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/individualRecipeStyles';

const DisplayRecipeIngredient = ({ ingredient }) => {
  return (
    <View style={styles.recipeFieldsList}>
      <Text style={styles.recipeFieldsText}>
        {ingredient.quantity} {ingredient.units} {ingredient.name}
      </Text>
    </View>
  );
};

export default DisplayRecipeIngredient;
