import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';

import {
  editPreptime,
  editCooktime,
} from '../store/singleRecipe/singleRecipeActions';
import styles from '../styles/createRecipeStyles';

function TimeInput({
  type,
  title,
  errors,
  highlighted,
  setHighlighted,
  recipe,
  setRecipe,
  recipeToRender,
  savedRecipe,
}) {
  const dispatch = useDispatch();
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.headText}>{title}</Text>
        {errors.includes('prep_time and/or cook_time') && (
          <Text style={styles.missingAsterisk}>*</Text>
        )}
      </View>
      <TextInput
        style={{
          ...styles.timeInputContainer,
          ...(highlighted[type] && styles.highlighted),
        }}
        placeholder="minutes"
        keyboardType={'numeric'}
        onChangeText={(min) => {
          const minutes = Number(min);
          if (min !== '' && (isNaN(minutes) || minutes === 0)) return;
          if (savedRecipe) {
            if (type === 'prep_time') {
              dispatch(editPreptime(minutes));
            } else if (type === 'cook_time') {
              dispatch(editCooktime(minutes));
            }
          } else {
            setRecipe({
              ...recipe,
              [type]: min,
            });
          }
        }}
        value={recipeToRender[type] ? String(recipeToRender[type]) : ''}
        onFocus={() => setHighlighted({ [type]: true })}
        onBlur={() => setHighlighted({ [type]: false })}
      />
    </View>
  );
}

export default TimeInput;
