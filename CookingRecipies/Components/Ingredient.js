import React from 'react';
import {TextInput, Button, View, TouchableOpacity, Image, Text} from 'react-native';
import styles from '../styles/createRecipeStyles';

const Ingredient = (props) => {

    let {recipe, setRecipe} = props;

    let [ingredient, setIngredient] = React.useState({name : '', quantity : '', unit : '' });
    const [toEdits, setToEdits] = React.useState([]);
    // const ingList = [];

    const handleChange = async (key,value) => {
        await setIngredient({...ingredient, [key] : value});
        // console.log('updating ingredient handleChange in <Ingredient/>', ingredient);
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
        //  recIng = [...recipe.ingredients];

        //     for (let i=0; i<ingList.length; i++) {
        //         for (let j=0; j<recIng.length; j++) {
        //             // console.log('rec.ing[i].name', recipe.ingredients[i].name );
        //             // console.log('ingList[j].name', ingList[j].name);
        //             if (ingList[i].name === recipe.ingredients[j].name) {
        //                 recipe.ingredients.splice(j,1);
        //             //     return false;
        //             // } else {return true}
        //         }
        //     }
        // }
        //     console.log('recipe.ingredients after splicing', recipe.ingredients);
          
           await setRecipe({...recipe, ingredients: [...recipeIng, ingredient]})
        }
    }

    // const handleSubmit = async () => {
    //     console.log('<Ingredient/> handleSubmit triggered');
    //     // setIngList(() => [...ingList, ingredient]);
    //     await setCount( oldCount => oldCount + 1);
    //     console.log('count in <Ingredient/>', count);
    // }

    return  (
        <View>
            <View style = {{ flexDirection: 'row', width: 350, marginBottom: 20}}>
                <TextInput
                    style={{ height: 40, width: 60, borderWidth: 0.8, borderColor: '#363838', borderRadius: 4 }}
                    placeholder="Amount"
                    // onChangeText={event => addIng({...ingredient, quantity: event}) }
                    onChangeText ={event => handleChange('quantity', event)}
                    onBlur={handleBlur}
                    value={ingredient.quantity}
                />
                
                <TextInput
                    style={{ height: 40, width: 60, borderWidth: 0.8, borderColor: '#363838', borderRadius: 4 }}
                    placeholder="Unit"
                    // onChangeText ={event => addIng({...ingredient, unit: event})}
                    onChangeText ={event => handleChange('unit', event)}
                    onBlur={handleBlur}
                    value={ingredient.unit}
                />

                <TextInput
                    style={{ height: 40, width: 230, borderWidth: 0.8, borderColor: '#363838', borderRadius: 4 }}
                    placeholder="Ingredient"
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