import React, { useState, useRef, useEffect } from 'react';
import { TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  editIngred,
  deleteIngredient,
} from '../store/singleRecipe/singleRecipeActions';
import XDeleteButton from './XDeleteButton';
import styles from '../styles/ingredientStyles';

const Ingredient = ({ recipeIng, removeIng, index, setRecipe, parent }) => {
  const quantityInput = useRef(null);
  const unitInput = useRef(null);
  const nameInput = useRef(null);

  const dispatch = useDispatch();

  const [highlighted, setHighlighted] = useState({
    name: false,
    quantity: false,
    units: false,
  });
  const [ingredient, setIngredient] = useState(
    // Use the initial recipeIng value if it exists
    recipeIng
      ? recipeIng
      : {
          name: '',
          quantity: '',
          units: '',
        }
  );

  useEffect(() => {
    if (recipeIng) {
      setIngredient({
        name: recipeIng.name,
        quantity: String(recipeIng.quantity),
        units: recipeIng.units,
      });
    }
  }, [recipeIng]);

  useEffect(() => {
    // Check to make sure recipeIng and ingredient aren't exactly the same
    // If they were, this would cause a continuous loop with the
    //     useEffect() above ↑↑
    if (
      recipeIng &&
      recipeIng.name === ingredient.name &&
      recipeIng.quantity === ingredient.quantity &&
      recipeIng.units === ingredient.units
    )
      return;

    // If our parent component is the IndividualRecipeIngredient, then
    //     this will dispatch the editIngred() to update the store

    if (parent === 'editRecipe') {
      dispatch(editIngred(index, ingredient));
    }
  }, [ingredient]);

  const handleChange = (key, value) => {
    setIngredient({ ...ingredient, [key]: value });

    // If the parent component is the CreateRecipeForm, then
    //     this will update our parent recipe with any changes we type.
    if (parent === 'create') {
      setRecipe((oldRecipe) => ({
        ...oldRecipe,
        ingredients: oldRecipe.ingredients.map((ing, i) => {
          if (i === index) return { ...ingredient, [key]: value };
          else return ing;
        }),
      }));
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            ref={quantityInput}
            style={{
              ...styles.input,
              ...styles.quantity,
              ...(highlighted.quantity && styles.highlighted),
            }}
            placeholder="Amount"
            autoCapitalize="none"
            maxLength={5}
            keyboardType={'numeric'}
            onChangeText={(qty) =>
              handleChange(
                'quantity',
                qty.replace(/[0-9 ./,-]/g, '') ? ingredient.quantity : qty
              )
            }
            value={ingredient.quantity.toString()}
            onFocus={() => setHighlighted({ quantity: true })}
            onBlur={() => setHighlighted({ quantity: false })}
            returnKeyType="next"
            onSubmitEditing={() => unitInput.current.focus()}
          />
          <TextInput
            ref={unitInput}
            style={{
              ...styles.input,
              ...styles.units,
              ...(highlighted.units && styles.highlighted),
            }}
            placeholder="Units"
            autoCapitalize="none"
            maxLength={11}
            onChangeText={(event) => handleChange('units', event)}
            value={ingredient.units}
            onFocus={() => setHighlighted({ units: true })}
            onBlur={() => setHighlighted({ units: false })}
            returnKeyType="next"
            onSubmitEditing={() => nameInput.current.focus()}
          />
          <TextInput
            ref={nameInput}
            style={{
              ...styles.input,
              ...styles.name,
              ...(highlighted.name && styles.highlighted),
            }}
            multiline
            maxLength={44}
            placeholder="Ingredient Name"
            autoCapitalize="none"
            onChangeText={(event) => handleChange('name', event)}
            value={ingredient.name}
            onFocus={() => setHighlighted({ name: true })}
            onBlur={() => setHighlighted({ name: false })}
          />
        </View>

        <XDeleteButton
          parent="ingredient"
          action={
            parent === 'create'
              ? () => removeIng(index)
              : () => dispatch(deleteIngredient(index))
          }
        />
      </View>
    </View>
  );
};

export default Ingredient;
