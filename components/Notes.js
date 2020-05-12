import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  editNotes,
  deleteNote,
} from '../store/singleRecipe/singleRecipeActions';
import XDeleteButton from './XDeleteButton';
import styles from '../styles/createRecipeStyles';
import { maxNote } from '../constants/maxLength';

const Notes = ({ index, removeNote, note, id, setRecipe, parent }) => {
  const [highlighted, setHighlighted] = useState(false);
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    if (parent === 'create') {
      setRecipe((oldRecipe) => ({
        ...oldRecipe,
        notes: oldRecipe.notes.map((note, i) => {
          if (i === index) return value;
          else return note;
        }),
      }));
    } else if (parent === 'editRecipe') {
      const noteToSave = { description: value };
      id ? (noteToSave.id = id) : null;
      dispatch(editNotes(index, noteToSave));
    }
  };

  return (
    <View
      style={{
        marginBottom: 10,
        flexWrap: 'nowrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <TextInput
        style={
          highlighted
            ? { ...styles.notesContainer, ...styles.highlighted }
            : styles.notesContainer
        }
        placeholder="Add Notes"
        multiline
        textAlignVertical="top"
        maxLength={maxNote}
        onChangeText={changeHandler}
        value={note}
        onFocus={() => setHighlighted(true)}
        onBlur={() => setHighlighted(false)}
      />
      <XDeleteButton
        action={
          parent === 'create'
            ? () => removeNote(index)
            : () => dispatch(deleteNote(index))
        }
        parent="note"
      />
    </View>
  );
};

export default Notes;
