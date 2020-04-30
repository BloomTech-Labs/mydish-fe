import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from "react-native";
// import styles from "../styles/authPageStyles";

const EditProfile = (props) => {
    const [credentials, setSignUp] = useState({
        password: "",
        email: "",
        display_name: "",
    });

    return (
        <View style={styles.container}>
            <Text>Edit Profile Screen</Text>

            <View>
                <Text>Update Password</Text>
                <TextInput />
            </View>

            <View>
                <Text>Update Email</Text>
                <TextInput />
            </View>

            <View>
                <Text>Update Display Name</Text>
                <TextInput />
            </View>

            <TouchableOpacity
                onPress={() => {
                    props.close();
                }}
            >
                <Text>Close</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },

    InputField: {
        marginVertical: 35,
    },
});

export default EditProfile;
