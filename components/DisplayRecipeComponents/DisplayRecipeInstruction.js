import React, { useState, useRef, useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/individualRecipeStyles';

const DisplayRecipeInstruction = ({ instruction }) => {
  return (
    <View style={styles.recipeFieldsList}>
      <Text style={styles.recipeFieldsText}>
        {instruction.step_number}. {instruction.description}
      </Text>
    </View>
  );
};

export default DisplayRecipeInstruction;
