import { StyleSheet } from "react-native";
import theme from "./theme.style";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 50,
        paddingVertical: 50,
        height: "100%",
        width: "100%",
    },
    backgroundImg: {
        maxWidth: "80%",
        maxHeight: "90%",
        resizeMode: "cover",
        zIndex: -10000,
        position: "absolute",
    },
    contentContainer: {
        height: "70%",
        paddingVertical: 70,
        justifyContent: "space-evenly",
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
        marginBottom: 30,
        paddingLeft: 10,
        minHeight: "5%",
        borderRadius: theme.INPUT_BORDER_RADIUS,
        borderWidth: 1,
        color: theme.GREY_FONT_COLOR,
        borderColor: theme.INPUT_BORDER_COLOR,
        backgroundColor: theme.INPUT_BACKGROUND_COLOR,
    },
    inputLabelText: {
        color: theme.WHITE_FONT_COLOR,
        marginBottom: 5,
    },
    submitButton: {
        justifyContent: "center",
        alignSelf: "flex-end",
        width: 150,
        height: 40,
        borderRadius: 5,
        backgroundColor: theme.PRIMARY_COLOR,
        paddingVertical: 10,
        marginTop: 30,
    },
    submitButtonText: {
        textAlign: "center",
        color: theme.WHITE_FONT_COLOR,
        fontSize: theme.REGULAR_FONT_SIZE,
        fontWeight: theme.BUTTON_FONT_WEIGHT,
    },
    switchAuthPageLink: {
        fontSize: 14,
        fontWeight: "500",
        color: theme.ACCENT_COLOR,
    },
    maxLengthIndicator: {
        alignSelf: "flex-end",
        fontSize: 12,
    },
});

module.exports = styles;
