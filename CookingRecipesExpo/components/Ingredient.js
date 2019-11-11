import React, {useState} from 'react';
import {TextInput, View, Picker, Text, TouchableOpacity, TouchableWithoutFeedback, Modal} from 'react-native';
import styles from '../styles/createRecipeStyles';
// import ScrollPicker from 'react-native-wheel-scroll-picker';


const Ingredient = (props) => {


    let {recipe, setRecipe} = props;

    let [ingredient, setIngredient] = React.useState({name : '', quantity : '', unit : '' });
    const [toEdits, setToEdits] = React.useState([]);
    // const ingList = [];
    const [unit, setUnit] = React.useState('g');


    const handleChange = async (key,value) => {
        console.log('handleChange triggered in <Ingredient>')
        await setIngredient({...ingredient, [key] : value});
        // console.log('updating ingredient handleChange in <Ingredient/>', ingredient);
    }

    const handlePicker = async (u) => {
        console.log('handlepicker triggered', unit);
        await setUnits(u)
    }



    const handleBlur = async (event) => {
        console.log('handleBlur triggered in <Ingredient/>');
        const ingArr = Object.values(ingredient);
        const fullIng = ingArr.filter(i => !!i);
        if (fullIng.length === 3) {
         await setToEdits([...toEdits, ingredient]);
        //  ingList.push(ingredient);
         console.log('ingList in <Ingredient/>', toEdits);
         console.log('recipe.ingredients in <Ingredient/>', recipe.ingredients);
         console.log('ingredient in <Ingredient/>', ingredient);
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

    const [visible, setVisible] = useState({active: false})

    const scrollPickerDisplay = () => {
        // const newActive= !visible.active
        setVisible({active: true})
        console.log('active', visible.active)
      }

      const hidePickerDisplay = () => {
        // const newActive= !visible.active
        setVisible({active: false   })
        console.log('active', visible.active)
      }

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
                
                {/* <TouchableWithoutFeedback onPress={() => setVisible({ active: false })}> */}
                <TouchableOpacity onPress = {scrollPickerDisplay} style={{ height: 40, width: "16%", borderWidth: 0.8, borderColor: '#363838', borderRadius: 4, textAlign: 'center', marginLeft: "3%",  }}>
                <View >
                <Text style={{alignContent: "center"}}>{ingredient.unit !== '' ? ingredient.unit : "unit"}</Text>
               <Modal
               style={{backgroundColor: 'red'}}
                animationType="fade"
                transparent={true}
                //presentationStyle={'pageSheet'}
                visible={visible.active}>
                 <TouchableOpacity onPress={hidePickerDisplay}>
                 <View style={{opacity:0, height: '45%'}}></View>
            </TouchableOpacity> 
               <Picker 
               style={visible.active ? {backgroundColor: 'white'} : {display: "none"}}
               itemStyle={{height: 140, width: "80%", marginLeft: '10%'}}
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
            <TouchableOpacity onPress={hidePickerDisplay}>
                 <View style={{opacity:0, height: '35%'}}></View>
            </TouchableOpacity> 
            </Modal>
            </View>
                </TouchableOpacity>
            {/* </TouchableWithoutFeedback> */}


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