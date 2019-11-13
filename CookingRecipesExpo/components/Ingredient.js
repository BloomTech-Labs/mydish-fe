import React, {useState} from 'react';
import {TextInput, View, Picker, Text, TouchableOpacity, TouchableWithoutFeedback, Modal} from 'react-native';
import styles from '../styles/createRecipeStyles';


const Ingredient = (props) => {


    let {recipe, setRecipe, visible, setVisible, index} = props;

    let [ingredient, setIngredient] = React.useState({name : '', quantity : '', unit : '' });
    const [toEdits, setToEdits] = React.useState([]);
    // const ingList = [];
    const [unit, setUnit] = React.useState('g');


    const handleChange = (key,value) => {
        console.log('handleChange triggered in <Ingredient>')
        setIngredient({...ingredient, [key] : value});
        console.log('key and value from handlechange', key, value)
        // console.log('updating ingredient handleChange in <Ingredient/>', ingredient);
    }

  


console.log('key', index)

    const handleBlur = async (event) => {
        console.log('handleBlur triggered in <Ingredient/>');
        const ingArr = Object.values(ingredient);
        const fullIng = ingArr.filter(i => !!i);
        if (fullIng.length === 3) {
         await setToEdits([...toEdits, ingredient]);
         const recipeIng = [...recipe.ingredients];

         for (let i=0; i<toEdits.length; i++) {
            for (let j=0; j<recipeIng.length; j++) {
              if (toEdits[i].name === recipeIng[j].name) {
                recipeIng.splice(j,1);
              }
            }
          }

        console.log('recipeIng after splicing', recipeIng);
        
           await setRecipe({...recipe, ingredients: [...recipeIng, ingredient]})
        }
    }


    const scrollPickerDisplay = () => {
        setVisible({active: true})
     
      }

      const hidePickerDisplay = () => {
        setVisible({active: false   })
       
      }

      console.log('update ingredients', ingredient)
      console.log('update recipes', recipe.ingredients)

    return  (
        <View>
            <View style = {{ flexDirection: 'row', width: 350, marginBottom: 20}}>
                <TextInput
                    style={{ height: 40, width: "16%", borderWidth: 0.8, borderColor: '#363838', borderRadius: 4, textAlign: 'center', marginLeft: 14 }}
                    placeholder="Amount"
                    keyboardType={'numeric'}
                    onChangeText ={event => handleChange('quantity', event)}
                    onBlur={handleBlur}
                    value={ingredient.quantity}
                />
                
                <TouchableOpacity onPress = {scrollPickerDisplay} style={{ height: 40, width: "16%", borderWidth: 0.8, borderColor: '#363838', borderRadius: 4, textAlign: 'center', marginLeft: "3%",  }}>
                <View style={{alignItems: "center", paddingTop: '18%'}} >
                <Text style={ ingredient.unit === '' ? {color: "#C7C7CD"} : ''}>{ingredient.unit !== '' ? ingredient.unit : "Unit"}</Text>
               <Modal
                animationType="fade"
                transparent={true}
                visible={visible.active}>
                 <TouchableOpacity onPress={hidePickerDisplay}>
                 <View style={{ height: '51.5%'}}></View>
            </TouchableOpacity> 
            <TouchableOpacity style={{backgroundColor: '#F7F9FA', shadowOpacity: .3, borderBottomWidth: .3, borderBottomColor: "#c7c7c7"}} onPress={hidePickerDisplay}>
            <Text style={{color: 'red', marginLeft: '88%', paddingTop: "3%", paddingBottom: '3%', color: '#047396'}}>Done</Text>
            </TouchableOpacity>
               <Picker 
               style={visible.active ? {backgroundColor: '#F7F9FA', } : {display: "none"}}
               itemStyle={{height: 190}}
               selectedValue={ingredient.unit}
               onValueChange={(itemValue, itemIndex) =>
                handleChange('unit', itemValue)}
                >
               <Picker.Item label = "tsp" value = "tsp" />
               <Picker.Item label = "tbsp" value = "tbsp" />
               <Picker.Item label = "cup" value = "cup" />
               <Picker.Item label = "g" value = "g" />
               <Picker.Item label = "mg" value = "mg" />
               <Picker.Item label = "oz" value = "oz" />
               <Picker.Item label = "pinch" value = "pinch" />
               <Picker.Item label = "L" value = "l" />
               <Picker.Item label = "ml" value = "ml" />
               <Picker.Item label = "can" value = "can" />
               <Picker.Item label = "whole" value = "whole" />
               <Picker.Item label = "pint" value = "pint" />
               <Picker.Item label = "package" value = "package" />
            </Picker>
            {/* <TouchableOpacity onPress={hidePickerDisplay}>
                 <View style={{opacity:0, height: '35%'}}></View>
            </TouchableOpacity>  */}
            </Modal>
            </View>
                </TouchableOpacity>


                <TextInput
                    style={{ height: 40, width: "42%", borderWidth: 0.8, borderColor: '#363838', borderRadius: 4, textAlign: 'center', marginLeft: "3%", marginRight: 14  }}
                    placeholder="Ingredient Name"
                    // onChangeText ={event => addIng({...ingredient, name: event})}
                    onChangeText ={event => handleChange('name', event)}
                    onBlur={handleBlur}
                    value={ingredient.name}
                />

            </View>

            <View style = {{alignItems: 'center'}}> 

            </View>
        </View>
    
    )
}

export default Ingredient;