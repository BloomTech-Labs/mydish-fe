import React, { useState } from "react";
import {
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Text,
} from "react-native";
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
                <TouchableOpacity onPress={() => setImageModalVisible(true)}>
                    <View style={styles.newImage}>
                        <Image style={styles.icon} source={camera} />
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

export default RecipeImage;
