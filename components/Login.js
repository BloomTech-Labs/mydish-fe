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
import { loginUser, clearError } from "../store/auth/authActions";
import styles from "../styles/authPageStyles.js";
import RecipeShareLogo from "./RecipeShareLogo.js";

const Login = ({ navigation }) => {
    const [login, setLogin] = useState({ username: "", password: "" });
    const isLoading = useSelector(state => state.auth.isAuthorizing);
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
            <View style={styles.container}>
                <Text style={styles.title}>Welcome back!</Text>

                <Text style={styles.explanationText}>
                    Log in to edit your favorite recipes.
                </Text>
                <Text style={styles.inputText}>Username</Text>
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
                <Text style={styles.inputText}>Password</Text>
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
                    <Text style={{ color: "red", textAlign: "center" }}>
                        {errorMsg}
                    </Text>
                )}

                <TouchableOpacity
                    onPress={() => {
                        dispatch(clearError());
                        navigation.navigate("Signup");
                    }}
                >
                    <Text style={styles.switchAuthPageLink}>
                        Don't have an account? Sign up!
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
                        style={styles.submitButton}
                    >
                        {isLoading ? (
                            <ActivityIndicator size="large" color="#00ff00" />
                        ) : (
                            <Text style={styles.submitButtonText}>Login</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
Login.navigationOptions = {
    headerTitle: <RecipeShareLogo />,
};

export default Login;
