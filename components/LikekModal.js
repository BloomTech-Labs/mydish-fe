import React from "react";
import { View, Text, Button, Modal } from "react-native";

const LikeModal = props => {
    const { categories, modal, setModal, text, route, navigate } = props;
    // console.log('route: ',route)
    // console.log('modal: ', modal);

    const handlePress = () => {
        console.log("button press in LikeModal");
        setModal(!modal);
    };

    return (
        <Modal animationType="fade" transparent={true} visible={modal}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 50,
                }}
            >
                <View
                    style={{
                        alignItems: "center",
                        borderWidth: 5,
                        borderRadius: 10,
                        backgroundColor: "white",
                        padding: 40,
                        borderColor: "#8FCC70",
                    }}
                >
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

export default LikeModal;
