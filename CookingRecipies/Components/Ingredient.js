import React from 'react';
import {TextInput, Button, View, TouchableOpacity, Image, Text} from 'react-native';
import ScrollPicker from 'react-native-wheel-scroll-picker';
import styles from '../styles/createRecipeStyles';

//var PickerItem = Picker.Item;

const Ingredient = (props) => {

    let {ingList, setIngList, count, setCount, recipe, setRecipe} = props;

    let [ingredient, setIngredient] = React.useState({name : '', quantity : '', unit : '' });
    const [unitList,] = React.useState([.25,.5,.75,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
    const [unitSelected, setUnitSelected] = React.useState({selectedItem: 2})

//    const onPickerSelect = (index) => {
// 		setUnitSelected({
// 			selectedItem: index,
//         })
//         console.log('unitSelected',unitSelected)
// 	}

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
           const unique = recipe.ingredients.reduce((acc, current) => {
                const repeat = current.findIndex((a,b) => a.name === b.name)
                return acc.slice(0,repeat).push(currect).concat(acc.slice(repeat + 1))
            }, [])
            await setRecipe({...recipe, ingredients: [...recipe.ingredients, unique]})
        }
        console.log('recipe', recipe);
    }

    // const handleSubmit = async () => {
    //     console.log('<Ingredient/> handleSubmit triggered');
    //     // setIngList(() => [...ingList, ingredient]);
    //     await setCount( oldCount => oldCount + 1);
    //     console.log('count in <Ingredient/>', count);
    // }

    return  (
        <View>
{/* <ScrollPicker
                  dataSource={[
                       'a',
                       'b',
                       'c',
                       'd',
                  ]}
                  selectedIndex={1}
                  renderItem={(data, index, isSelected) => {
                      //
                  }}
                  onValueChange={(data, selectedIndex) => {
                      //
                  }}
                  wrapperHeight={180}
                  wrapperWidth={150}
                  wrapperBackground={'#FFFFFF'}
                  itemHeight={60}
                  highlightColor={'#d8d8d8'}
                  highlightBorderWidth={2}
                  activeItemColor={'#222121'}
                  itemColor={'#B4B4B4'}
                /> */}

            <View style = {{ flexDirection: 'row', width: 350, marginBottom: 20, justifyContent: 'space-around'}}>
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