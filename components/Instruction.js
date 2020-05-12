import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import XDeleteButton from './XDeleteButton';
import theme from '../styles/theme.style';
import { maxInstruction } from '../constants/maxLength';
import { useDispatch } from 'react-redux';
import {
  editInstruct,
  deleteInstruction,
} from '../store/singleRecipe/singleRecipeActions';

const Instruction = ({
  instruction,
  setRecipe,
  index,
  removeInstruction,
  parent,
}) => {
  const dispatch = useDispatch();
  const [highlighted, setHighlighted] = useState(false);

  const handleChange = (value) => {
    if (parent === 'create') {
      setRecipe((oldRecipe) => ({
        ...oldRecipe,
        instructions: oldRecipe.instructions.map((step, i) => {
          if (i === index) return value;
          else return step;
        }),
      }));
    } else if (parent === 'editRecipe') {
      dispatch(
        editInstruct(index, {
          description: value,
          step_number: index + 1,
        })
      );
    }
  };

  return (
    <View
      style={{
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <TextInput
          style={{
            maxWidth: '90%',
            width: '90%',
            padding: 10,
            borderWidth: theme.INPUT_BORDER_WIDTH,
            borderColor: highlighted
              ? theme.INPUT_BORDER_HIGHLIGHT_COLOR
              : theme.INPUT_BORDER_COLOR,
            borderRadius: theme.INPUT_BORDER_RADIUS,
            minHeight: 120,
          }}
          placeholder="Add step"
          multiline
          textAlignVertical="top"
          maxLength={maxInstruction}
          onChangeText={handleChange}
          value={instruction}
          onFocus={() => setHighlighted(true)}
          onBlur={() => setHighlighted(false)}
        />
        <XDeleteButton
          action={
            parent === 'create'
              ? () => removeInstruction(index)
              : () => dispatch(deleteInstruction(index))
          }
          parent="instruction"
        />
      </View>
    </View>
  );
};

export default Instruction;
