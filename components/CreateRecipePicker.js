import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { logoHeaderPlain } from './header/navigationHeader';
import theme from '../styles/theme.style.js';

const CreateRecipePicker = (props) => {
  return (
    <View style={styles.tempContainer}>
      <TouchableOpacity
        style={styles.tempContent}
        onPress={() => {
          props.navigation.push('Create');
        }}
      >
        <SimpleLineIcons
          style={styles.icon}
          name="pencil"
          size={36}
          color="darkred"
        />
        <Text style={styles.tempText}>Manually Enter a Recipe</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tempContent}
        onPress={() => {
          props.navigation.push('GenerateRecipe');
        }}
      >
        <SimpleLineIcons
          style={styles.icon}
          name="camera"
          size={36}
          color="darkred"
        />
        <Text style={styles.tempText}>Generate a Recipe</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  tempContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  tempContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  tempText: {
    fontFamily: theme.REGULAR_FONT.fontFamily,
    fontSize: 26,
    fontWeight: theme.BUTTON_FONT_WEIGHT,
  },
  icon: {
    marginBottom: 12,
  },
});

CreateRecipePicker.navigationOptions = logoHeaderPlain;

export default CreateRecipePicker;
