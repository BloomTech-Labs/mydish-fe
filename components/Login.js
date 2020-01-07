import React, { useState, useEffect } from "react";
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

const Login = ({ navigation }) => {
    const [login, setLogin] = useState({ username: "", password: "" });
    const errorMsg = useSelector(state => state.auth.error);
    const dispatch = useDispatch();

    const onPress = async () => {
        const success = await dispatch(loginUser(login));

        if (success) {
            navigation.navigate("App");
        }
    };

    return (
        <KeyboardAwareScrollView>
            <KeyboardAvoidingView
                behavior="position"
                keyboardVerticalOffset={70}
                style={{ flex: 1 }}
            >
                <SafeAreaView>
                    <View>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                textAlign: "center",
                                paddingBottom: 15,
                            }}
                        >
                            <Image
                                source={logo}
                                style={{ width: "10%", height: "105%" }}
                            />
                            <Text style={styles.title}>RecipeShare</Text>
                        </View>

                        <Text style={styles.explanationText}>
                            Sign in or create a new account to save and edit
                            your favorite recipes.
                        </Text>
                        <Text style={styles.loginText}>Log In</Text>
                        <Text style={styles.emailText}>Username</Text>
                        <TextInput
                            style={styles.inputFeilds}
                            name="username"
                            testID="username"
                            value={login.username}
                            onChangeText={event =>
                                setLogin({ ...login, username: event })
                            }
                        />
                        <Text style={styles.passwordText}>Password</Text>
                        <TextInput
                            style={styles.inputFeilds}
                            name="password"
                            testID="password"
                            value={login.password}
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
                                onPress={onPress}
                                style={styles.loginButton}
                            >
                                <Text style={styles.loginButtonText}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </KeyboardAwareScrollView>
    );
};

export default Login;
