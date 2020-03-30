import React, { useState, useRef, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    Alert,
    KeyboardAvoidingView,
    ScrollView,
    ImageBackground,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearError, registerUser } from "../store/auth/authActions";
import styles from "../styles/authPageStyles";
import backgroundImg from "../assets/auth-page-background.jpg";
import { maxUsername } from "../constants/maxLength";
import AuthButton from "./AuthButton";
import { logoHeaderPlain } from "./header/navigationHeader";

const SignUp = ({ navigation }) => {
    const [credentials, setSignUp] = useState({ username: "", password: "" });
    const errorMsg = useSelector(state => state.auth.error);
    const dispatch = useDispatch();
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);

    useEffect(() => {
        if (errorMsg != null) {
            emptyFieldsAlert();
        }
    }, [errorMsg]);

    const register = async () => {
        const success = await dispatch(registerUser(credentials));

        if (success) {
            navigation.navigate("App");
        }
    };

    const emptyFieldsAlert = () => {
        return Alert.alert("Oops!", "Please provide a username and password.", [
            { title: "Okay" },
        ]);
    };

    return (
        <SafeAreaView>
            <ImageBackground
                source={backgroundImg}
                style={styles.backgroundImg}
            >
                <KeyboardAvoidingView behavior="height">
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.contentContainer}>
                                <Text style={styles.inputLabelText}>
                                    Username
                                </Text>
                                <TextInput
                                    ref={usernameInput}
                                    style={styles.inputFields}
                                    maxLength={maxUsername}
                                    value={credentials.username}
                                    returnKeyType="next"
                                    onSubmitEditing={() =>
                                        passwordInput.current.focus()
                                    }
                                    onChangeText={event =>
                                        setSignUp({
                                            ...credentials,
                                            username: event,
                                        })
                                    }
                                />
                                <Text
                                    style={styles.maxLengthIndicator}
                                >{`${credentials.username.length}/${maxUsername}`}</Text>

                                <Text style={styles.inputLabelText}>
                                    Password
                                </Text>
                                <TextInput
                                    ref={passwordInput}
                                    style={styles.inputFields}
                                    value={credentials.password}
                                    returnKeyType="go"
                                    onChangeText={event =>
                                        setSignUp({
                                            ...credentials,
                                            password: event,
                                        })
                                    }
                                    secureTextEntry={true}
                                    onSubmitEditing={register}
                                />

                                <View style={styles.promptContainer}>
                                    <Text style={styles.questionPrompt}>
                                        Have an account?{" "}
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            dispatch(clearError());
                                            navigation.navigate("Login");
                                        }}
                                    >
                                        <Text style={styles.switchAuthPageLink}>
                                            Login
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flexDirection: "row-reverse" }}>
                                    <AuthButton
                                        parent="signup"
                                        credentials={credentials}
                                        register={register}
                                    />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        </SafeAreaView>
    );
};
SignUp.navigationOptions = logoHeaderPlain;

export default SignUp;
