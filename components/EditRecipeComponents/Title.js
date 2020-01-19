import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../../styles/individualRecipeStyles";
import { useSelector, useDispatch } from "react-redux";
import {
    stopEdit,
    editTitle,
    setCurrentActive,
    resetCurrentActive,
} from "../../store/singleRecipe/singleRecipeActions";

const Title = ({ currentActive }) => {
    const dispatch = useDispatch();
    const recipeTitle = useSelector(state => state.singleRecipe.recipe.title);
    const [editing, setEditing] = useState(false);
    const swipeableEl = useRef(null);

    const closeSwipe = () => swipeableEl.current.close();
    const closeEdit = () => setEditing(false);

    const makeActive = (type, close) => {
        dispatch(setCurrentActive({ type, field: "title", index: 1, close }));
    };

    const checkActive = () =>
        currentActive.field && currentActive.field !== "title";

    const editHandler = () => {
        setEditing(true);
        closeSwipe();
        makeActive("edit", closeEdit);
    };

    const handleWillOpen = () => {
        if (checkActive()) currentActive.close();
        // dispatch(stopEdit());
    };

    const checkIfCurrentActiveIsAdd = () =>
        currentActive && currentActive.type === "add";

    return (
        <Swipeable
            ref={swipeableEl}
            onSwipeableWillOpen={handleWillOpen}
            onSwipeableOpen={() => makeActive("swipe", closeSwipe)}
            friction={checkIfCurrentActiveIsAdd() ? 10 : 1}
            close={editing && true}
            renderRightActions={() => (
                <View style={styles.buttonContainer}>
                    <FontAwesome
                        name="pencil-square-o"
                        size={32}
                        color="white"
                        style={styles.editIcon}
                        onPress={editHandler}
                    />
                </View>
            )}
        >
            {/*TextInput */}
            {editing ? (
                <View style={styles.titleContainer}>
                    <TextInput
                        value={recipeTitle && recipeTitle}
                        onChangeText={title => {
                            dispatch(editTitle(title));
                        }}
                        style={styles.title}
                        multiline
                        returnKeyType="done"
                        autoFocus={true}
                        enablesReturnKeyAutomatically={true}
                        onSubmitEditing={() => {
                            setEditing(false);
                            dispatch(resetCurrentActive());
                        }}
                    />
                </View>
            ) : (
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {recipeTitle && recipeTitle}
                    </Text>
                    <MaterialCommunityIcons
                        name="drag-vertical"
                        size={32}
                        color="#2E2E2E"
                    />
                </View>
            )}
        </Swipeable>
    );
};

export default Title;
