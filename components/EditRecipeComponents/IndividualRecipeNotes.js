import React, {useRef, useState, useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from "../../styles/individualRecipeStyles";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {
  editNotes,
  stopEdit,
  setCurrentActive,
  resetCurrentActive,
  deleteNote,
} from "../../store/singleRecipe/singleRecipeActions";

export default function IndividualRecipeNotes({index, note, currentActive}) {
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const swipeableEl = useRef(null);

  const closeSwipe = () => swipeableEl.current.close();
  const closeEdit = () => setEditing(false);

  const makeActive = (type, close) => {
    dispatch(setCurrentActive({type, field: "notes", index, close}));
  };

  const checkActive = () =>
    (currentActive.field && currentActive.field !== "notes") ||
    (currentActive.field && currentActive.index !== index);

  const editHandler = () => {
    setEditing(true);
    closeSwipe();
    makeActive("edit", closeEdit);
  };

  const handleWillOpen = () => {
    if (checkActive()) currentActive.close();
  };

  const checkIfCurrentActiveIsAdd = () =>
    currentActive && currentActive.type === "add";

  return (
    <>
      {editing ? (
        <View style={styles.stepTextView}>
          <TextInput
            value={note.description}
            onChangeText={newValue =>
              dispatch(
                editNotes(index, {
                  id: note.id,
                  description: newValue,
                }),
              )
            }
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
        <View style={styles.swipeableContainer}>
          <Swipeable
            ref={swipeableEl}
            onSwipeableWillOpen={handleWillOpen}
            onSwipeableOpen={() => makeActive("swipe", closeSwipe)}
            friction={checkIfCurrentActiveIsAdd() ? 10 : 1}
            renderRightActions={() => (
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={editHandler}
                  style={styles.editButton}>
                  <FontAwesome name="pencil-square-o" size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(deleteNote(index));
                    dispatch(resetCurrentActive());
                  }}
                  style={styles.deleteButton}>
                  <FontAwesome name="trash-o" size={20} color="white" />
                </TouchableOpacity>
              </View>
            )}>
            <View style={styles.stepTextView}>
              <Text style={styles.stepText}>{note.description}</Text>
              <MaterialCommunityIcons
                name="drag-vertical"
                size={32}
                color="#2E2E2E"
              />
            </View>
          </Swipeable>
        </View>
      )}
    </>
  );
}
