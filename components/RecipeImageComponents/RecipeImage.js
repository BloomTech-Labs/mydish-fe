import React, { useState } from "react";
import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-elements";
import placeholder from "../../assets/recipe-image-placeholder.png";
import camera from "../../assets/camera.png";
import styles from "../../styles/recipeImageStyles";

function RecipeImage({ image, setImageModalVisible }) {
    return (
        <View style={styles.imageContainer}>
            <ImageBackground
                style={styles.image}
                source={image ? { uri: image } : placeholder}
            >
                <TouchableOpacity
                    onPress={() => setImageModalVisible(true)}
                    style={styles.newImage}
                >
                    <Text style={{ color: "#363838" }}>Change image</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

export default RecipeImage;
