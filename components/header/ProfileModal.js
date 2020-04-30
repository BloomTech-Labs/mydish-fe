import React, { useState } from "react";
import {
    View,
    Text,
    Modal,
    Alert,
    TouchableOpacity,
    Image,
} from "react-native";
import Settings from "../header/Settings";
import EditProfile from "../EditProfile";

//ICONS

import { Ionicons } from "@expo/vector-icons";

//STYLES
import styles from "../../styles/profileModalStyles";

const ProfileModal = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const { logout } = props;
    const { visible } = props;
    const { closeModal } = props;

    function changeHandler(event) {}

    const flip = () => {
        isEditing ? setIsEditing(false) : setIsEditing(true);
    };

    return (
        <Modal
            visible={props.visible}
            animationType="fade"
            onRequestClose={() => {
                Alert.alert(
                    "Close Window",
                    "Are you sure you want to go back?",
                    [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel",
                        },
                        {
                            text: "OK",
                            onPress: () => props.closeModal(),
                        },
                    ],
                    { cancelable: false },
                );
            }}
        >
            <View style={styles.container}>
                <Ionicons style={styles.setting} name="md-settings" size={40} />

                <TouchableOpacity
                    onPress={() => {
                        setIsEditing(true);
                    }}
                >
                    <Text>Edit Profile</Text>
                </TouchableOpacity>

                {isEditing ? (
                    <EditProfile close={flip} />
                ) : (
                    <Settings
                        logout={logout}
                        visible={visible}
                        closeModal={closeModal}
                    />
                )}
            </View>
        </Modal>
    );
};

export default ProfileModal;
