import React from "react";
import { View, TouchableOpacity, Alert, Image } from "react-native";
import Modal from "react-native-modal";
import { Icon } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import styles from "../../styles/recipeImageStyles";
import { useDispatch } from "react-redux";
import { editImage } from "../../store/singleRecipe/singleRecipeActions";
import camera from "../../assets/camera.png";
import gallery from "../../assets/image-plus.png";

function ImageUploadModal({ visible, setVisible, image, setImage, scope }) {
    const iconColor = "#8FCC70";
    const dispatch = useDispatch();
    const take = "take";
    const choose = "choose"; // Pass take or choose as argument to getImage()

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

        if (method === take) {
            img = await ImagePicker.launchCameraAsync(imgConfig);
        } else if (method === choose) {
            img = await ImagePicker.launchImageLibraryAsync(imgConfig);
        }

        if (img && !img.cancelled) {
            if (scope && scope === "global") {
                dispatch(editImage(img.uri));
            } else {
                setImage(img.uri);
            }
        }
        setVisible(false);
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
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => getImage(take)}>
                        <Image style={styles.iconLargeCamera} source={camera} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => getImage(choose)}>
                        <Image style={styles.iconLarge} source={gallery} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

export default ImageUploadModal;
