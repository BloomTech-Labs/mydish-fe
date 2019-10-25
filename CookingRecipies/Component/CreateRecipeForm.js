import React, { Component } from 'react';
import { Text, TextInput, View, Image, StyleSheet, Button, Alert, ScrollView } from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';
import { Icon } from 'react-native-elements'

export default class CreateRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      value: ''

    };
  }

  render() {
   return (
    <ScrollView>
        <View style={{ padding: 1, paddingTop: 40 }}>
          <Text style={styles.header}>Create Recipe</Text>
         
    {/* ====== Image with Recipe Name and Creator ========= */}

          <View style={{ flexDirection: "row", padding: 15 }}>
             <Image
              style={{ width: 150, height: 150 }}
              // resizeMode='contain'
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4XWzZO9k9I58DojrPtoSvYsJ_DA8K7H0md9j6ETfu1zqpXmQqMQ&s' }}
             />

             <View style={{ marginLeft: 15 }}>
               <Text style={styles.titleText} >Honey Pancakes</Text>
               <Text style={styles.baseText}>Recipe by: Lana Smith
                                    {/* {this.props.username} *based from profile */}
               </Text>
             </View>

          </View>

    {/* ========= Inputs ========== */}

         <View style={{ alignSelf: 'center', width: 350 }}>

            <Text style = {{fontWeight: 'bold', fontSize : 20}}>Recipe Name</Text>
            
            <TextInput
              style = {styles.container}
              multiline={true}
              numberOfLines={5}
              maxLength={55}
              placeholder='Placeholder for Recipe Name'
              value={this.state.value}
              onChangeText={(value) => this.setState({ value })} />

            <Text style={{ alignSelf: 'flex-end' }}>
              {this.state.value.length}/55
            </Text>

            {/* <TextInput
              style={{ height: 40 }}
              // label = "Recipe Name"
              placeholder="Just a placeholder"
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
            /> */}
            {/* <Text style={{ padding: 10, fontSize: 42 }}>
              {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text> */}

        {/* ======== Course Type Dropdown ================== */}

            <ModalDropdown
              options={['Breakfast', 'Brunch', 'Gluten-Free', 'Vegan', 'Vegetarian', 'Keto']}
              defaultValue={'Course Type'}
              //  showsVerticalScrollIndicator = {true}
              textStyle = {styles.dropdownText}
              dropdownStyle = {styles.dropdownText}
            />


        {/* =========== Cuisine Input ======================== */}

            <Text style={{ marginTop: 15, fontSize: 20, fontWeight: 'bold' }}>Cuisine</Text>
            <TextInput
              style={styles.container}
              placeholder="Just a placeholder for Cuisine"
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
            />

        {/* ============= Prep and Cook Time View =============== */}


            <View style={{ flexDirection: "row", padding: 15, justifyContent: 'space-between' }}>
            
            {/* ==== Prep Time === */}
              <ModalDropdown
                options={['5 min.', '10 min.', '15 min.', '20 min.', '30 min.', '45 min.', 'Other']}
                defaultValue={'Prep Time'}
                //  showsVerticalScrollIndicator = {true}
                textStyle = {styles.dropdown}
                dropdownStyle = {styles.dropdown}
              />

            {/* ==== Cook Time === */}
              <ModalDropdown
                options={['3-5 min.', '10-15 min.', '20-30 min.', '45-55 min.', '60 min', 'Other']}
                defaultValue={'Cook Time'}
                //  showsVerticalScrollIndicator = {true}
                textStyle = {styles.dropdown}
                dropdownStyle = {styles.dropdown}
              />

            </View>

        {/* ============= Total Time and Servings View =============== */}

            <View style={{ flexDirection: "row", padding: 15, justifyContent: 'space-between'}}>

            {/* ==== Total Time === */}

              <ModalDropdown
                options={['10 min.', '25 min.', '20 min.', '30 min.', '60 min.', 'Other']}
                defaultValue={'Total Time'}
                //  showsVerticalScrollIndicator = {true}
                textStyle = {styles.dropdown}
                dropdownStyle = {styles.dropdown}
              />

            {/* ==== Servings === */}

              <ModalDropdown
                options={['1-2 servings', '2-3 servings', '3-5 servings', '6-8 servings', '10-12 servings', 'Others']}
                defaultValue={'Servings'}
                //  showsVerticalScrollIndicator = {true}
                textStyle = {styles.dropdown}
                dropdownStyle = {styles.dropdown}
                
              />

            </View>

     {/* =============== Ingredients ===================== */}

            <Text style = {{fontWeight: 'bold', fontSize : 20}} >Ingredients</Text>

        {/* ======= Amount and Ingredient Input View ====== */}

            <View style={{ flexDirection: "row", padding: 15, }}>
              
            {/* ==== Amount === */}

              <TextInput
                style={{ height: 40 }}
                placeholder="Amount"
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
              />

            {/* ==== Ingredient === */}

              <TextInput
                style={{ height: 40, width: 250, marginLeft: 15, backgroundColor: 'lightgray', padding: 10 }}
                placeholder="Ingredient"
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
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

          </View> 
          {/* ^^^ View under ===Inputs=== */}


        </View>

    </ScrollView>
   );
  }
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
  dropdown :{
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