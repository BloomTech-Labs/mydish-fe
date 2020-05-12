import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/createRecipeStyles';
import { useDispatch } from 'react-redux';
import { toggleStateTag } from '../store/singleRecipe/singleRecipeActions';
import theme from '../styles/theme.style';

export default function TagButton({ tag, isSelected, setRecipe, parent }) {
  const dispatch = useDispatch();
  const toggleTag = () => {
    if (parent === 'editRecipe') {
      // `tag` is simply a string of the tag's display name. There is no object with an ID here.
      dispatch(toggleStateTag(tag));
    }
    if (parent === 'create') {
      setRecipe((oldRecipe) => {
        // Does our tag exist in our recipe?
        const index = oldRecipe.tags.includes(tag);

        // If yes, remove it
        if (index) {
          return {
            ...oldRecipe,
            tags: oldRecipe.tags.filter((recipeTag) => recipeTag !== tag),
          };
        } // If no, add it
        else return { ...oldRecipe, tags: [...oldRecipe.tags, tag] };
      });
    }
  };
  return (
    <TouchableOpacity
      style={{
        ...(isSelected ? styles.tagButtonSelected : styles.tagButtonUnselected),
        ...styles.tagButton,
      }}
      onPress={toggleTag}
    >
      <Text
        style={{
          ...(isSelected
            ? theme.PRIMARY_BUTTON_TEXT
            : theme.SECONDARY_BUTTON_TEXT),
          ...styles.tagText,
        }}
      >
        {tag}
      </Text>
    </TouchableOpacity>
  );
}
