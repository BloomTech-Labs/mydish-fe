import React from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import Modal from "react-native-modal";
import { Icon } from "react-native-elements";
import styles from "../../styles/recipeImageStyles";

function ImageUploadModal({ visible, setVisible }) {
    const iconColor = "#8FCC70";
    return (
        <Modal
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
            animationInTiming={200}
            animationOutTiming={200}
            hideModalContentWhileAnimating={true}
            isVisible={visible}
            onBackdropPress={() => setVisible(false)}
            // onRequestClose={() => {
            //     Alert.alert("Modal has been closed");
            // }}
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
            </View>
        </Modal>
    );
}

export default ImageUploadModal;
