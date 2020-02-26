import React from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import Modal from "react-native-modal";
import { Icon } from "react-native-elements";
import styles from "../../styles/recipeImageStyles";

function ImageUploadModal({ visible, setVisible }) {
    const iconColor = "#8FCC70";
    return (
        <Modal
            animationIn="slideInDown"
            animationOut="slideOutUp"
            animationInTiming={400}
            animationOutTiming={400}
            hideModalContentWhileAnimating={true}
            isVisible={visible}
            onBackdropPress={() => setVisible(false)}
        >
            <View style={styles.uploadModal}>
                <TouchableOpacity onPress={() => setVisible(false)}>
                    <Icon
                        color={iconColor}
                        size={80}
                        name="camera"
                        type="font-awesome"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setVisible(false)}>
                    <Icon color={iconColor} size={80} name="camera-roll" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setVisible(false)}>
                    <Icon
                        color={iconColor}
                        size={80}
                        name="cloud-upload"
                        type="font-awesome"
                    />
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

export default ImageUploadModal;
