import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { editTitle } from '../store/singleRecipe/singleRecipeActions';
import { maxRecipeName } from '../constants/maxLength';
import styles from '../styles/createRecipeStyles';

const RecipeName = ({ recipe, setRecipe, missing, parent }) => {
  const dispatch = useDispatch();

  const recipeName =
    parent === 'create'
      ? recipe.title
      : useSelector((state) => state.singleRecipe.recipe.title);
  const [highlighted, setHighlighted] = useState(false);

  const handleChange = (value) => {
    if (parent === 'editRecipe') {
      dispatch(editTitle(value));
    }
    if (parent === 'create') {
      setRecipe({ ...recipe, title: value });
    }
  };

  return (
    <>
      <View style={styles.heading}>
        <Text style={styles.headText}>Title</Text>
        {missing && <Text style={styles.missingAsterisk}>*</Text>}
      </View>
      <TextInput
        style={
          highlighted
            ? {
                ...styles.RecipeNameContainer,
                ...styles.highlighted,
              }
            : styles.RecipeNameContainer
        }
        maxLength={maxRecipeName}
        placeholder="Enter recipe name"
        onChangeText={handleChange}
        value={recipeName}
        onFocus={() => setHighlighted(true)}
        onBlur={() => setHighlighted(false)}
      />

      <Text style={styles.maxLengthIndicator}>
        {recipeName === null ? '' : `${recipeName.length}/${maxRecipeName}`}
      </Text>
    </>
  );
};

export default RecipeName;
