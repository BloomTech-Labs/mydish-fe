import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAwareScrollView,
    Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/auth/authActions";
import axios from "axios";
import styles from "../styles/signUpStyles.js";
import logo from "../assets/LogoGreen.png";

const SignUp = ({ navigation }) => {
    const [signUp, setSignUp] = useState({ username: "", password: "" });
    const errorMsg = useSelector(state => state.auth.error);
    const dispatch = useDispatch();

    const onPress = async () => {
        const success = await dispatch(registerUser(signUp));

        if (success) {
            navigation.navigate("App");
        }
    };

    return (
        // <KeyboardAwareScrollView>
        <View style={styles.signUp}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text style={styles.exitButton}>x</Text>
            </TouchableOpacity>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    textAlign: "center",
                    paddingBottom: 15,
                }}
            >
                <Image source={logo} style={{ width: "10%", height: "105%" }} />
                <Text style={styles.title}>RecipeShare</Text>
            </View>

            <Text style={styles.createAccountTitle}>Create Account</Text>
            <Text style={styles.emailText}>Username</Text>
            <TextInput
                style={styles.inputFeilds}
                value={signUp.username}
                onChangeText={event =>
                    setSignUp({ ...signUp, username: event })
                }
            />
            {errorMsg != null && (
                <Text style={{ marginLeft: 150, color: "red" }}>
                    Username already exists
                </Text>
            )}
            <Text style={styles.passwordText}>Password</Text>
            <TextInput
                style={styles.inputFeilds}
                value={signUp.password}
                onChangeText={event =>
                    setSignUp({ ...signUp, password: event })
                }
                secureTextEntry={true}
            />

            <View style={{ flexDirection: "row-reverse" }}>
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.createAccountButton}
                >
                    <Text style={styles.createAccountText}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </View>
        // </KeyboardAwareScrollView>
    );
};

export default SignUp;
