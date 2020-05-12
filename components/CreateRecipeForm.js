import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/singleRecipe/singleRecipeActions';
import { fetchIngredients } from '../store/ingredientPrediction/ingredientPredictionActions';
import { addCookbookRecipe } from '../store/cookbook/cookbookAction';
import styles from '../styles/createRecipeStyles';
import theme from '../styles/theme.style';
import { logoHeaderPlain } from './header/navigationHeader';
import RecipeName from './RecipeName';
import TimeInput from './TimeInput';
import Ingredient from './Ingredient';
import Instruction from './Instruction';
import TagButton from './TagButton';
import Add from './Add';
import Notes from './Notes';
import RecipeImage from './RecipeImageComponents/RecipeImage';
import ImageUploadModal from './RecipeImageComponents/ImageUploadModal';
import CommitModal from './EditRecipeComponents/Modal';
import SuggestedIngredients from './SuggestedIngredients';
import axiosWithAuth from '../utils/axiosWithAuth';
import { validateFields } from '../utils/helperFunctions/validateFields';
import { serverErrorAlert } from '../utils/helperFunctions/serverErrorAlert';
import { prepRecipeForPost } from '../utils/helperFunctions/prepRecipeForPost';
import { addRecipe } from '../store/recipes/recipeActions';
import { courses } from '../constants/courses';
import { initialCreateFormState } from '../constants/initialCreateFormState';

//Analytics
import { Analytics, Event } from 'expo-analytics';
import FancySpinner from './FancySpinner';
const analytics = new Analytics('UA-160806654-1');

function CreateRecipeForm({
  navigation,
  savedRecipe,
  cancelButtonEditedRecipe,
  saveButtonEditedRecipe,
}) {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState(initialCreateFormState);
  const recipeToRender = savedRecipe
    ? useSelector((state) => state.singleRecipe.recipe)
    : recipe;
  const savedRecipeTagNames =
    savedRecipe && recipeToRender.tags.map((tag) => tag.name);
  const [editRecipe, create] = ['editRecipe', 'create'];
  let [errors, setErrors] = useState([]);
  const [commitModal, setCommitModal] = useState({
    save: false,
    cancel: false,
  });
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [highlighted, setHighlighted] = useState({
    prep_time: false,
    cook_time: false,
  });

  const postRecipe = async () => {
    analytics
      .event(new Event('Recipe', 'Create recipe'))
      .then(() => console.log('Recipe added'))
      .catch((e) => console.log(e.message));
    const preppedRecipe = await prepRecipeForPost(recipe);

    const errMessages = validateFields(preppedRecipe, 'create');

    if (errMessages.length) {
      setErrors(errMessages);
      return; //if any missing fields exists, do not submit the data and set the errors state variable array.
    }
    setIsLoading(true);
    try {
      const axiosCustom = await axiosWithAuth();
      const res = await axiosCustom.post('recipes', preppedRecipe);

      let recipeID = res.data.id;
      setIsLoading(false);
      setRecipe(initialCreateFormState);
      navigation.navigate('Home');
      navigation.push('IndividualR', { recipe, recipeID });
      dispatch(addCookbookRecipe(res.data));
      dispatch(addRecipe(res.data));
    } catch (err) {
      console.log('error from adding new recipe \n', err.response);
      if (err.response.status === 500) {
        serverErrorAlert();
      }
    } finally {
      setIsLoading(false);
    }
  };

  const addIng = () => {
    const newIng = { name: '', quantity: '', units: '' };
    const ingObj = {};
    const ingredients = recipe.ingredients;
    /* The Ingredient Prediction API returns an error if passed more than 10 ingredients.
        The loop below creates an ingObj that includes (at most) the last 10 ingredients 
        entered by the user. */
    for (let i = ingredients.length - 1, j = 0; i >= 0 && j < 10; i--, j++) {
      const name = ingredients[i].name.toLowerCase();
      if (name.replace(/\s|\t|\n+/g, '')) {
        // Remove spaces, tabs, and newlines. Add to ingObj if it still has content.
        Object.defineProperty(ingObj, j + 1, {
          value: name,
          writable: true,
          enumerable: true,
        });
      }
    }
    savedRecipe
      ? dispatch(actions.addIngredient(newIng))
      : [
          setRecipe((oldRecipe) => ({
            ...oldRecipe,
            ingredients: [...oldRecipe.ingredients, newIng],
          })),
          Object.keys(ingObj).length >= 3 && dispatch(fetchIngredients(ingObj)),
        ];
  };

  const addInstruction = () => {
    savedRecipe
      ? dispatch(actions.addInstruction(''))
      : setRecipe((oldRecipe) => ({
          ...oldRecipe,
          instructions: [...oldRecipe.instructions, ''],
        }));
  };

  const addNote = () => {
    savedRecipe
      ? dispatch(actions.addNote(''))
      : setRecipe((oldRecipe) => ({
          ...oldRecipe,
          notes: [...oldRecipe.notes, ''],
        }));
  };

  const removeNote = (index) => {
    setRecipe((oldRecipe) => ({
      ...oldRecipe,
      notes: oldRecipe.notes.filter((val, i) => i !== index),
    }));
  };

  const removeIng = (index) => {
    setRecipe((oldRecipe) => ({
      ...oldRecipe,
      ingredients: oldRecipe.ingredients.filter((val, i) => i !== index),
    }));
  };

  const removeInstruction = (index) => {
    setRecipe((oldRecipe) => ({
      ...oldRecipe,
      instructions: oldRecipe.instructions.filter((val, i) => i !== index),
    }));
  };

  const addIngredients = () => {
    return recipeToRender.ingredients.map((ingredient, i) => (
      <Ingredient
        key={i}
        index={i}
        removeIng={removeIng}
        recipeIng={ingredient}
        recipe={recipe}
        setRecipe={setRecipe}
        parent={savedRecipe ? editRecipe : create}
      />
    ));
  };

  const addInstructions = () => {
    return recipeToRender.instructions.map((instruction, i) => (
      <Instruction
        key={i}
        index={i}
        removeInstruction={removeInstruction}
        instruction={savedRecipe ? instruction.description : instruction}
        setRecipe={setRecipe}
        parent={savedRecipe ? editRecipe : create}
      />
    ));
  };

  const addNotes = () => {
    return recipeToRender.notes.map((note, i) => (
      <Notes
        key={i}
        index={i}
        removeNote={removeNote}
        note={savedRecipe ? note.description : note}
        id={savedRecipe && note.id}
        setRecipe={setRecipe}
        parent={savedRecipe ? editRecipe : create}
      />
    ));
  };

  if (isLoading) {
    return <FancySpinner />;
  }

  return (
    <KeyboardAwareScrollView>
      <View>
        <ScrollView>
          <RecipeImage
            image={recipeToRender.img}
            setImageModalVisible={setImageModalVisible}
          />
          <View style={styles.container}>
            <View>
              <CommitModal
                commitModal={commitModal}
                setCommitModal={setCommitModal}
                saveButtonEditedRecipe={saveButtonEditedRecipe}
              />
              <ImageUploadModal
                visible={imageModalVisible}
                setVisible={setImageModalVisible}
                setRecipe={setRecipe}
                parent={savedRecipe ? editRecipe : create}
              />
              <RecipeName
                recipe={recipeToRender}
                setRecipe={setRecipe}
                missing={errors.includes('title')}
                parent={savedRecipe ? editRecipe : create}
              />
              <View style={styles.totalTimeView}>
                <TimeInput
                  type="prep_time"
                  title="Prep Time"
                  errors={errors}
                  highlighted={highlighted}
                  setHighlighted={setHighlighted}
                  recipe={recipe}
                  setRecipe={setRecipe}
                  recipeToRender={recipeToRender}
                  savedRecipe={savedRecipe}
                />
                <TimeInput
                  type="cook_time"
                  title="Cook Time"
                  errors={errors}
                  highlighted={highlighted}
                  setHighlighted={setHighlighted}
                  recipe={recipe}
                  setRecipe={setRecipe}
                  recipeToRender={recipeToRender}
                  savedRecipe={savedRecipe}
                />
              </View>
              <View style={styles.heading}>
                <Text style={styles.headText}>Course Type</Text>
                {errors.includes('tags') && (
                  <Text style={styles.missingAsterisk}>*</Text>
                )}
              </View>
              <View style={styles.tagGroup}>
                {courses.map((course, i) => (
                  <TagButton
                    key={i}
                    tag={course}
                    isSelected={
                      savedRecipe
                        ? savedRecipeTagNames.includes(course)
                        : recipe.tags.includes(course)
                    }
                    setRecipe={setRecipe}
                    parent={savedRecipe ? editRecipe : create}
                  />
                ))}
              </View>
              <Text
                style={{
                  ...styles.heading,
                  ...styles.headText,
                }}
              >
                Ingredients
                {errors.includes('ingredients') && (
                  <Text style={styles.missingAsterisk}> *</Text>
                )}
              </Text>
              {addIngredients()}
              <Add text="Add Ingredient" submit={addIng} />

              {savedRecipe ? (
                <></>
              ) : (
                <SuggestedIngredients recipe={recipe} setRecipe={setRecipe} />
              )}

              <Text
                style={{
                  ...styles.heading,
                  ...styles.headText,
                }}
              >
                Steps
                {errors.includes('instructions') && (
                  <Text style={styles.missingAsterisk}> *</Text>
                )}
              </Text>
              {addInstructions()}
              <Add text="Add Step" submit={addInstruction} />

              <Text
                style={{
                  ...styles.heading,
                  ...styles.headText,
                }}
              >
                Notes
              </Text>

              {addNotes()}
              <Add text="Add Note" submit={addNote} />
              {errors.length > 0 && (
                <Text style={styles.errors}>
                  * Please fill out all required fields.
                </Text>
              )}
              <View style={styles.saveView}>
                {savedRecipe && (
                  <TouchableOpacity onPress={cancelButtonEditedRecipe}>
                    <View style={theme.SECONDARY_BUTTON}>
                      <Text style={theme.SECONDARY_BUTTON_TEXT}>Cancel</Text>
                    </View>
                  </TouchableOpacity>
                )}
                <TouchableOpacity
                  onPress={
                    savedRecipe
                      ? () => {
                          dispatch(actions.cleanUpRecipe());
                          const errMessages = validateFields(null, 'edit');
                          if (errMessages.length) {
                            setErrors(errMessages);
                            return;
                          }
                          setCommitModal({
                            save: true,
                            cancel: false,
                          });
                        }
                      : postRecipe
                  }
                >
                  <View style={theme.PRIMARY_BUTTON}>
                    <Text style={theme.PRIMARY_BUTTON_TEXT}>Save</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
}
CreateRecipeForm.navigationOptions = logoHeaderPlain;

export default CreateRecipeForm;
