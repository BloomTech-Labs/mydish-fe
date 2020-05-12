import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/singleRecipe/singleRecipeActions';
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
import axiosWithAuth from '../utils/axiosWithAuth';
import { validateFields } from '../utils/helperFunctions/validateFields';
import { serverErrorAlert } from '../utils/helperFunctions/serverErrorAlert';
import { prepRecipeForPost } from '../utils/helperFunctions/prepRecipeForPost';
import { addRecipe } from '../store/recipes/recipeActions';
import { courses } from '../constants/courses';
import { initialCreateFormState } from '../constants/initialCreateFormState';
import FancySpinner from './FancySpinner';

function CreateRecipeForm({
  navigation,
  cancelButtonEditedRecipe,
  saveButtonEditedRecipe,
}) {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState(initialCreateFormState);
  let savedRecipe = false;
  const recipeStore = useSelector((state) => state.singleRecipe.recipe);
  const [recipeToRender, setRecipeToRender] = useState(recipe);
  const savedRecipeTagNames = recipeToRender.tags.map((tag) => tag.name);
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
  const [bool, setBool] = useState(true);

  useEffect(() => {
    dispatch(actions.resetRecipe());
    setRecipeToRender(recipeStore);
    savedRecipe = true;
  }, []);

  useEffect(() => {
    setRecipeToRender(recipeStore);
  }, [bool]);

  const postRecipe = async () => {
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
    dispatch(actions.addIngredient(newIng));
    setBool(!bool);
  };

  const addInstruction = () => {
    dispatch(actions.addInstruction(''));
  };

  const addNote = () => {
    dispatch(actions.addNote(''));
  };

  const removeNote = (index) => {
    dispatch(actions.deleteNote(index));
  };

  const removeIng = (index) => {
    dispatch(actions.deleteIngredient(index));
  };

  const removeInstruction = (index) => {
    dispatch(actions.deleteInstruction(index));
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
        parent={editRecipe}
      />
    ));
  };

  const addInstructions = () => {
    return recipeToRender.instructions.map((instruction, i) => (
      <Instruction
        key={i}
        index={i}
        removeInstruction={removeInstruction}
        instruction={
          instruction.description ? instruction.description : instruction
        }
        setRecipe={setRecipe}
        parent={editRecipe}
      />
    ));
  };

  const addNotes = () => {
    return recipeToRender.notes.map((note, i) => (
      <Notes
        key={i}
        index={i}
        removeNote={removeNote}
        note={note.description ? note.description : note}
        setRecipe={setRecipe}
        parent={editRecipe}
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
