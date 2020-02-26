import React from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import Modal from "react-native-modal";
import { Icon } from "react-native-elements";
import styles from "../../styles/recipeImageStyles";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

function ImageUploadModal({ visible, setVisible, setImage }) {
    const iconColor = "#8FCC70";

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(
            Permissions.CAMERA,
            Permissions.CAMERA_ROLL,
        );
        if (result.status !== "granted") {
            Alert.alert(
                "Insufficient Permissions",
                "You must grant permissions to upload a photo.",
                [{ text: "Okay" }],
            );
            return false;
        } else {
            return true;
        }
    };
    // Function takes argument of "take" (to take a new photo) or "choose" (to choose existing photo from camer roll)
    const getImage = async method => {
        const hasPermission = await verifyPermissions();
        if (!hasPermission) return;

        const imgConfig = {
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        };
        let img = "";

        if (method === "take") {
            img = await ImagePicker.launchCameraAsync(imgConfig);
        } else if (method === "choose") {
            img = await ImagePicker.launchImageLibraryAsync(imgConfig);
        }
        setVisible(false);
        if (img) setImage(img.uri);
    };

    return (
        <Modal
            animationIn="slideInDown"
            animationOut="slideOutUp"
            animationInTiming={400}
            animationOutTiming={400}
            hideModalContentWhileAnimating={true}
            isVisible={visible}
            backdropOpacity={0.4}
            onBackdropPress={() => setVisible(false)}
        >
            <View style={styles.uploadModal}>
                <TouchableOpacity onPress={() => getImage("take")}>
                    <Icon
                        color={iconColor}
                        size={80}
                        name="camera"
                        type="font-awesome"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => getImage("choose")}>
                    <Icon color={iconColor} size={80} name="camera-roll" />
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

export default ImageUploadModal;
