import React from "react";
import { View, Text, Button, Modal } from "react-native";
import styles from "../styles/recipe-styles";

const UnlikeModal = props => {
    const { categories, modal, setModal, text, route, navigate } = props;
    // console.log('route in UnlikeModal: ',route)
    // console.log('modal in UnlikeModal: ', modal);

    const handlePress = () => {
        console.log("button press in Unlike modal");

        setModal(!modal);

        if (route === "Folder") {
            navigate();
        }
    };

    return (
        <Modal animationType="fade" transparent={true} visible={modal}>
            <View style={styles.modalOuter}>
                <View style={styles.modalInner}>
                    <Text>{text}</Text>
                    {categories.map((cat, i) => (
                        <Text key={i}>{cat}</Text>
                    ))}
                    <Text>of Your Cookbook</Text>
                    <Button
                        title="Got it!"
                        color="#8FCC70"
                        borderColor="#8FCC70"
                        onPress={handlePress}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default UnlikeModal;
