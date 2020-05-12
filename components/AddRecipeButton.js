import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/recipe-styles';

export default AddRecipeButton = ({ navigation }) => {
  const pressHandler = () => navigation.navigate('RecipePicker');

  return (
    <TouchableOpacity onPress={pressHandler} style={styles.addRecipeButton}>
      <Text style={styles.addRecipeButtonText}>Add recipe</Text>
    </TouchableOpacity>
  );
};
