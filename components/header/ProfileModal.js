import React from "react";
import {
    View,
    Text,
    Modal,
    Alert,
    TouchableOpacity,
    Image,
} from "react-native";

//ICONS
import LogoutProfileIcon from "../../assets/profile-icon-red.png";
import { Ionicons } from "@expo/vector-icons";

//STYLES
import styles from "../../styles/profileModalStyles";
import icon from "../../styles/navigationHeaderStyles";

const ProfileModal = (props) => {
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
                    style={styles.logout}
                    onPress={() => props.logout()}
                >
                    <Image
                        style={icon.profileIcon}
                        source={LogoutProfileIcon}
                    />
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.close}
                    onPress={() => props.closeModal()}
                >
                    <Ionicons name="md-arrow-back" size={24} />
                    <Text style={styles.text}>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default ProfileModal;
