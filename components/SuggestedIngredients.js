import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import Add from './Add';
import Delete from './XDeleteButton';
import { deleteIngredient } from '../store/ingredientPrediction/ingredientPredictionActions';
import styles from '../styles/ingredientPredictionStyles';

const SuggestedIngredients = ({ recipe, setRecipe }) => {
  const dispatch = useDispatch();
  const suggestedIngredients = useSelector(
    (state) => state.ingredientPrediction.ingredients
  );
  const isEmpty = (ingredient) => {
    return !ingredient.quantity && !ingredient.units && !ingredient.name;
  };
  const addIngredient = (name) => {
    const ingredient = {
      quantity: '',
      units: '',
      name: name,
    };
    const ingredients = recipe.ingredients;
    const length = ingredients.length;
    if (isEmpty(ingredients[length - 1])) {
      ingredients.splice(length - 1, 1, ingredient);
    } else {
      ingredients.push(ingredient);
    }
    setRecipe((recipe) => ({
      ...recipe,
      ingredients: ingredients,
    }));
  };
  return (
    <>
      {suggestedIngredients.length > 0 && (
        <View>
          <Text style={styles.headText}>Suggested Ingredients</Text>
          {suggestedIngredients.map((ing, i) => {
            if (i < 5) {
              return (
                <View style={styles.ingredientContainer} key={i}>
                  <View style={styles.addButton}>
                    <Add
                      submit={() => {
                        addIngredient(ing);
                        dispatch(deleteIngredient(ing));
                      }}
                    />
                  </View>
                  <Text style={styles.ingredientText}>{ing}</Text>
                  <View style={styles.deleteButton}>
                    <Delete action={() => dispatch(deleteIngredient(ing))} />
                  </View>
                </View>
              );
            }
          })}
        </View>
      )}
    </>
  );
};

export default SuggestedIngredients;
