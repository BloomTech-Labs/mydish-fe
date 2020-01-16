import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../../styles/individualRecipeStyles";
import { useSelector, useDispatch } from "react-redux";
import {
    startEdit,
    stopEdit,
    editTitle,
    setCurrentActive,
    resetCurrentActive,
} from "../../store/singleRecipe/singleRecipeActions";

const Title = props => {
    const dispatch = useDispatch();

    // mainEditing determines whether we're able to edit anything, period.
    // If we're editing one component and we click away, we're clicking away in our parent component.
    // The parent component updates the store to say "Yo, stop editing",
    //     and then this component knows to stop editing.
    const mainEditing = useSelector(state => state.singleRecipe.editing);
    const recipeTitle = useSelector(state => state.singleRecipe.recipe.title);
    const currentActive = useSelector(
        state => state.singleRecipe.currentActive,
    );
    const [editing, setEditing] = useState(false);
    const swipeableEl = useRef(null);

    const close = () => swipeableEl.current.close();

    // useEffect(() => {
    //     // If our mainEditing variable is false,
    //     // setEditing to false as well.
    //     // This makes sure that this individual component doesn't also
    //     //     enter edit mode if we start editing a different swipeale
    //     if (!mainEditing) {
    //         setEditing(false);
    //         dispatch(resetCurrentActive());
    //     }
    // }, [mainEditing]);

    const editHandler = () => {
        setEditing(true);
        dispatch(startEdit());
        close();
        makeActive("edit", () => setEditing(false));
    };

    const checkActive = () => {
        if (currentActive.field && currentActive.field !== "title") return;
        else {
            return false;
        }
    };

    const makeActive = (type, close) => {
        dispatch(setCurrentActive({ type, field: "title", index: 1, close }));
    };

    const handleWillOpen = () => {
        if (checkActive() !== false) {
            currentActive.close();
        }
        // dispatch(stopEdit());
    };

    const handleClose = () => {
        if (checkActive() === false) {
            dispatch(resetCurrentActive());
        }
    };

    return (
        <Swipeable
            ref={swipeableEl}
            onSwipeableWillOpen={handleWillOpen}
            onSwipeableOpen={() => makeActive("swipe", close)}
            onSwipeableWillClose={handleClose}
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
            {/* removed && mainEditing */}
            {editing ? (
                <View style={styles.titleContainer}>
                    <TextInput
                        value={recipeTitle ? recipeTitle : props.title}
                        onChangeText={title => {
                            dispatch(editTitle(title));
                        }}
                        style={styles.title}
                        multiline
                        returnKeyType="done"
                        autoFocus={true}
                        enablesReturnKeyAutomatically={true}
                    />
                </View>
            ) : (
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {recipeTitle ? recipeTitle : props.title}
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
