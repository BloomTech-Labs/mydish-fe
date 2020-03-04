import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    title: {
        textAlign: "center",
        color: "#42C200",
        fontSize: 30,
        fontWeight: "bold",
    },
    explanationText: {
        textAlign: "center",
        color: "#363838",
        fontSize: 16,
        marginVertical: 20,
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
    inputText: {
        color: "#363838",
    },
    submitButton: {
        justifyContent: "center",
        width: 217,
        height: 40,
        borderRadius: 50,
        backgroundColor: "#3BA405",
        paddingVertical: 10,
        marginTop: 30,
    },
    submitButtonText: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    switchAuthPageLink: {
        fontSize: 14,
        fontWeight: "500",
        color: "#047396",
    },
    maxLengthIndicator: {
        alignSelf: "flex-end",
        fontSize: 12,
    },
});

module.exports = styles;
