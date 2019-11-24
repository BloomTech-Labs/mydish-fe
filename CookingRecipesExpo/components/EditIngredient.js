import React, {useState, useEffect} from 'react';
import {TextInput, View,Text, TouchableOpacity,} from 'react-native';
import styles from '../styles/createRecipeStyles';
// import ReactNativePickerModule from 'react-native-picker-module'
//import Picker from './Picker'

const EditIngredient = (props) => {

  let { recipe, setRecipe, index, ingDelete} = props;
  
  const [choices,setChoices] = useState({selectedValue: null,
    data : ['tsp', 'tbsp', 'cup', 'g', 'mg', 'oz', 'pinch', 'L', 'ml', 'can', 'whole', 'pint', 'package', 'lbs']})
    let [ingredient, setIngredient] = React.useState(props.ingredient);
    // const [toEdits, setToEdits] = React.useState(recipe.ingredients);
    const [toEdits, setToEdits] = React.useState([]);
    // const ingList = [];
    const [unit, setUnit] = React.useState('g');

    
    useEffect(() => {
      setRecipe({...recipe, ingredients : recipe.ingredients})
      setIngredient(props.ingredient || {name:'', quantity: '', unit: ''});
      
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
        // console.log('recipe.ingredients in handleblur', recipe.ingredients);
        const ingArr = Object.values(ingredient);
        const fullIng = ingArr.filter(i => !!i);
        
        if (fullIng.length === 3) {

          const things = recipe.ingredients;
          things[index] = ingredient;

          setRecipe({...recipe, ingredients: things});

        }
    }

    const deleteButton = () => {
      ingDelete(index)
    }

//console.log('ingredient in edit ingredients', 'index:',index, ingredient)
//console.log('props.ingredient inside edit ingredients at index:', index, props.ingredient)
console.log('ingredient.quantity in <EditIngredient>', ingredient.quantity);
    return  (
        <View>
            <View style = {{ flexDirection: 'row', marginBottom: 20, alignItems: 'center'}}>
              <TouchableOpacity onPress={deleteButton}>
              <View style={styles.deleteButtonIngredient}>
                <View style={styles.deleteRedLine}></View>
                </View>
               </TouchableOpacity>
                <TextInput
                    style={{ height: 40, width: "17%", borderWidth: 0.8, borderColor: '#363838', borderRadius: 4, textAlign: 'center', marginLeft: "1%"}}
                    placeholder="Amount"
                    keyboardType={'numeric'}
                    onChangeText ={event => handleChange('quantity', event)}
                    onBlur={handleBlur}
                    value={String(ingredient.quantity)}
                />
                

              {/* <Picker choices={choices} handleChange={handleChange} ingredient={ingredient}/> */}
                 <TextInput placeholder="Units" 
                 style={{ height: 40, width: "17%", borderWidth: 0.8, borderColor: '#363838', borderRadius: 4, textAlign: 'center', marginLeft: "3%"}}
                        onChangeText ={unit => handleChange('unit', unit)} 
                        onBlur={handleBlur} value={ingredient.unit}
                />

                {/* <TextInput placeholder="Dummy Test" onChangeText={() => console.log(`cant change ${ingredient.quantity} this`)} value={String(ingredient.quantity)} /> */}

                <TextInput
                    style={{ height: 40, width: "42%", borderWidth: 0.8, borderColor: '#363838', borderRadius: 4, textAlign: 'center', marginLeft: "3%" }}
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

export default EditIngredient;