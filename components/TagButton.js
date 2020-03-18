import React from "react";
import {TouchableOpacity, Text} from "react-native";
import styles from "../styles/createRecipeStyles";

export default function TagButton({tag, isSelected, setRecipe}) {
  const toggleTag = () => {
    setRecipe(oldRecipe => {
      // Does our tag exist in our recipe?
      const index = oldRecipe.tags.includes(tag);

      // If yes, remove it
      if (index) {
        return {
          ...oldRecipe,
          tags: oldRecipe.tags.filter(recipeTag => recipeTag !== tag),
        };
      } // If no, add it
      else return {...oldRecipe, tags: [...oldRecipe.tags, tag]};
    });
  };
  return (
    <TouchableOpacity
      style={
        isSelected
          ? {...styles.tagButtons, ...styles.tagButtonPressed}
          : styles.tagButtons
      }
      onPress={toggleTag}>
      <Text style={{color: "white"}}>{tag}</Text>
    </TouchableOpacity>
  );
}
