import React, {useState, useEffect } from 'react';
import { Text, TextInput, View, Image,ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import {Header} from 'react-navigation-stack'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../styles/createRecipeStyles.js'

import RecipeName from './RecipeName';
import EditIngredient from './EditIngredient';
import EditInstruction from './EditInstruction';
import TagButton from './TagButton.js';
import Add from './Add';
import Notes from './Notes';
import RecipeFormContainer from './StyledComponents/RecipeFormContainer';
import Done from './StyledComponents/Done'
import DoneButton from './StyledComponents/DoneButton';
import Heading from './StyledComponents/Heading';
import TagGroup from './StyledComponents/TagGroup';


import done from '../assets/done_button.png';
import axiosWithAuth from '../utils/axiosWithAuth.js'
import {toggleBackgroundColor,tagsIncluded,toggleDifficultyColor, difficultyTags} from '../utils/helperFunctions/tagFunctions'
import {validateFields} from '../utils/helperFunctions/vaildateFields';


function EditForm(props) {
  const recipeToEdit =  props.navigation.getParam('recipe', ' recipe params not passed')
 

  const initialFormState = {title: '', minutes: '', notes: '', 
  categories: [], ingredients: [], steps: []};  

  
  // const recipeToEdit =  props.navigation.getParam('recipe', ' recipe params not passed')
  const [recipe, setRecipe] = useState(recipeToEdit)
  let [errors, setErrors] = useState([]);
  let [ingCount, setIngCount] = useState(recipeToEdit.ingredients.length)  
  let [stepCount, setStepCount] = useState(recipeToEdit.steps.length);
  const [diets,] = useState(['Alcohol-Free','Nut-free','Vegan','Gluten-Free','Vegetarian','Sugar-Free', 'Paleo']);
  const [difficulty,] = useState(['Easy','Intermediate','Difficult']);
  const [courses,] = useState(['Breakfast','Brunch','Lunch','Dinner','Dessert','Snack']); 
  const [cuisines,] = useState(['American','Thai','Chinese','Italian','Mexican','Japanese','Middle-Eastern', 'Other']);
  const [visible, setVisible] = useState({active: false})
  const [color, setColor] = useState({active: recipeToEdit.categories})

  const postRecipe = async () => {
        
        // console.log('recipeToEdit.id: ', recipeToEdit.id);
        
        
        
        const instructions = recipe.steps.map(step => step.body);
        recipe.steps = instructions;
        recipe.ancestor = recipeToEdit.id;

        delete recipe.id;
        console.log('posting recipe in <EditForm>: ', recipe);
        // console.log('recipe in post', recipe);
        // return;
        const errMessages = validateFields(recipe,courses, edit=true);
        console.log('errMessages', errMessages);

        if (errMessages.length) {
          setErrors(errMessages);
          return;  //if any missing fields exists, do not submit the data and set the errors state variable array.
        }

        const axiosAuth = await axiosWithAuth();
        try {
          const res = await axiosAuth.post('https://recipeshare-development.herokuapp.com/recipes', recipe)
          console.log('response from post recipe',res.data);
          recipeID = res.data.recipe_id;
          console.log('recipeID in <EditForm> after successful post', recipeID);
          setRecipe(initialFormState);
          props.navigation.navigate('IndividualR', {recipe, recipeID})
        } catch(err) {
          console.log('error from adding new recipe', err);
        }
    }

    const ingSubmit = () => {
      console.log('<Ingredient/> Submit triggered');

      setIngCount(ingCount + 1);
      setRecipe({...recipe, ingredients: [...recipe.ingredients, {name: '', unit: '', quantity: ''}]})
    }

    const stepSubmit = () => {
      console.log('step submit triggered', stepSubmit);
      setStepCount(oldCount => oldCount + 1);
      setRecipe({...recipe, steps: [...recipe.steps, {body: ''}]});
    }

    function ingDelete (ind) {
        console.log('<Ingredient/> Delete triggered');
        // setIngList(() => [...ingList, ingredient]);
        setIngCount(ingCount - 1);
        //console.log('before filter ingredient', recipe.ingredients)
        let filtered = recipe.ingredients.filter((ing, index) => index !== ind)
        //console.log('after filtered ingredients', filtered)
        setRecipe({...recipe, ingredients: filtered})
      }

      const stepDelete = (ind) => {
        console.log('step delete triggered', stepSubmit);
        setStepCount(oldCount => oldCount - 1);
        let filteredSteps = recipe.steps.filter((step, index) => index !== ind)
        setRecipe({...recipe, steps: filteredSteps});
      }
  

  function addIngredients() {
    
    const IngredientComponents = [];
    
      for (let i=0; i<ingCount; i++) {
          //console.log(`inside for loop recipe.ingredients[${i}]`, recipe.ingredients[i])
        IngredientComponents.push(<EditIngredient key={i+1} index={i} ingredient={recipe.ingredients[i]} recipe={recipe} setRecipe={setRecipe} 
          visible={visible} setVisible={setVisible} ingDelete={ingDelete}/>);
      }
    return IngredientComponents;
  }

  const addInstructions = () => {
    // console.log('add instructions component generator triggered');
    const InstructionComponents = [];
    // step={stepsArray[i]}
    for (let i=0; i<stepCount; i++) {
      InstructionComponents.push(<EditInstruction key={i+1} index={i} recipe={recipe} step={recipe.steps[i]} count={stepCount} 
        setCount={setStepCount} setRecipe={setRecipe} stepDelete={stepDelete}/>)
    }

    return InstructionComponents;
  }
        
  return (  
     <KeyboardAwareScrollView >
        <View style={visible.active ? styles.createRecipeActive : ''}>  
            
          <Done onPress = {postRecipe}>
            <Text style={styles.doneText}>Done</Text>
          </Done>
        
          <ScrollView>

          <RecipeFormContainer>
                <Heading>Edit Recipe</Heading>
          
                <View>
                  {errors.map( (err,i) => <Text key={i} style={styles.errors}>{err}</Text>)}

                  <RecipeName recipe={recipe} setRecipe={setRecipe} />

                  <Heading>Total Cook Time (minutes)</Heading>
                  <TextInput style={styles.totalTimeContainer} placeholder='Time'
                    keyboardType={'numeric'} onChangeText={min => setRecipe({ ...recipe, minutes: min})}
                    value={`${recipe.minutes}`} 
                  />
                
                  <Heading>Diet</Heading>
                  <TagGroup>
                    {diets.map((diet,i)=> <TagButton key={i} tag={diet} 
                                                recipe={recipe} setRecipe={setRecipe} color={color} 
                                                setColor={setColor} toggleColor={toggleBackgroundColor} 
                                                tagsIncluded={tagsIncluded}/>)}
                  </TagGroup>

                  <Heading>Difficulty</Heading>
                    <TagGroup>
                      {difficulty.map((dif,i) => <TagButton key={i} tag={dif} recipe={recipe} 
                                                        setRecipe={setRecipe} color={color} setColor={setColor} 
                                                        toggleColor={toggleDifficultyColor} 
                                                        tagsIncluded={difficultyTags}/>)}
                    </TagGroup>

                    
                    <Heading>Ingredients</Heading>
                      {addIngredients()}
                      <Add text="Add Ingredient" submit={ingSubmit} />

                    <Heading>Instructions</Heading>
                      {addInstructions()}
                      <Add text="Add A Step" submit={stepSubmit} />

                    <Notes recipe={recipe} setRecipe={setRecipe} />

                    <DoneButton onPress = {postRecipe}>
                        <Image source={done} style={styles.doneCreateBtn} /> 
                    </DoneButton>

                    {errors.map((err,i) => <Text key={i} style={styles.errors}>{err}</Text>)}
                </View>
            </RecipeFormContainer>
        </ScrollView>
      </View>   
 </KeyboardAwareScrollView>
  )
  
 }
//  .navigationOptions = {
//   tabBarLabel: 'create new recipe'
// }

export default EditForm;