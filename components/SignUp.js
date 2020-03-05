import React, { useState, useRef, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ActivityIndicator,
    Alert,
    Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearError } from "../store/auth/authActions";
import styles from "../styles/authPageStyles";
import backgroundImg from "../assets/auth-page-background.jpg";
import RecipeShareLogo from "./RecipeShareLogo.js";
import { maxUsername } from "../constants/maxLenth";
import theme from "../styles/theme.style";

const SignUp = ({ navigation }) => {
    const [signUp, setSignUp] = useState({ username: "", password: "" });
    const isLoading = useSelector(state => state.auth.isAuthorizing);
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
        const success = await dispatch(registerUser(signUp));

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
            <Image source={backgroundImg} style={styles.backgroundImg} />
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={styles.inputLabelText}>Username</Text>
                    <TextInput
                        ref={usernameInput}
                        style={styles.inputFields}
                        maxLength={maxUsername}
                        value={signUp.username}
                        returnKeyType="next"
                        onSubmitEditing={() => passwordInput.current.focus()}
                        onChangeText={event =>
                            setSignUp({ ...signUp, username: event })
                        }
                    />
                    <Text
                        style={styles.maxLengthIndicator}
                    >{`${signUp.username.length}/${maxUsername}`}</Text>

                    <Text style={styles.inputLabelText}>Password</Text>
                    <TextInput
                        ref={passwordInput}
                        style={styles.inputFields}
                        value={signUp.password}
                        returnKeyType="go"
                        onChangeText={event =>
                            setSignUp({ ...signUp, password: event })
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
                            <Text style={styles.switchAuthPageLink}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row-reverse" }}>
                        <TouchableOpacity
                            onPress={register}
                            style={styles.submitButton}
                        >
                            {isLoading ? (
                                <ActivityIndicator
                                    size="large"
                                    color="#00ff00"
                                />
                            ) : (
                                <Text style={styles.submitButtonText}>
                                    Sign Up
                                </Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};
SignUp.navigationOptions = {
    headerTitle: <RecipeShareLogo />,
    headerStyle: {
        backgroundColor: theme.NAV_BAR_BACKGROUND_COLOR,
    },
};

export default SignUp;
