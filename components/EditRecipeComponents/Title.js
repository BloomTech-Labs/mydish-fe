import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../styles/individualRecipeStyles";

const Title = props => {
    const [editing, setEditing] = useState(false);
    const [recipeTitle, setRecipeTitle] = useState(null);

    useEffect(() => {
        setRecipeTitle(props.title);
    }, [props.title]);

    const swipeableEl = useRef(null);
    const editHandler = () => {
        setEditing(true);
        props.setMainEditing(true);
        swipeableEl.current.close();
    };

    return (
        <Swipeable
            ref={swipeableEl}
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

export default Title;
