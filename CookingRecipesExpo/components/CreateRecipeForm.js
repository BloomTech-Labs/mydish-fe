import React, {useState } from 'react';
import { Text, TextInput, View, Image, AsyncStorage, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/createRecipeStyles.js'
import Ingredient from './Ingredient';
import Instruction from './Instruction';
import TagButtons from './tagButtons.js';
import add from '../assets/add_circle_32px.png';;
import axios from 'axios';
import done from '../assets/done_button.png';
import axiosWithAuth from '../utils/axiosWithAuth.js'

export default function CreateRecipeForm(props) {
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
  
  const [ingList, setIngList] = useState([])
  let [ingCount, setIngCount] = useState(1)  //count is for the # of <Ingredient/>'s to render
  let [stepCount, setStepCount] = useState(1);
  let [steps, setSteps] = useState([0]);
  const [courses,] = useState(['Breakfast','Brunch','Lunch','Dinner','Dessert','Snack']);
  const [cuisines,] = useState(['American','Thai','Chinese','Italian','Mexican','Japanese']);
  const [diet,] = useState(['Meatless','Nut-free','Vegan','Gluten-Free','Vegetarian','Sugar-Free']);
  const [difficulty,] = useState(['Easy','Intermediate','Difficult']);
  const [visible, setVisible] = useState({active: false})

  const addIngredients = () => {
    // console.log('addIngredients triggered');
    const IngredientComponents = [];
    // console.log('count in <CreateRecipeForm/>', ingCount);

      if (!ingCount) {  //if no added ingredients, render only a single ingredient
        IngredientComponents.push(<Ingredient key={0} index={0} recipe={recipe} setRecipe={setRecipe} visible={visible} setVisible={setVisible} />);
      } else {
        for (let i=0; i<ingCount; i++) {
          IngredientComponents.push(<Ingredient key={i+1} index={i} recipe={recipe} setRecipe={setRecipe} visible={visible} setVisible={setVisible} />);
        }
      }
    return IngredientComponents;
  }

  const addInstructions = () => {
    // console.log('add instructions component generator triggered');
    const InstructionComponents = [];

    if (!stepCount) {
      InstructionComponents.push(<Instruction key={0} index={0} recipe={recipe} count={stepCount} setCount={setStepCount} setRecipe={setRecipe} />)
    } else {
      for (let i=0; i<stepCount; i++) {
        InstructionComponents.push(<Instruction key={i+1} index={i+1} recipe={recipe} count={stepCount} setCount={setStepCount} setRecipe={setRecipe} />)
      }
    }
    // console.log(InstructionComponents);
    return InstructionComponents;
  }
  
  const [color, setColor] = useState({active:[]})
     
  function toggleBackgroundColor(category){
      const index= color.active.indexOf(category)
      const newActive= index !== -1 ?  color.active.filter(activeCategory => activeCategory !== category) : color.active.concat(category)
      setColor({active: newActive})
    }

  function tagsIncluded(tag) {
        //const check = recipe.categories.includes(tag) 
         const index= recipe.categories.indexOf(tag)
         const newTags= index !== -1 ?  recipe.categories.filter(activeTag => activeTag !== tag) : recipe.categories.concat(tag)
         setRecipe({...recipe, categories: newTags})
        }
        
 function toggleDifficultyColor(category){
  let newCategory = color.active;
  if(category === "Easy"){
    newCategory = color.active.filter(activeCat => activeCat !== 'Intermediate').filter(activeCat => activeCat !== 'Difficult').concat(category)
   }
   else if(category === "Intermediate"){
    newCategory = color.active.filter(activeCat => activeCat !== 'Easy').filter(activeCat => activeCat !== 'Difficult').concat(category)
   }
   else if(category === "Difficult"){
    newCategory = color.active.filter(activeCat => activeCat !== 'Easy').filter(activeCat=> activeCat !== 'Intermediate').concat(category)
   }
    setColor({active: newCategory})
        }
  
  const difficultyTags = (tag) => {
    let newTags = recipe.categories;
    if(tag === "Easy"){
      newTags = recipe.categories.filter(activeTag => activeTag !== 'Intermediate').filter(activeTag => activeTag !== 'Difficult').concat(tag)
     }
     else if(tag === "Intermediate"){
      newTags = recipe.categories.filter(activeTag => activeTag !== 'Easy').filter(activeTag => activeTag !== 'Difficult').concat(tag)
     }
     else if(tag === "Difficult"){
      newTags = recipe.categories.filter(activeTag => activeTag !== 'Easy').filter(activeTag => activeTag !== 'Intermediate').concat(tag)
     }
          setRecipe({...recipe, categories: newTags})
         }

        // console.log('categories', recipe.categories)
        
        const handleSubmit = async () => {
          console.log('<Ingredient/> handleSubmit triggered');
          // setIngList(() => [...ingList, ingredient]);
          await setIngCount( oldCount => oldCount + 1);
          console.log('count in <Ingredient/>', count);
      }
      const handleInstructionSubmit = async () => {
        await setStepCount(oldCount => oldCount + 1);
    }

    let recipeId;

  const postRecipe = async () => {
     
      console.log('recipe inside submit of <CreateREcipeForm/> ', recipe);

      const axiosAuth = await axiosWithAuth();
    // if(recipe.categories.includes()){}
      try {
        const res = await axiosAuth.post('https://recipeshare-development.herokuapp.com/recipes', recipe)
        console.log('response from post',res.data);
        recipeId = res.data.recipe_id
      } catch(err) {
        console.log('error from adding new recipe', err);
      }


      props.navigation.navigate('IndividualR', {paramsID: recipeId, status: props.status})
      setRecipe(initialFormState)
  }

  
        
  return (  
    <View style={visible.active ? {backgroundColor: 'white', opacity: .4}: ''}>  

          <TouchableOpacity onPress = {postRecipe} style = {{position: 'relative', alignSelf: 'flex-end',  fontSize: 14, paddingRight: 35, backgroundColor: 'white'}}>
            <Text style={{color: '#3BA405'}}>Done</Text>
          </TouchableOpacity>

    <ScrollView>
      <View style={styles.crForm}>

           
        <View style={{ flexDirection: "column", padding: 15, alignItems: 'center', marginTop: 20 }}>

    
          <Text style = {styles.titleText}> Create Recipe </Text>

          <View style={{ marginLeft: 15 }}>

          </View>

        </View>


        {/* ========= Inputs ========== */}

        <View >

          <Text style={styles.textInputStyles}>Recipe Name</Text>

          <TextInput
            style={styles.totalTimeContainer}
            maxLength={55}
            placeholder='Enter Recipe Name'
            onChangeText={event => setRecipe({ ...recipe, title: event })}
            value={recipe.title} />

          <Text style={{ alignSelf: 'flex-end', color: "#363838", fontSize: 11, marginTop: 4, marginRight: 14}}>
            {recipe.title.length}/55
          </Text>

          <View style={{ flexDirection: "column", justifyContent: 'space-between' }}>

    
          <Text style={styles.textInputStyles}>Total Cook Time (minutes)</Text>

            <TextInput
              style={styles.totalTimeContainer}
              placeholder='Cook Time (minutes only)'
              keyboardType={'numeric'}
              onChangeText={min => setRecipe({ ...recipe, minutes: min})}
              value={recipe.minutes} 
            />

          </View>

         {/* ********************<CourseTypes/>*************** */}
          <Text style={{ marginTop: 16, fontSize: 16, color: "#363838", marginBottom: 16, marginLeft: 14 }}>Course Type</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginLeft: 5, alignItems:'stretch'
        }}>
            {courses.map(tag => <TagButtons key={tag} tag={tag} recipe={recipe} setRecipe={setRecipe} color={color} setColor={setColor} switchColor={toggleBackgroundColor} tagsIncluded={tagsIncluded}/>)}
          </View>

          {/* ********************<Cuisines/>*************** */}
          <Text style={{ marginTop: 15, fontSize: 16, color: '#363838', marginBottom: 16, marginLeft: 14  }}>Cuisine</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginLeft: 5}}>
            {cuisines.map(tag => <TagButtons key={tag} tag={tag} recipe={recipe} setRecipe={setRecipe} color={color} setColor={setColor} switchColor={toggleBackgroundColor} tagsIncluded={tagsIncluded}/>)}
          </View>

          <Text style={{ marginTop: 15, fontSize: 16, color: '#363838', marginBottom: 16, marginLeft: 14  }}>Diet</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginLeft: 5}}>
            {diet.map(tag => <TagButtons key={tag} tag={tag} recipe={recipe} setRecipe={setRecipe} color={color} setColor={setColor} switchColor={toggleBackgroundColor} tagsIncluded={tagsIncluded}/>)}
          </View>

          <Text style={{ marginTop: 15, fontSize: 16, color: '#363838', marginBottom: 16, marginLeft: 14  }}>Difficulty</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginLeft: 5}}>
            {difficulty.map(tag => <TagButtons key={tag} tag={tag} recipe={recipe} setRecipe={setRecipe} color={color} setColor={setColor} switchColor={toggleDifficultyColor} tagsIncluded={difficultyTags}/>)}
          </View>

          {/* ============= Total Time and Servings View =============== */}
   
          {/* =============== Ingredients ===================== */}

          <Text style={{ fontSize: 16, color: '#363838', marginTop: 25, marginLeft: 14, marginBottom: 20 }} >Ingredients</Text>

          {/* ========= Add Ingredients View ============== */}

                 {addIngredients()}

          <View style={{ flexDirection: "row", marginTop: 20}} >
            {/* <Icon name='add' reverse={true}></Icon> */}

                  <TouchableOpacity onPress={handleSubmit} style = {{flexDirection: 'row'}} >
                
                <Image source={add} style={{width: 20, height: 20, marginLeft: 14}}/> 
                
                <Text style = {{color : 'green', fontSize: 16, marginLeft: 5}}>
                    Add Ingredients
                </Text>
               
            </TouchableOpacity> 

          </View>

          <Text style={{fontSize: 16, color: '#363838', marginTop: 25, marginLeft: 14 , marginBottom: 10 }} >Instructions</Text>


              {addInstructions()}
          <View style={{ flexDirection: "row", marginTop: 20}} >


              <TouchableOpacity onPress={handleInstructionSubmit} style = {{flexDirection: 'row'}} >
                
                <Image source={add} style={{width: 20, height: 20, marginLeft: 14}}/> 
                
                <Text style = {{color : 'green', fontSize: 16, marginLeft: 5}}>
                    Add A Step
                </Text>
               
              </TouchableOpacity> 

          </View>

        <View>

            <Text style={{fontSize: 16, color: '#363838', marginTop: 25, marginLeft: 14, marginBottom: 8  }}>Notes: </Text>

            <TextInput
              style={styles.notesContainer}
              placeholder=''
              multiline={true}
              onChangeText={event => setRecipe({ ...recipe, notes: event })}
              value={recipe.notes} 
            />

        </View>

        <TouchableOpacity onPress = {postRecipe} style = {{alignItems: "flex-end", marginTop: 30}}>
            <Image source={done} style = {{width: 136, height: 40, marginBottom: 20, marginRight: 14}}/> 
          </TouchableOpacity>

{/* 
          <Button title='Submit Recipe' onPress ={postRecipe}/> */}

        </View>
      </View>
    </ScrollView>
  </View>   
  )
  
 }
 CreateRecipeForm.navigationOptions = {
  tabBarLabel: 'create new recipe'
}

 