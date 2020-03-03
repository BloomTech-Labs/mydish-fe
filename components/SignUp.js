import React, { useState, useRef, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ActivityIndicator,
    Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearError } from "../store/auth/authActions";
import styles from "../styles/signUpStyles.js";
import RecipeShareLogo from "./RecipeShareLogo.js";
import { maxUsername } from "../constants/maxLenth";

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
            <View style={styles.container}>
                <Text style={styles.title}>Welcome!</Text>
                <Text style={styles.explanationText}>
                    Sign up to start editing your favorite recipes.
                </Text>
                <Text style={styles.emailText}>Username</Text>
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

                <Text style={styles.passwordText}>Password</Text>
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

                <TouchableOpacity
                    onPress={() => {
                        dispatch(clearError());
                        navigation.navigate("Login");
                    }}
                >
                    <Text style={styles.loginButton}>
                        Have an account? Login
                    </Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row-reverse" }}>
                    <TouchableOpacity
                        onPress={register}
                        style={styles.createAccountButton}
                    >
                        {isLoading ? (
                            <ActivityIndicator size="large" color="#00ff00" />
                        ) : (
                            <Text style={styles.createAccountText}>
                                Sign Up
                            </Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
SignUp.navigationOptions = {
    headerTitle: <RecipeShareLogo />,
};

export default SignUp;
