import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import camera_plus from '../../assets/camera_plus_black.png';
import styles from '../../styles/recipeImageStyles';

function CameraIcon({ setImageModalVisible }) {
  return (
    <TouchableOpacity onPress={() => setImageModalVisible(true)}>
      <View style={styles.newImage}>
        <Image style={styles.icon} source={camera_plus} />
      </View>
    </TouchableOpacity>
  );
}

export default CameraIcon;
