import React, { useState } from 'react';
import { Text, TextInput, View, Image, StyleSheet, Button, Alert, ScrollView, TouchableOpacity } from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';
import ToggleSwitch from 'toggle-switch-react-native';

import styles from '../styles/createRecipeStyles.js'

import AddIngredientsForm from './CreateRecipe/AddIngredientsForm.js'
import AddInstructionsForm from './CreateRecipe/AddInstructionsForm.js'
import Ingredient from './Ingredient';


export default function CreateRecipeForm(props) {
<<<<<<< HEAD
  
=======

>>>>>>> 60d1558a6369962e1f65c6d3125ebe326148ace2
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
  // console.log('recipe from create recipe form', recipe)
  
  const [state, setState] = useState({
    textInput : []
  })
<<<<<<< HEAD
  const [ing, setIng] = useState({
    name: "",
    quantity: "",
    unit: "" 
  })
  const [array, setArray] = useState([{...ing}])
 

  const testSubmit = event => {
    console.log('1',ing)
    // setArray(array.concat({ing}))
    setArray([...array, { ...ing }]);
    console.log('2', ing)
  }
//   const addCat = () => {
//     setCatState([...catState, { ...blankCat }]);
// };
  
  const handleIngredientChange = event => {
    const updateIngredients = [...ing]
    updateIngredients[event.target.dataset.idx][event.target.className] = event.target.value
    setArray(updateIngredients);
  }
=======
  
  const [ingList, setIngList] = useState([])

  let [ingredientCount, setIngredientCount] = React.useState(1)

  // const [ing, setIng] = useState({
  //   name: "",
  //   quantity: "",
  //   unit: "" 
  // })



  // const testSubmit = () => {
  //   console.log('1',ing)
  //   setArray(array.concat({ing}))
  //   console.log('2', ing)
  // }
>>>>>>> 60d1558a6369962e1f65c6d3125ebe326148ace2

//   const handleCatChange = (e) => {
//     const updatedCats = [...catState];
//     updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
//     setCatState(updatedCats);
// };


// const handleIngredientNameChange = idx => evt => {
//   const newIngredient = recipe.ingredients.map((ing, sidx) => {
//     if (idx !== sidx) return ;
//     return { ...ing, name: evt.target.value };
//   });

<<<<<<< HEAD

console.log('array', array)
=======
// console.log('array', array)

// const setIngredients = (newIng) => {
//   console.log('ingredients to change', newIng);
//   console.log('ing in state', ing);
>>>>>>> 60d1558a6369962e1f65c6d3125ebe326148ace2

//   // console.log('updated ingredient in state', ing, quantity);
// }


// const  addTextInput = (key) => {
//   let textInput = state.textInput;
  
//   textInput.push( <View key={key} style={{ flexDirection: "row", flexWrap: "wrap" }}>
    

//   <TextInput
//     style={{ height: 40, width: 75 }}
//     placeholder="Amount"
//     onChangeText={event => setIngredients('test') }
//     value={ing.quantity}
//   />

//   <TextInput
//     style={{ height: 40, width: 75 }}
//     placeholder="Unit"
//     onChangeText ={event => setIng({...ing, unit: event})}
//     value={ing.unit}
//     />

//   <TextInput
//     style={{ height: 40, width: 250, marginLeft: 15, backgroundColor: 'lightgray', padding: 10 }}
//     placeholder="Ingredient"
//     onChangeText ={event => setIng({...ing, name: event})}
//     value={ing.name}
//     />

//     <Button
//     title="+"
//     onPress={testSubmit} 
//     />

// </View >);
//   setState({ textInput })
//   // testSubmit()
// }

// onSubmit = event => {event.preventDefault()
  //   if(!recipe.name || !recipe.minutes) return
  //    props.addRecipe(recipe) 
  //    setRecipe(initialFormState)
  //    console.log('==========Submitted==========')
  // }


  // useEffect(() => {

  //   const handleInputChange = e => {
  //     const { name, value } = e.target;
  //     setRecipe({ ...recipe, [name]: value })
  //   }

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     if(!recipe.name || null) return
  //     props.addRecipe(recipe)
  //     setRecipe(initialFormState)
  //   }

  //   const sendRecipe = () => {
  //       axios({
  //           url: 'https://recipeshare-development.herokuapp.com/recipe',
  //           method: 'post',
  //           headers: 
  //           { Authorization: AsyncStorage.getItem('token')
  //       },
  //       data:{
  //           title: recipe.title,
  //           minutes: {
  //             prepTime: recipe.prepTime, 
  //             cookTime: recipe.cookTime,
  //             totalTime: recipe.totalTime,
  //           },
  //           notes: recipe.notes,
  //           categories: [
  //             recipe.categories
  //           ],
  //           ingredients: {
  //             name: recipe.name,
  //             quantity: recipe.quantity,
  //             unit: recipe.unit
  //           },
  //           likes: recipe.likes,
  //           steps: [
  //             {
  //               ordinal: 1,
  //               body: recipe.body
  //             },
  //           ],
  //           ancestor: recipe.ancestor
  //         }
  //         .then((res) => {
  //             setRecipe([res, ...recipe])
  //         })
  //         .catch((err) => {
  //             console.log(err)
  //         })

  //       })
  //   sendRecipe();
    
  // }
  // setRecipe({initialFormState})

  const addIngredients = () => {
    console.log('addIngredients triggered');
    console.log(ingredientCount, 'count');


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
              value={recipe.minutes} />


          </View>


          <Text style={{ marginTop: 15, fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Course Type</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
           <TouchableOpacity style={styles.tagButtons} onPress = {() => setRecipe({...recipe, categories: [...recipe.categories, "Breakfast"]})}>
            <Text>Breakfast</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tagButtons} onPress = {() => setRecipe({...recipe, categories: [...recipe.categories, "Brunch"]})}>
            <Text>Brunch</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tagButtons} onPress = {() => setRecipe({...recipe, categories: [...recipe.categories, "Lunch"]})}>
            <Text>Lunch</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tagButtons} onPress = {() => setRecipe({...recipe, categories: [...recipe.categories, "Dinner"]})}>
            <Text>Dinner</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tagButtons} onPress = {() => setRecipe({...recipe, categories: [...recipe.categories, "Dessert"]})}>
            <Text>Dessert</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tagButtons} onPress = {() => setRecipe({...recipe, categories: [...recipe.categories, "Snack"]})}>
            <Text>Snack</Text>
          </TouchableOpacity>
          </View>
          {/* =========== Cuisine Input ======================== */}

          <Text style={{ marginTop: 15, fontSize: 20, fontWeight: 'bold', marginBottom: 20  }}>Cuisine</Text>
       
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
           <TouchableOpacity style={styles.tagButtons} onPress={() => setRecipe({...recipe, categories: [...recipe.categories, "American"]})}>
            <Text>American</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tagButtons} onPress={() => setRecipe({...recipe, categories: [...recipe.categories, "Italian"]})}>
            <Text>Italian</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tagButtons} onPress ={() => setRecipe({...recipe, categories: [...recipe.categories, "Thai"]})}>
            <Text>Thai</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tagButtons} onPress = {() => setRecipe({...recipe, categories: [...recipe.categories, "Chinese"]})}>
            <Text>Chinese</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tagButtons} onPress = {() => setRecipe({...recipe, categories: [...recipe.categories, "Mexican"]})}>
            <Text>Mexican</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tagButtons} onPress = {() => setRecipe({...recipe, categories: [...recipe.categories, "Japanese"]})}>
            <Text>Japanese</Text>
          </TouchableOpacity>
          </View>
          {/* ============= Total Time and Servings View =============== */}

          {/* <View style={{ flexDirection: "row", padding: 15, justifyContent: 'space-between' }}>

    
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Total Time</Text>
            
              <TextInput
                style={styles.container}
                multiline={true}
                numberOfLines={5}
                maxLength={55}
                placeholder='Placeholder for Total Time'
                onChangeText={event => setRecipe({ ...recipe, minutes: event })}
                value={recipe.minutes} />


          </View> */}
   
          {/* =============== Ingredients ===================== */}

          <Text style={{ fontWeight: 'bold', fontSize: 20 }} >Ingredients</Text>


          {/* ========= Add Ingredients View ============== */}

          <View style={{ flexDirection: "row", padding: 15 }} >

            {/* <Icon name='add' reverse={true}></Icon> */}
            <View>
            <Button title='Add Ingredients'  color="black"
              backgroundColor='' onPress={() => addTextInput(state.textInput.length)} />
<<<<<<< HEAD
            {state.textInput.map((value, idx) => {
=======
            {/* {state.textInput.map((value, index) => {
>>>>>>> 60d1558a6369962e1f65c6d3125ebe326148ace2
              return value
            })} */}

              <Ingredient ingList={ingList} setIngList={setIngList} setCount={setIngredientCount} count={ingredientCount}/>
              {addIngredients()}
    
            </View>
          </View>

          

          {/* ======= Instructions Input View ====== */}

                  {/* ======= Instructions Input View ====== */}

                  <View style={{ flexDirection: "row", padding: 15, }}>

          {/* ==== Instructions === */}

          <TextInput
          
            style={{ height: 40, width: 250, marginLeft: 15, backgroundColor: 'lightgray', padding: 10 }}
            placeholder=" Add Instructions"
            onChangeText ={event => setRecipe({...recipe, steps: [...recipe.steps, event]})}
            value={recipe.body}
          />

          </View >

          {/* ========= Add Instructions View ============== */}

          <View style={{ flexDirection: "row", padding: 15 }} >

          {/* <Icon body='add' reverse={true}></Icon> */}


          <Button
            title="Add Instructions"
            color="black"
            backgroundColor=''
            onPress={() => Alert.alert('Really Random Alert')}
          />
          </View>
              
          <Button title='Submit Recipe' onPress ={() => {
              alert('Submitted'), console.log('==========submitted======')
          }}/>

        </View>
        {/* ^^^ Testing ===Inputs=== */}
      </View>

    </ScrollView>
  )
 }


