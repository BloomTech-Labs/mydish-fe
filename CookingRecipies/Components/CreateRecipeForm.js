import React, { useState } from 'react';
import { Text, TextInput, View, Image, StyleSheet, Button, Alert, ScrollView, TouchableOpacity } from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';
import ToggleSwitch from 'toggle-switch-react-native';

import AddIngredientsForm from './CreateRecipe/AddIngredientsForm.js'
import AddInstructionsForm from './CreateRecipe/AddInstructionsForm.js'

export default function CreateRecipeForm(props) {

  const initialFormState = {
    title: '',
    minutes: '',
    notes: "",
    categories: [],
    ingredients: {
      name: "",
      quantity: "",
      unit: ""
    },            
    likes: "",
    steps: [
          ], 
    ancestor: ""
  }  

  const [recipe, setRecipe] = useState(initialFormState)
  console.log('recipe from create recipe form', recipe)
 

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

          {/* ======== Course Type Dropdown ================== */}

          {/* <ModalDropdown
            options={['Breakfast', 'Brunch', 'Gluten-Free', 'Vegan', 'Vegetarian', 'Keto']}
            defaultValue={'Course Type'}
            //  showsVerticalScrollIndicator = {true}
            textStyle={styles.dropdownText}
            dropdownStyle={styles.dropdownText}
          /> */}
          {/* <TouchableOpacity onPress={}>
            <Text>Breakfast</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text>Brunch</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text>Dinner</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text>Snack</Text>
          </TouchableOpacity> */}

          {/* =========== Cuisine Input ======================== */}

          <Text style={{ marginTop: 15, fontSize: 20, fontWeight: 'bold' }}>Cuisine</Text>
          {/* <TextInput
            style={styles.container}
            placeholder="Just a placeholder for Cuisine"
            onChangeText={event => setRecipe({ ...recipe, categories:  [].push(event)})}
            value={recipe.categories}
          /> */}
           <TouchableOpacity onPress={() => setRecipe({...recipe, categories: [...recipe.categories, "American"]})}>
            <Text>American</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setRecipe({...recipe, categories: [...recipe.categories, "Italian"]})}>
            <Text>Italian</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress ={() => setRecipe({...recipe, categories: [...recipe.categories, "Thai"]})}>
            <Text>Thai</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => setRecipe({...recipe, categories: [...recipe.categories, "Chinese"]})}>
            <Text>Chinese</Text>
          </TouchableOpacity>

          {/* ============= Total Time and Servings View =============== */}

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
   
          {/* =============== Ingredients ===================== */}

          <Text style={{ fontWeight: 'bold', fontSize: 20 }} >Ingredients</Text>

          {/* <IngredientsList/>  */}
          {/* <AddIngredientsForm/> */}

          <View style={{ flexDirection: "row", padding: 15, }}>


            {/* ==== Amount === */}

            <TextInput
              style={{ height: 40, width: 75 }}
              placeholder="Amount"
              onChangeText={event => setRecipe({ ...recipe, ingredients: {...recipe.ingredients, quantity: event }})}
              //value={recipe.ingredient.quantity}
            />


            {/* ==== Unit === */}

            <TextInput
              style={{ height: 40, width: 75 }}
              placeholder="Unit"
              onChangeText ={event => setRecipe({ ...recipe, ingredients: {...recipe.ingredients, unit: event }})}
              value={recipe.unit}
            />

            {/* ==== Ingredient === */}

            <TextInput
              style={{ height: 40, width: 250, marginLeft: 15, backgroundColor: 'lightgray', padding: 10 }}
              placeholder="Ingredient"
              onChangeText ={event => setRecipe({ ...recipe, ingredients: {...recipe.ingredients, name: event }})}
              value={recipe.name}
            />

          </View >

          {/* ========= Add Ingredients View ============== */}

          <View style={{ flexDirection: "row", padding: 15 }} >

            {/* <Icon name='add' reverse={true}></Icon> */}

            <Button
              title="Add Ingredients"
              color="black"
              backgroundColor=''
              onPress={() => Alert.alert('Really Random Alert')}
            />
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
        {/* ^^^ View under ===Inputs=== */}

      </View>

    </ScrollView>
  )
 }


const styles = StyleSheet.create({
  baseText:
  {
    //   Recipe by: 
    fontSize: 15,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'

  },
  titleText: {
    //   Recipe Title Name
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    //   Typically for inputs
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',
    height: 40
  },
  dropdownText: {
    //    Text shown before clicking the dropdown
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',
    fontSize: 18,
    width: 350,
    marginTop: 15
  },
  dropdown: {
    //    Text shown in dropdown bar
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',
    fontSize: 15,
    width: 120,
    marginTop: 15
  }

  // title: {
  //   textAlign: 'center',
  //   marginVertical: 8,
  // },
});