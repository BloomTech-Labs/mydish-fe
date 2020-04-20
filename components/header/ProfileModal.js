import React from "react";
import { View, Text, Modal, Button, Alert } from "react-native";

const ProfileModal = (props) => {
    return (
        <Modal
            visible={props.visible}
            animationType="slide"
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
            <View>
                <Text>What would you like to do?</Text>
                <Button title="Logout" onPress={() => props.logout()} />
                <Button
                    title="Close"
                    onPress={() => props.closeModal()}
                ></Button>
            </View>
        </Modal>
    );
};

export default ProfileModal;
