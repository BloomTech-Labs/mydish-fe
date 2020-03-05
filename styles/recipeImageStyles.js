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
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    newImage: {
        width: 32,
        height: 32,
        marginRight: 16,
        marginBottom: 4,
        backgroundColor: "#DADADA",
        padding: 5,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 22,
        height: 18,
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
