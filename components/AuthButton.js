import React from "react";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import styles from "../styles/authPageStyles";

const AuthButton = ({ parent, loginUser, register }) => {
    const isLoading = useSelector(state => state.auth.isAuthorizing);

    return (
        <TouchableOpacity
            onPress={parent === "login" ? loginUser : register}
            style={styles.submitButton}
        >
            {isLoading ? (
                <ActivityIndicator size="large" color="#00ff00" />
            ) : (
                <Text style={styles.submitButtonText}>
                    {parent === "login" ? "Login" : "Sign Up"}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default AuthButton;
