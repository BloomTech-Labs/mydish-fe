import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

const CreateRecipePicker = (props) => {
  return (
    <View style={styles.tempContainer}>
      <TouchableOpacity
        style={styles.tempContent}
        onPress={() => {
          props.navigation.push('Create');
        }}
      >
        <SimpleLineIcons name="pencil" size={36} color="black" />
        <Text>Manually Enter a Recipe</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tempContent}
        onPress={() => {
          props.navigation.push('GenerateRecipe');
        }}
      >
        <SimpleLineIcons name="camera" size={36} color="black" />
        <Text>Generate a Recipe</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  tempContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  tempContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreateRecipePicker;
