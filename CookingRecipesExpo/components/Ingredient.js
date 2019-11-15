import React, {useState, useEffect} from 'react';
import {TextInput, View, Picker, Text, TouchableOpacity, TouchableWithoutFeedback, Modal} from 'react-native';
import styles from '../styles/createRecipeStyles';
import ReactNativePickerModule from 'react-native-picker-module'




const Ingredient = (props) => {

  let {recipe, setRecipe, visible, setVisible, index} = props;
  
  const [choices,setChoices] = useState({selectedValue: null,
    data : ['tsp', 'tbsp', 'cup', 'g', 'mg', 'oz', 'pinch', 'L', 'ml', 'can', 'whole', 'pint', 'package', 'lbs']})
    let [ingredient, setIngredient] = React.useState({name : '', quantity : '', unit : '' });
    const [toEdits, setToEdits] = React.useState([]);
    // const ingList = [];
    const [unit, setUnit] = React.useState('g');

    
    useEffect(() => {
      // console.log('ingredient', ingredient);
      // console.log('recipe.ingredients', recipe.ingredients);
    },[recipe.ingredients])

    const handleChange = (key,value,i) => {
        // console.log('handleChange triggered in <Ingredient>')
        // console.log('key and value from handlechange', key, value)
        setChoices({...choices, selectedValue : i})
        setIngredient({...ingredient, [key] : value});
        // console.log('updating ingredient handleChange in <Ingredient/>', ingredient);
    }

    const handleBlur = (event) => {
        //console.log('handleBlur triggered in <Ingredient/>');
        const ingArr = Object.values(ingredient);
        const fullIng = ingArr.filter(i => !!i);
        if (fullIng.length === 3) {
         setToEdits([...toEdits, ingredient]);
         const recipeIng = [...recipe.ingredients];

         for (let i=0; i<toEdits.length; i++) {
            for (let j=0; j<recipeIng.length; j++) {
              if (toEdits[i].name === recipeIng[j].name) {
                recipeIng.splice(j,1);
              }
            }
          }

        // console.log('recipeIng after splicing', recipeIng);
        
           setRecipe({...recipe, ingredients: [...recipeIng, ingredient]})
        }
    }


    return  (
        <View>
            <View style = {{ flexDirection: 'row', marginBottom: 20}}>
                <TextInput
                    style={{ height: 40, width: "19%", borderWidth: 0.8, borderColor: '#363838', borderRadius: 4, textAlign: 'center', marginLeft: 14 }}
                    placeholder="Amount"
                    keyboardType={'numeric'}
                    onChangeText ={event => handleChange('quantity', event)}
                    onBlur={handleBlur}
                    value={ingredient.quantity}
                />
                
                <TouchableOpacity  onPress={() => {pickerRef.show()}} style={{ height: 40, width: "19%", borderWidth: 0.8, borderColor: '#363838', borderRadius: 4, textAlign: 'center', marginLeft: "3%",  }}>
                <View style={{alignItems: "center", paddingTop: '15%'}} >
                <Text style={ ingredient.unit === '' ? {color: "#C7C7CD"} : ''}>{ingredient.unit !== '' ? ingredient.unit : "Unit"}</Text>
                <ReactNativePickerModule
                    pickerRef={e => pickerRef = e}
                    selectedValue={choices.selectedValue}
                    title={"Select a unit"}
                    items={choices.data}
                    onValueChange={(value,i) => handleChange('unit', value,i)}/>
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