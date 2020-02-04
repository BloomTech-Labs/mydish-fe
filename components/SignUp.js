import React, { useState, useRef } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearError } from "../store/auth/authActions";
import styles from "../styles/signUpStyles.js";
import RecipeShareLogo from "./RecipeShareLogo.js";

const SignUp = ({ navigation }) => {
    const [signUp, setSignUp] = useState({ username: "", password: "" });
    const isLoading = useSelector(state => state.auth.isAuthorizing);
    const errorMsg = useSelector(state => state.auth.error);
    const dispatch = useDispatch();
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);

    const register = async () => {
        const success = await dispatch(registerUser(signUp));

        if (success) {
            navigation.navigate("App");
        }
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.explanationText}>
                    Create a new account to save and edit your favorite recipes.
                </Text>
                <Text style={styles.emailText}>Username</Text>
                <TextInput
                    ref={usernameInput}
                    style={styles.inputFields}
                    value={signUp.username}
                    returnKeyType="next"
                    onSubmitEditing={() => passwordInput.current.focus()}
                    onChangeText={event =>
                        setSignUp({ ...signUp, username: event })
                    }
                />

                <Text style={styles.passwordText}>Password</Text>
                <TextInput
                    ref={passwordInput}
                    style={styles.inputFields}
                    value={signUp.password}
                    returnKeyType="done"
                    onChangeText={event =>
                        setSignUp({ ...signUp, password: event })
                    }
                    secureTextEntry={true}
                />
                {errorMsg != null && (
                    <Text style={{ textAlign: "center", color: "red" }}>
                        {errorMsg}
                    </Text>
                )}

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
                                Create Account
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
