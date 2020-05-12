import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import editIcon from '../assets/edit_icon.png';
import styles from '../styles/individualRecipeStyles';

function EditButton({ navigate }) {
  return (
    <TouchableOpacity onPress={navigate}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.editButtonView}>
          <Image source={editIcon} style={styles.editButton} />
        </View>

        <Text style={{ marginLeft: 10 }}>Make changes to recipe</Text>
      </View>
    </TouchableOpacity>
  );
}

export default EditButton;
