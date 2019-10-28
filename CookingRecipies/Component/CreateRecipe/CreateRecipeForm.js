import React, { useState } from 'react';
import { Text, TextInput, View, Image, StyleSheet, Button, Alert, ScrollView } from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';
import { Icon } from 'react-native-elements'
import ToggleSwitch from 'toggle-switch-react-native';


export default function CreateRecipeForm(props) {

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
        ordinal: 2,
        body: ""
      }
    ],
    ancestor: ""
  }  

  const [recipe, setRecipe] = useState(initialFormState)

  const handleInputChange = e => {
    const { name, value } = e.target;

    setRecipe({ ...recipe, [name]: value })
  }

  return (
    <ScrollView>
      <View style={{ padding: 1, paddingTop: 40 }}>
        <Text style={styles.header}>Create Recipe</Text>

        {/* ====== Image with Recipe Name and Creator ========= */}

        <View style={{ flexDirection: "row", padding: 15 }}>
          <Image
            style={{ width: 150, height: 150 }}
            // resizeMode='contain'
            source={{ uri: 'https://visualpharm.com/assets/654/Add%20Camera-595b40b85ba036ed117dbeab.svg' }}
          />

          <View style={{ marginLeft: 15 }}>
            {/* <Text style={styles.titleText} >Honey Pancakes</Text> */}


            {/* <TextInput
              style={styles.titleText}
              placeholder="Recipe Name"
              onC={(value) => this.setState({ value })}
              value={this.state.value}
            /> */}


            <Text style={styles.baseText}>Recipe by: Lana Smith
                                      {/* {this.props.username} *based from profile */}
            </Text>
          </View>

        </View>

        {/* ========= Inputs ========== */}

        <View style={{ alignSelf: 'center', width: 350 }}>

          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Recipe Name</Text>


          {/* <TextInput
            style={styles.container}
            multiline={true}
            numberOfLines={5}
            maxLength={55}
            placeholder='Placeholder for Recipe Name'
            value={this.state.value}
            onC={(value) => this.setState({ value })} />

          <Text style={{ alignSelf: 'flex-end' }}>
            {this.state.value.length}/55
              </Text> */}

          {/* ======== Course Type Dropdown ================== */}

          <ModalDropdown
            options={['Breakfast', 'Brunch', 'Gluten-Free', 'Vegan', 'Vegetarian', 'Keto']}
            defaultValue={'Course Type'}
            //  showsVerticalScrollIndicator = {true}
            textStyle={styles.dropdownText}
            dropdownStyle={styles.dropdownText}
          />

          {/* =========== Cuisine Input ======================== */}

          <Text style={{ marginTop: 15, fontSize: 20, fontWeight: 'bold' }}>Cuisine</Text>
          <TextInput
            style={styles.container}
            placeholder="Just a placeholder for Cuisine"
            onChange={handleInputChange}
            value={recipe.name}
          />

          {/* ============= Prep and Cook Time View =============== */}


          <View style={{ flexDirection: "row", padding: 15, justifyContent: 'space-between' }}>

            {/* ==== Prep Time === */}
            <ModalDropdown
              options={['5 min.', '10 min.', '15 min.', '20 min.', '30 min.', '45 min.', 'Other']}
              defaultValue={'Prep Time'}
              //  showsVerticalScrollIndicator = {true}
              textStyle={styles.dropdown}
              dropdownStyle={styles.dropdown}
            />

            {/* ==== Cook Time === */}
            <ModalDropdown
              options={['3-5 min.', '10-15 min.', '20-30 min.', '45-55 min.', '60 min', 'Other']}
              defaultValue={'Cook Time'}
              //  showsVerticalScrollIndicator = {true}
              textStyle={styles.dropdown}
              dropdownStyle={styles.dropdown}
            />

          </View>

          {/* ============= Total Time and Servings View =============== */}

          <View style={{ flexDirection: "row", padding: 15, justifyContent: 'space-between' }}>

            {/* ==== Total Time === */}

            <ModalDropdown
              options={['10 min.', '25 min.', '20 min.', '30 min.', '60 min.', 'Other']}
              defaultValue={'Total Time'}
              //  showsVerticalScrollIndicator = {true}
              textStyle={styles.dropdown}
              dropdownStyle={styles.dropdown}
            />

            {/* ==== Servings === */}

            <ModalDropdown
              options={['1-2 servings', '2-3 servings', '3-5 servings', '6-8 servings', '10-12 servings', 'Others']}
              defaultValue={'Servings'}
              //  showsVerticalScrollIndicator = {true}
              textStyle={styles.dropdown}
              dropdownStyle={styles.dropdown}

            />

          </View>

          {/* =============== Ingredients ===================== */}

          <Text style={{ fontWeight: 'bold', fontSize: 20 }} >Ingredients</Text>

          {/* ======= Amount and Ingredient Input View ====== */}

          <View style={{ flexDirection: "row", padding: 15, }}>

            {/* ==== Amount === */}

            <TextInput
              style={{ height: 40 }}
              placeholder="Amount"
              onC={handleInputChange}
              value={recipe.name}
            />

            {/* ==== Ingredient === */}

            <TextInput
              style={{ height: 40, width: 250, marginLeft: 15, backgroundColor: 'lightgray', padding: 10 }}
              placeholder="Ingredient"
              onC={handleInputChange}
              value={recipe.name}
            />

          </View >


          {/* ========= Add Ingredients View ============== */}

          <View style={{ flexDirection: "row", padding: 15 }} >

            <Icon name='add' reverse={true}></Icon>

            <Button
              title="Add Ingredients"
              color="black"
              backgroundColor=''
              onPress={() => Alert.alert('Really Random Alert')}
            />
          </View>


          {/* ======= Instructions Input View ====== */}

          <View style={{ flexDirection: "row", padding: 15, }}>



            {/* ==== Instructions === */}

            <TextInput
              style={{ height: 40, width: 250, marginLeft: 15, backgroundColor: 'lightgray', padding: 10 }}
              placeholder=" Add Instructions"
              onC={handleInputChange}
              value={recipe.name}
            />

          </View >


          {/* ========= Add Instructions View ============== */}

          <View style={{ flexDirection: "row", padding: 15 }} >

            <Icon name='add' reverse={true}></Icon>

            <Button
              title="Add Instructions"
              color="black"
              backgroundColor=''
              onPress={() => Alert.alert('Really Random Alert')}
            />
          </View>

          <ToggleSwitch
            isOn={true}
            onColor='green'
            offColor='black'
            label='Make Recipe Private'
            labelStyle={{ color: 'black', fontWeight: 'bold' }}
            size='medium'
            onToggle={isOn => console.log('changed to : ', isOn)}

          />

          <Text></Text>
          <Button title='Submit Recipe' 
          onSubmit = {event => {event.preventDefault()
            if(!recipe.name || !recipe.minutes) return
             props.addRecipe(recipe) 
             setRecipe(initialFormState)
             console.log('Submitted')
          }}/>

        </View>
        {/* ^^^ View under ===Inputs=== */}

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