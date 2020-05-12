import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CreateRecipePicker = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.tempContainer}
        onPress={() => {
          props.navigation.push('Create');
        }}
      >
        <Text>Manually Enter a Recipe</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.push('GenerateRecipe');
        }}
      >
        <Text>Generate a Recipe</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  tempContainer: {
    marginTop: 50,
  },
});

export default CreateRecipePicker;
