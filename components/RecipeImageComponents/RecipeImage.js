import React, { useState } from "react";
import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-elements";
import styles from "../../styles/recipeImageStyles";

function RecipeImage({ image, setImageModalVisible }) {
    return (
        <View style={styles.imageContainer}>
            {image ? (
                <ImageBackground style={styles.image} source={{ uri: image }}>
                    <TouchableOpacity
                        onPress={() => setImageModalVisible(true)}
                        style={styles.changeImage}
                    >
                        <Text style={{ color: "#363838" }}>Change image</Text>
                    </TouchableOpacity>
                </ImageBackground>
            ) : (
                <TouchableOpacity onPress={() => setImageModalVisible(true)}>
                    <Icon
                        color="#8FCC70"
                        size={100}
                        name="photo"
                        type="font-awesome"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}

export default RecipeImage;
