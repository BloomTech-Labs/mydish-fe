import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from '../styles/recipe-styles';
import * as theme from '../styles/theme.style';

const FancySpinner = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={theme.default.PRIMARY_COLOR} />
      </View>
    </View>
  );
};

export default FancySpinner;
