import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from '../styles/createRecipeStyles';
import theme from '../styles/theme.style';
import { maxRecipeName } from '../constants/maxLength';
import { TextInput } from 'react-native-gesture-handler';
import { predictIngredientsFromTitle } from '../store/generate/generateRecipeAction';

const GenerateFields = ({
  setGenerateIngredientsCam,
  setGenerateInstructionsCam,
  setGenerateTitleCam,
  setImageModalVisible,
  predictionText,
  setPredictionText,
  setRecipe,
}) => {
  const dispatch = useDispatch();
  const [highlighted, setHighlighted] = useState(false);

  const handleIngredientsGenerate = () => {
    setGenerateInstructionsCam(false);
    setGenerateTitleCam(false);
    setGenerateIngredientsCam(true);
    setImageModalVisible(true);
  };

  const handleInstructionsGenerate = () => {
    setGenerateIngredientsCam(false);
    setGenerateTitleCam(false);
    setGenerateInstructionsCam(true);
    setImageModalVisible(true);
  };

  const handleGenerateTitleFromPhoto = () => {
    setGenerateIngredientsCam(false);
    setGenerateInstructionsCam(false);
    setGenerateTitleCam(true);
    setImageModalVisible(true);
  };

  const predictIngredients = () => {
    dispatch(predictIngredientsFromTitle(predictionText));
    setPredictionText('');
    setRecipe((oldRecipe) => ({
      ...oldRecipe,
      title: predictionText,
    }));
  };

  const handlePredictionTextChanges = (value) => {
    setPredictionText(value);
  };

  return (
    <View>
      <Text
        style={{
          color: theme.DARK_GREY_FONT_COLOR,
          fontSize: theme.REGULAR_FONT_SIZE,
          marginTop: 30,
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
          marginTop: 30,
        }}
      >
        Generate ingredients from an image of your food!
      </Text>
      <View style={styles.generateView}>
        <TouchableOpacity onPress={handleGenerateTitleFromPhoto}>
          <View style={{ ...theme.SECONDARY_BUTTON, width: 215 }}>
            <Text style={theme.SECONDARY_BUTTON_TEXT}>
              Snap a Photo of Your Plate
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: theme.DARK_GREY_FONT_COLOR,
          fontSize: theme.REGULAR_FONT_SIZE,
        }}
      >
        Enter the name of a food and we'll predict the ingredients!
      </Text>
      <View style={styles.generateView}>
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
