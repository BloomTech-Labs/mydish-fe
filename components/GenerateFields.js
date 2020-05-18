import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from '../styles/createRecipeStyles';
import theme from '../styles/theme.style';
import inputStyles from '../styles/authPageStyles';
import { maxRecipeName } from '../constants/maxLength';
import { TextInput } from 'react-native-gesture-handler';
import { predictIngredientsFromTitle } from '../store/generate/generateRecipeAction';
import { submitEditedRecipe } from '../store/singleRecipe/singleRecipeActions';

const GenerateFields = ({
  setGenerateIngredientsCam,
  setGenerateInstructionsCam,
  setImageModalVisible,
  predictionText,
  setPredictionText,
  setRecipe,
}) => {
  const dispatch = useDispatch();
  const [highlighted, setHighlighted] = useState(false);

  const handleIngredientsGenerate = () => {
    setGenerateIngredientsCam(true);
    setImageModalVisible(true);
  };

  const handleInstructionsGenerate = () => {
    setGenerateInstructionsCam(true);
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
        Generate ingredients or instructions from an image!
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
