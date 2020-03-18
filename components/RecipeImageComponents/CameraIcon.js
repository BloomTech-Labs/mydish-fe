import React from "react";
import {TouchableOpacity, View, Image} from "react-native";
import camera from "../../assets/camera.png";
import styles from "../../styles/recipeImageStyles";

function CameraIcon({setImageModalVisible}) {
  return (
    <TouchableOpacity onPress={() => setImageModalVisible(true)}>
      <View style={styles.newImage}>
        <Image style={styles.icon} source={camera} />
      </View>
    </TouchableOpacity>
  );
}

export default CameraIcon;
