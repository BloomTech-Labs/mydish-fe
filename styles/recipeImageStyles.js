import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        height: 200,
        backgroundColor: "whitesmoke",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: "100%",
        width: "100%",
    },
    uploadModal: {
        height: 300,
        position: "relative",
        top: -200,
        marginLeft: "-5%",
        marginRight: "-5%",
        padding: 10,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
});

module.exports = styles;
