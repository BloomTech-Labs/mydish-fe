import React, {useState, useEffect } from 'react';
import { Text, TextInput, View, Image, AsyncStorage, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/createRecipeStyles.js'

import RecipeName from './RecipeName';
import Ingredient from './Ingredient';
import Instruction from './Instruction';
import TagButton from './TagButton.js';
import Add from './Add';
import Notes from './Notes';
import RecipeFormContainer from './StyledComponents/RecipeFormContainer';
import Done from './StyledComponents/Done'
import DoneButton from './StyledComponents/DoneButton';
import Heading from './StyledComponents/Heading';
import TagGroup from './StyledComponents/TagGroup';


// import add from '../assets/add_circle_32px.png';;
import done from '../assets/done_button.png';
import axiosWithAuth from '../utils/axiosWithAuth.js'
import {toggleBackgroundColor,tagsIncluded,toggleDifficultyColor, difficultyTags} from '../utils/helperFunctions/tagFunctions'
import {validateFields} from '../utils/helperFunctions/vaildateFields';


function CreateRecipeForm(props) {
  // console.log('<CreateRecipeForm/> rendering');
  const initialFormState = {
    title: '',
    minutes: 0,
    notes: "",
    categories: [],
    ingredients: [],            
    //likes: "",
    steps: [], 
    ancestor: null
  }  

  const [recipe, setRecipe] = useState(initialFormState)
  const [check, setCheck] =useState(true);

  let [errors, setErrors] = useState([]);

  // const [ingList, setIngList] = useState([])
  let [ingCount, setIngCount] = useState(1)  
  let [stepCount, setStepCount] = useState(1);
  // let [steps, setSteps] = useState([0]);
  const [courses,] = useState(['Breakfast','Brunch','Lunch','Dinner','Dessert','Snack']);
  const [cuisines,] = useState(['American','Thai','Chinese','Italian','Mexican','Japanese','Middle-Eastern', 'Other']);
  const [diets,] = useState(['Alcohol-Free','Nut-free','Vegan','Gluten-Free','Vegetarian','Sugar-Free', 'Paleo']);
  const [difficulty,] = useState(['Easy','Intermediate','Difficult']); 
  const [visible, setVisible] = useState({active: false})
  const [color, setColor] = useState({active:[]})
  
     const postRecipe = async () => {
        
        console.log('recipe inside post of <CreateREcipeForm/> ', recipe);
        const errMessages = validateFields(recipe,courses);

        if (errMessages.length) {
          setErrors(errMessages);
          return;  //if any missing fields exists, do not submit the data and set the errors state variable array.
        }

        const axiosAuth = await axiosWithAuth();
        try {
          const res = await axiosAuth.post('https://recipeshare-development.herokuapp.com/recipes', recipe)
          console.log('response from post',res.data);
          recipeId = res.data.recipe_id;
          setRecipe(initialFormState)
          props.navigation.navigate('IndividualR', {paramsID: recipeId, status: props.status})
        } catch(err) {
          console.log('error from adding new recipe', err);
        }
    }

    const ingSubmit = async () => {
      console.log('<Ingredient/> Submit triggered');
      // setIngList(() => [...ingList, ingredient]);
      await setIngCount( oldCount => oldCount + 1);
    }

    const stepSubmit = async () => {
      await setStepCount(oldCount => oldCount + 1);
    }

  const addIngredients = () => {

    const IngredientComponents = [];

      for (let i=0; i<ingCount; i++) {
        IngredientComponents.push(<Ingredient key={i+1} index={i} recipe={recipe} setRecipe={setRecipe} 
          visible={visible} setVisible={setVisible} />);
      }
    return IngredientComponents;
  }

  const addInstructions = () => {
    // console.log('add instructions component generator triggered');
    const InstructionComponents = [];

    for (let i=0; i<stepCount; i++) {
      InstructionComponents.push(<Instruction key={i+1} index={i+1} recipe={recipe} count={stepCount} 
        setCount={setStepCount} setRecipe={setRecipe} />)
    }

    return InstructionComponents;
  }
        
  return (  
    <View style={visible.active ? styles.createRecipeActive : ''}>  
        
      <Done onPress = {postRecipe}>
        <Text style={styles.doneText}>Done</Text>
      </Done>
    
      <ScrollView>

          <RecipeFormContainer>
                <Heading>Create Recipe</Heading>
          
                <View >
                  {errors.map( (err,i) => <Text key={i} style={styles.errors}>{err}</Text>)}

                  <RecipeName recipe={recipe} setRecipe={setRecipe} />

                  <Heading>Total Cook Time (minutes)</Heading>
                  <TextInput style={styles.totalTimeContainer} placeholder='Time'
                    keyboardType={'numeric'} onChangeText={min => setRecipe({ ...recipe, minutes: min})}
                    value={recipe.minutes} 
                  />

                  <Heading>Course Type</Heading>
                  <TagGroup>
                  {courses.map((course,i) => <TagButton key={i} tag={course} recipe={recipe} setRecipe={setRecipe} 
                                                  color={color} setColor={setColor} 
                                                  toggleColor={toggleBackgroundColor} tagsIncluded={tagsIncluded}/>)} 
                  </TagGroup>


                  <Heading>Cuisine</Heading>
                  <TagGroup>
                    {cuisines.map((cuisine,i) => <TagButton key={i} tag={cuisine} 
                                                    recipe={recipe} setRecipe={setRecipe} 
                                                    color={color} setColor={setColor} 
                                                    toggleColor={toggleBackgroundColor} tagsIncluded={tagsIncluded}/>)}
                  </TagGroup>
                
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
  )
  
 }
 CreateRecipeForm.navigationOptions = {
  tabBarLabel: 'create new recipe'
}

export default CreateRecipeForm;

 
