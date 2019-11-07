import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Image, StyleSheet, Button, Alert, ScrollView, AsyncStorage } from 'react-native';

// import ModalDropdown from 'react-native-modal-dropdown';
// import { Icon } from 'react-native-elements'
// import ToggleSwitch from 'toggle-switch-react-native';
// import IngredientsList from './IngredientsList';

// import axios from 'axios';


export default function AddIngredientsForm(props) {

  const initialFormState = {
    title: '',
    minutes: {
      prepTime: '', 
      cookTime: '',
      totalTime: '',
    },
    notes: "",
    categories: [
      ""
    ],
    ingredients: {
      name: "",
      quantity: "",
      unit: ""
    },
    likes: "",
    steps: [
      {
        ordinal: 1,
        body: ""
      },
      {
        ordinal: 1,
        body: ""
      }
    ],
    ancestor: ""
  }  

  const [ingredient, setIngredient] = useState(initialFormState)

  const handleInputChange = e => {
    const { name, value } = e.target;
    setIngredient({ ...ingredient, [name]: value })
  }

  return (
    <ScrollView>
      {/* ======= Amount and Ingredient Input View ====== */}

      <View style={{ flexDirection: "row", padding: 15, }}>


        {/* ==== Amount === */}

        <TextInput
          style={{ height: 40, width: 150 }}
          placeholder="Amount"
          onChange={handleInputChange}
          value={ingredient.name}
        />

        {/* ==== Ingredient === */}

        <TextInput
          style={{ height: 40, width: 250, marginLeft: 15, backgroundColor: 'lightgray', padding: 10 }}
          placeholder="Ingredient"
          onChange={handleInputChange}
          value={ingredient.name}
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

    </ScrollView>
  )

}

// export default CreateRecipeForm

// 
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