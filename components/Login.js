import React, { useState, useRef, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
    KeyboardAvoidingView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { loginUser } from "../store/auth/authActions";
import styles from "../styles/loginStyles.js";
import logo from "../assets/LogoGreen.png";
import RecipeShareLogo from "./RecipeShareLogo.js";

const Login = ({ navigation }) => {
    const [login, setLogin] = useState({ username: "", password: "" });
    const errorMsg = useSelector(state => state.auth.error);
    const dispatch = useDispatch();
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);

    // This has an underscore to differentiate it from the loginUser action
    const _loginUser = async () => {
        const success = await dispatch(loginUser(login));

        if (success) {
            navigation.navigate("App");
        }
    };

    return (
        <SafeAreaView>
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Log In</Text>

                    <Text style={styles.explanationText}>
                        Sign into save and edit your favorite recipes.
                    </Text>
                    <Text style={styles.emailText}>Username</Text>
                    <TextInput
                        ref={usernameInput}
                        style={styles.inputFields}
                        name="username"
                        testID="username"
                        value={login.username}
                        returnKeyType="next"
                        onSubmitEditing={() => passwordInput.current.focus()}
                        onChangeText={event =>
                            setLogin({ ...login, username: event })
                        }
                    />
                    <Text style={styles.passwordText}>Password</Text>
                    <TextInput
                        ref={passwordInput}
                        style={styles.inputFields}
                        name="password"
                        testID="password"
                        value={login.password}
                        returnKeyType="done"
                        onChangeText={event =>
                            setLogin({ ...login, password: event })
                        }
                        secureTextEntry={true}
                    />
                    {errorMsg != null && (
                        <Text style={{ color: "red", marginLeft: 100 }}>
                            {errorMsg}
                        </Text>
                    )}

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Signup");
                        }}
                    >
                        <Text style={styles.createAccountButton}>
                            Create an Account
                        </Text>
                    </TouchableOpacity>

                    <View
                        style={{
                            flexDirection: "row-reverse",
                            marginRight: 16,
                        }}
                    >
                        <TouchableOpacity
                            onPress={_loginUser}
                            style={styles.loginButton}
                        >
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};
Login.navigationOptions = {
    headerTitle: <RecipeShareLogo />,
};

export default Login;
