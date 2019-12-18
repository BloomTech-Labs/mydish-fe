import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

const Title = props => {
    const [editing, setEditing] = useState(false);
    const [recipeTitle, setRecipeTitle] = useState(null);

    useEffect(() => {
        setRecipeTitle(props.title);
    }, []);

    updateRef = ref => {
        this._swipeableRow = ref;
    };

    const editHandler = () => {
        setEditing(true);
        props.setMainEditing(true)
        this._swipeableRow.close()
    };

    return (
        <Swipeable
            ref={this.updateRef}
            close={editing && true}
            renderRightActions={() => (
                <View style={styles.buttonContainer}>
                    <View style={styles.editButton}>
                        <Text onPress={editHandler}>Edit</Text>
                    </View>
                    <View style={styles.deleteButton}>
                        <Text>Delete</Text>
                    </View>
                </View>
            )}
        >
            {/*TextInput */}
            {editing && props.mainEditing ? (
                <View style={styles.titleContainer}>
                    <TextInput
                        value={recipeTitle ? recipeTitle : props.title}
                        onChangeText={title => setRecipeTitle(title)}
                        style={{ ...styles.title, ...styles.input }}
                    />
                </View>
            ) : (

                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            {recipeTitle ? recipeTitle : props.title}
                        </Text>
                    </View>
                )}
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: "#363838",
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 12,
        marginLeft: 14,
    },
    input: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    editButton: {
        backgroundColor: "#76A21E",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        width: 60,
    },
    deleteButton: {
        backgroundColor: "#C00000",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        width: 60,
    },
    titleContainer: {
        backgroundColor: "white",
    },
});

export default Title;
