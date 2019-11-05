import React from 'react';
import {TextInput, Button, View, TouchableOpacity, Image, Text} from 'react-native';
import styles from '../styles/createRecipeStyles';

const Ingredient = (props) => {

    let {ingList, setIngList, count, setCount, recipe, setRecipe} = props;

    let [ingredient, setIngredient] = React.useState({name : '', quantity : '', unit : '' });

    const handleChange = async (key,value) => {
        await setIngredient({...ingredient, [key] : value});
        console.log('updating ingredient handleChange in <Ingredient/>', ingredient);
    }


    const handleBlur = async (event) => {
        console.log('handleBlur triggered in <Ingredient/>');
        // setIngList([...ingList, ingredient]);
        console.log('recipe.ingredients inside handleBlur', recipe.ingredients);
        const ingArr = Object.values(ingredient);
        const fullIng = ingArr.filter(i => !!i);
        console.log('fullIng', fullIng);
        if (fullIng.length === 3) {
           await setRecipe({...recipe, ingredients: [...recipe.ingredients, ingredient]})
        }
        console.log('recipe', recipe);
    }

    const handleSubmit = async () => {
        console.log('<Ingredient/> handleSubmit triggered');
        // setIngList(() => [...ingList, ingredient]);
        await setCount( oldCount => oldCount + 1);
        console.log('count in <Ingredient/>', count);
    }

    return  (
        <View>
            <View style = {{ flexDirection: 'row', width: 350, marginBottom: 20}}>
                <TextInput
                    style={{ height: 40, width: 60 }}
                    placeholder="Amount"
                    // onChangeText={event => addIng({...ingredient, quantity: event}) }
                    onChangeText ={event => handleChange('quantity', event)}
                    onBlur={handleBlur}
                    value={ingredient.quantity}
                />
                
                <TextInput
                    style={{ height: 40, width: 60 }}
                    placeholder="Unit"
                    // onChangeText ={event => addIng({...ingredient, unit: event})}
                    onChangeText ={event => handleChange('unit', event)}
                    onBlur={handleBlur}
                    value={ingredient.unit}
                />

                <TextInput
                    style={{ height: 40, width: 230, backgroundColor: 'lightgray', padding: 10 }}
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