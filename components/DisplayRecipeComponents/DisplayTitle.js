import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/individualRecipeStyles';

const DisplayTitle = ({ title }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default DisplayTitle;
