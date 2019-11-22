import React, {useState, useEffect} from 'react';
import {TextInput, View,Text, TouchableOpacity,} from 'react-native';
// import styles from '../styles/createRecipeStyles';
// import ReactNativePickerModule from 'react-native-picker-module'
import Picker from './Picker'

const EditIngredient = (props) => {

  let {recipe, setRecipe, visible, setVisible, index} = props;
  
  const [choices,setChoices] = useState({selectedValue: null,
    data : ['tsp', 'tbsp', 'cup', 'g', 'mg', 'oz', 'pinch', 'L', 'ml', 'can', 'whole', 'pint', 'package', 'lbs']})
    let [ingredient, setIngredient] = React.useState(props.ingredient);
    // const [toEdits, setToEdits] = React.useState(recipe.ingredients);
    const [toEdits, setToEdits] = React.useState([]);
    // const ingList = [];
    const [unit, setUnit] = React.useState('g');

    
    useEffect(() => {
      setRecipe({...recipe, ingredients : recipe.ingredients})
    //   console.log(`ingredient quantity for ${ingredient.name} in <EditIngredient>`, ingredient.quantity);
    //   console.log('ingredient in <EditIngredient/>', props.ingredient);
      // console.log('recipe.ingredients', recipe.ingredients);
    },[recipe.ingredients])

    const handleChange = (key,value,i) => {
        // console.log('handleChange triggered in <Ingredient>')
        console.log('key and value from handlechange', key, value)
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


        //  setToEdits([...toEdits, ingredient]);
        // //  console.log('toEdits in EditIngred',toEdits);
        //  const recipeIng = [...recipe.ingredients];

        //  for (let i=0; i<toEdits.length; i++) {
        //     for (let j=0; j<recipeIng.length; j++) {
        //       if (toEdits[i].name === recipeIng[j].name) {
        //         recipeIng.splice(j,1);
        //       }
        //     }
        //   }

        // console.log('recipeIng after splicing', recipeIng);
        
          //  setRecipe({...recipe, ingredients: [...recipeIng, ingredient]})
        }
    }


    return  (
        <View>
            <View style = {{ flexDirection: 'row', marginBottom: 20}}>
              <TouchableOpacity>
              <View style={{borderWidth: 0.8, borderColor: '#363838', borderRadius:50, width: 24, height: 24,  marginTop: 8, marginLeft: 14, alignContent: 'center'}}>
                <View style={{borderTopWidth: 0.8, borderColor: 'red', width: 15, marginTop: '50%', marginLeft: 3.3}}></View>
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