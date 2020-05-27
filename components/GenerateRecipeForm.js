import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { addCookbookRecipe } from '../store/cookbook/cookbookAction';
import styles from '../styles/createRecipeStyles';
import theme from '../styles/theme.style';
import { logoHeaderPlain } from './header/navigationHeader';
import GenerateFields from './GenerateFields';
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
import { clearRecipe } from '../store/generate/generateRecipeAction';
import FancySpinner from './FancySpinner';

function CreateRecipeForm({ navigation, saveButtonEditedRecipe }) {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState(initialCreateFormState);
  const [generateIngredients, generateInstructions, generateTitle, create] = [
    'generateIngredients',
    'generateInstructions',
    'generateTitle',
    'create',
  ];
  let [errors, setErrors] = useState([]);
  const [commitModal, setCommitModal] = useState({
    save: false,
    cancel: false,
  });
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const loading = useSelector((state) => state.generateRecipe.isLoading);
  const ingredients = useSelector((state) => state.generateRecipe.ingredients);
  const instructions = useSelector(
    (state) => state.generateRecipe.instructions
  );
  const title = useSelector((state) => state.generateRecipe.title);
  const [highlighted, setHighlighted] = useState({
    prep_time: false,
    cook_time: false,
    predict_text: false,
  });
  const [generateIngredientsCam, setGenerateIngredientsCam] = useState(false);
  const [generateInstructionsCam, setGenerateInstructionsCam] = useState(false);
  const [predictionText, setPredictionText] = useState('');
  const [generateRecipeText, setGenerateRecipeText] = useState('');

  useEffect(() => {
    ingredients &&
      setRecipe((oldRecipe) => ({
        ...oldRecipe,
        ingredients: ingredients,
      }));
  }, [ingredients]);

  useEffect(() => {
    instructions &&
      setRecipe((oldRecipe) => ({
        ...oldRecipe,
        instructions: instructions,
      }));
  }, [instructions]);

  useEffect(() => {
    title &&
      setRecipe((oldRecipe) => ({
        ...oldRecipe,
        title: title,
      }));
  }, [title]);

  useEffect(() => {
    dispatch(clearRecipe());
    setRecipe(initialCreateFormState);
  }, []);

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
    setRecipe((oldRecipe) => ({
      ...oldRecipe,
      ingredients: [...oldRecipe.ingredients, newIng],
    }));
  };

  const addInstruction = () => {
    setRecipe((oldRecipe) => ({
      ...oldRecipe,
      instructions: [...oldRecipe.instructions, ''],
    }));
  };

  const addNote = () => {
    setRecipe((oldRecipe) => ({
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
    return recipe.ingredients.map((ingredient, i) => (
      <Ingredient
        key={i}
        index={i}
        removeIng={removeIng}
        recipeIng={ingredient}
        recipe={recipe}
        setRecipe={setRecipe}
        parent={create}
      />
    ));
  };

  const addInstructions = () => {
    return recipe.instructions.map((instruction, i) => (
      <Instruction
        key={i}
        index={i}
        removeInstruction={removeInstruction}
        instruction={
          instruction.description ? instruction.description : instruction
        }
        setRecipe={setRecipe}
        parent={create}
      />
    ));
  };

  const addNotes = () => {
    return recipe.notes.map((note, i) => (
      <Notes
        key={i}
        index={i}
        removeNote={removeNote}
        note={note.description ? note.description : note}
        setRecipe={setRecipe}
        parent={create}
      />
    ));
  };

  if (isLoading || loading) {
    return <FancySpinner />;
  }

  return (
    <KeyboardAwareScrollView>
      <View>
        <ScrollView>
          <RecipeImage
            image={recipe.img}
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
                setIngredients={setGenerateIngredientsCam}
                setInstructions={setGenerateInstructionsCam}
                parent={
                  generateIngredientsCam
                    ? generateIngredients
                    : generateInstructionsCam
                    ? generateInstructions
                    : create
                }
              />
              <GenerateFields
                setGenerateIngredientsCam={setGenerateIngredientsCam}
                setGenerateInstructionsCam={setGenerateInstructionsCam}
                setImageModalVisible={setImageModalVisible}
                predictionText={predictionText}
                setPredictionText={setPredictionText}
                generateRecipeText={generateRecipeText}
                setGenerateRecipeText={setGenerateRecipeText}
                setRecipe={setRecipe}
              />
              <RecipeName
                recipe={recipe}
                setRecipe={setRecipe}
                missing={errors.includes('title')}
                parent={create}
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
                  recipeToRender={recipe}
                />
                <TimeInput
                  type="cook_time"
                  title="Cook Time"
                  errors={errors}
                  highlighted={highlighted}
                  setHighlighted={setHighlighted}
                  recipe={recipe}
                  setRecipe={setRecipe}
                  recipeToRender={recipe}
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
                    isSelected={recipe.tags.includes(course)}
                    setRecipe={setRecipe}
                    parent={create}
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
                <TouchableOpacity onPress={postRecipe}>
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
