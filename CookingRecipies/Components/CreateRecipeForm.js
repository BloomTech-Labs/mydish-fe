import React, { useState } from 'react';
import { Text, TextInput, View, Image, Button, Alert, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/createRecipeStyles.js'
import Ingredient from './Ingredient';
import CourseType from './CourseType';
import Cuisine from './Cuisine';
import Instruction from './Instruction';
import axios from 'axios';
import AxiosWithAuth from './AxiosWithAuth.js';



export default function CreateRecipeForm(props) {
  const initialFormState = {
    title: '',
    minutes: '',
    notes: "",
    categories: [],
    ingredients: ingList,            
    likes: "",
    steps: [], 
    ancestor: ""
  }  
  const [recipe, setRecipe] = useState(initialFormState)
  
  const [ingList, setIngList] = useState([])
  let [count, setCount] = useState(0)  //count is for the # of <Ingredient/>'s to render
  let [stepCount, setStepCount] = useState(0);
  const [courses,] = useState(['Breakfast','Brunch','Lunch','Dinner','Dessert','Snack']);
  const [cuisines,] = useState(['American','Italian','Thai','Chinese','Mexican','Japanese']);
  

  const addIngredients = () => {
    console.log('addIngredients triggered');
    const IngredientComponents = [];

      if (!count) {  //if no added ingredients, render only a single ingredient
        IngredientComponents.push(<Ingredient ingList={ingList} setIngList={setIngList} setCount={setCount} count={count}/>);
      } else {
        for (let i=0; i<count; i++) {
          IngredientComponents.push(<Ingredient ingList={ingList} setIngList={setIngList} setCount={setCount} count={count}/>);
        }
      }
    return IngredientComponents;
  }

  const addInstructions = () => {
    console.log('add instructions component generator triggered');
    const InstructionComponents = [];

    if (!stepCount) {
      InstructionComponents.push(<Instruction recipe={recipe} count={stepCount} setCount={setStepCount} setRecipe={setRecipe} />)
    } else {
      for (let i=0; i<stepCount; i++) {
        InstructionComponents.push(<Instruction recipe={recipe} count={stepCount} setCount={setStepCount} setRecipe={setRecipe} />)
      }
    }
    console.log(InstructionComponents);
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

  const postRecipe = () => {
      alert('Submitted')
      console.log('==========submitted======');
     AxiosWithAuth();
  }
        
  return (                                                   
    <ScrollView>
      <View style={{ padding: 1, paddingTop: 40 }}>
        <Text style={styles.header}>Create Recipe</Text>

        {/* ====== Image with Recipe Name and Creator ========= */}

        <View style={{ flexDirection: "row", padding: 15 }}>

          <Image
            style={{ width: 150, height: 150, }}
            // resizeMode='contain'
            source={{ uri: 'https://visualpharm.com/assets/654/Add%20Camera-595b40b85ba036ed117dbeab.svg' }}
          />

          <View style={{ marginLeft: 15 }}>
            {/* <Text style={styles.titleText}>Honey Pancakes</Text> */}
            <TextInput
              style={styles.titleText}
              placeholder="Recipe Name"
              onChangeText={event => setRecipe({ ...recipe, title: event })}
              value={recipe.title}
            />

            <Text style={styles.baseText}>Recipe by: Lana Smith</Text>

          </View>

        </View>


        {/* ========= Inputs ========== */}

        <View style={{ alignSelf: 'center', width: 350 }}>

          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Recipe Name</Text>

          <TextInput
            style={styles.container}
            multiline={true}
            numberOfLines={5}
            maxLength={55}
            placeholder='Placeholder for Recipe Name'
            onChangeText={event => setRecipe({ ...recipe, title: event })}
            value={recipe.title} />

          <Text style={{ alignSelf: 'flex-end' }}>
            {recipe.title.length}/55
          </Text>

          <View style={{ flexDirection: "row", padding: 15, justifyContent: 'space-between' }}>

    
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Total Time</Text>

            <TextInput
              style={styles.container}
              multiline={true}
              numberOfLines={5}
              maxLength={55}
              placeholder='Placeholder for Total Time'
              onChangeText={event => setRecipe({ ...recipe, minutes: event })}
              value={recipe.minutes} 
            />
          </View>

         {/* ********************<CourseTypes/>*************** */}
          <Text style={{ marginTop: 15, fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Course Type</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {courses.map(course => <CourseType course={course} recipe={recipe} setRecipe={setRecipe} color={color} setColor={setColor} switchColor={toggleBackgroundColor} tagsIncluded={tagsIncluded}/>)}
          </View>

          {/* ********************<Cuisines/>*************** */}
          <Text style={{ marginTop: 15, fontSize: 20, fontWeight: 'bold', marginBottom: 20  }}>Cuisine</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {cuisines.map(cuis => <Cuisine cuisine={cuis} recipe={recipe} setRecipe={setRecipe} color={color} setColor={setColor} switchColor={toggleBackgroundColor} tagsIncluded={tagsIncluded}/>)}
          </View>

          {/* ============= Total Time and Servings View =============== */}
   
          {/* =============== Ingredients ===================== */}

          <Text style={{ fontWeight: 'bold', fontSize: 20 }} >Ingredients</Text>

          {/* ========= Add Ingredients View ============== */}

          <View style={{ flexDirection: "row", padding: 15 }} >
            {/* <Icon name='add' reverse={true}></Icon> */}
            <View>
                  {addIngredients()}
            </View>
          </View>

          <View style={{ flexDirection: "row", padding: 15 }} >
            {/* <Icon name='add' reverse={true}></Icon> */}
            <View>
                  {addInstructions()}
            </View>
          </View>
          {/* ======= Instructions Input View ====== */}

                  {/* ======= Instructions Input View ====== */}

          <View style={{ flexDirection: "row", padding: 15 }} >
          {/* <Icon body='add' reverse={true}></Icon> */}
          </View>

          <Button title='Submit Recipe' onPress ={postRecipe}/>

        </View>
      </View>
    </ScrollView>
  )
 }
