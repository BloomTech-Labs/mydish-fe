import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from '../styles/createRecipeStyles';
import theme from '../styles/theme.style';
import { maxRecipeName } from '../constants/maxLength';
import { TextInput } from 'react-native-gesture-handler';
import {
  predictIngredientsFromTitle,
  generateRecipeFromUrl,
} from '../store/generate/generateRecipeAction';

const GenerateFields = ({
  setGenerateIngredientsCam,
  setGenerateInstructionsCam,
  setImageModalVisible,
  predictionText,
  setPredictionText,
  setRecipe,
  setGenerateRecipeText,
  generateRecipeText,
}) => {
  const dispatch = useDispatch();
  const [highlighted, setHighlighted] = useState(false);

  const handleIngredientsGenerate = () => {
    setGenerateInstructionsCam(false);
    setGenerateIngredientsCam(true);
    setImageModalVisible(true);
  };

  const handleInstructionsGenerate = () => {
    setGenerateIngredientsCam(false);
    setGenerateInstructionsCam(true);
    setImageModalVisible(true);
  };

  const predictIngredients = () => {
    dispatch(predictIngredientsFromTitle(predictionText));
    setRecipe((oldRecipe) => ({
      ...oldRecipe,
      title: predictionText,
    }));
    setPredictionText('');
  };

  const handlePredictionTextChanges = (value) => {
    setPredictionText(value);
  };

  const handleGenrerateRecipeChanges = (value) => {
    setGenerateRecipeText(value);
  };

  const generateRecipe = () => {
    dispatch(generateRecipeFromUrl(generateRecipeText));
    setGenerateRecipeText('');
  };

  return (
    <View>
      <Text
        style={{
          color: theme.DARK_GREY_FONT_COLOR,
          fontSize: theme.REGULAR_FONT_SIZE,
          marginTop: 40,
          alignSelf: 'center',
        }}
      >
        Enter the URL for a recipe!
      </Text>
      <View style={styles.generateView}>
        <TextInput
          style={
            highlighted
              ? {
                  ...styles.RecipeNameContainer,
                  ...styles.highlighted,
                  width: '80%',
                }
              : { ...styles.RecipeNameContainer, width: '80%' }
          }
          placeholder="Enter recipe URL"
          onChangeText={handleGenrerateRecipeChanges}
          value={generateRecipeText}
          onFocus={() => setHighlighted(true)}
          onBlur={() => setHighlighted(false)}
          returnKeyType="go"
          onSubmitEditing={generateRecipe}
        />
        <TouchableOpacity onPress={generateRecipe}>
          <View
            style={{
              ...theme.PRIMARY_BUTTON,
              width: 50,
            }}
          >
            <Text style={theme.PRIMARY_BUTTON_TEXT}>Send</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: theme.DARK_GREY_FONT_COLOR,
          fontSize: theme.REGULAR_FONT_SIZE,
          alignSelf: 'center',
        }}
      >
        Generate ingredients or instructions by taking a photo of a recipe!
      </Text>
      <View style={styles.generateView}>
        <TouchableOpacity onPress={handleIngredientsGenerate}>
          <View style={theme.SECONDARY_BUTTON}>
            <Text style={theme.SECONDARY_BUTTON_TEXT}>Ingredients</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInstructionsGenerate}>
          <View style={theme.SECONDARY_BUTTON}>
            <Text style={theme.SECONDARY_BUTTON_TEXT}>Instructions</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: theme.DARK_GREY_FONT_COLOR,
          fontSize: theme.REGULAR_FONT_SIZE,
          alignSelf: 'center',
        }}
      >
        Enter the name of a food and we'll predict the ingredients!
      </Text>
      <View
        style={{
          ...styles.generateView,
          marginBottom: 40,
        }}
      >
        <TextInput
          style={
            highlighted
              ? {
                  ...styles.RecipeNameContainer,
                  ...styles.highlighted,
                  width: '80%',
                }
              : { ...styles.RecipeNameContainer, width: '80%' }
          }
          maxLength={maxRecipeName}
          placeholder="Enter recipe name and we'll get the ingredients"
          onChangeText={handlePredictionTextChanges}
          value={predictionText}
          onFocus={() => setHighlighted(true)}
          onBlur={() => setHighlighted(false)}
          returnKeyType="go"
          onSubmitEditing={predictIngredients}
        />
        <TouchableOpacity onPress={predictIngredients}>
          <View
            style={{
              ...theme.PRIMARY_BUTTON,
              width: 50,
            }}
          >
            <Text style={theme.PRIMARY_BUTTON_TEXT}>Send</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GenerateFields;
