import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        height: 300,
        backgroundColor: "whitesmoke",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: "100%",
        width: "100%",
    },
    changeImage: {
        width: 100,
        margin: 10,
        backgroundColor: "#8FCC70",
        padding: 5,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    uploadModal: {
        height: 300,
        position: "relative",
        top: -200,
        padding: 10,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 20,
    },
});

module.exports = styles;
