import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
    title: {
        textAlign: "center",
        color: "#42C200",
        fontSize: 30,
        fontWeight: "bold",
    },
    explanationText: {
        textAlign: "left",
        color: "#363838",

        fontSize: 16,
        marginVertical: 20,
    },
    createAccountTitle: {
        textAlign: "left",
        color: "#363838",
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 14,
    },
    inputFields: {
        height: 40,
        marginVertical: 10,
        paddingLeft: 3,
        minHeight: "5%",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#d6d7da",
    },
    createAccountButton: {
        justifyContent: "center",
        width: 217,
        height: 40,
        borderRadius: 50,
        backgroundColor: "#3BA405",
        paddingVertical: 10,
        marginTop: 30,
    },
    loginButton: {
        fontSize: 14,
        fontWeight: "500",
        color: "#047396",
    },
    emailText: {
        color: "#363838",
    },
    passwordText: {
        color: "#363838",
    },
    createAccountText: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

module.exports = styles;
