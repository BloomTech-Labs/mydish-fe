import React, { useState, useEffect, useRef } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/auth/authActions";
import styles from "../styles/signUpStyles.js";
import logo from "../assets/LogoGreen.png";
import RecipeShareLogo from "./RecipeShareLogo.js";

const SignUp = ({ navigation }) => {
    const [signUp, setSignUp] = useState({ username: "", password: "" });
    const errorMsg = useSelector(state => state.auth.error);
    const userId = useSelector(state => state.auth.userId);
    const dispatch = useDispatch();
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);

    const register = () => dispatch(registerUser(signUp));

    useEffect(() => {
        if (userId) navigation.navigate("App");
    }, [userId]);

    return (
        <SafeAreaView>
            <KeyboardAwareScrollView>
                <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>Create Account</Text>
                        <Text
                            style={
                                (styles.explanationText,
                                { marginLeft: 16, marginVertical: 20 })
                            }
                        >
                            Create a new account to save and edit your favorite
                            recipes.
                        </Text>
                        <Text style={styles.emailText}>Username</Text>
                        <TextInput
                            ref={usernameInput}
                            style={styles.inputFeilds}
                            value={signUp.username}
                            returnKeyType="next"
                            onSubmitEditing={() =>
                                passwordInput.current.focus()
                            }
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
                            ref={passwordInput}
                            style={styles.inputFeilds}
                            value={signUp.password}
                            returnKeyType="done"
                            onChangeText={event =>
                                setSignUp({ ...signUp, password: event })
                            }
                            secureTextEntry={true}
                        />

                        <TouchableOpacity
                            onPress={() => {
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
                                <Text style={styles.createAccountText}>
                                    Create Account
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};
SignUp.navigationOptions = {
    headerTitle: <RecipeShareLogo />,
};

export default SignUp;
