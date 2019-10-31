import React from 'react';
import {TextInput, Button, View} from 'react-native';

const Ingredient = (props) => {

    // const [ing, setIng] = useState({
    //     name: "",
    //     quantity: "",
    //     unit: "" 
    //   })

    // const {addIng, ingredient} = props;

    let [ingredient, setIngredient] = React.useState({name : '', quantity : '', unit : '' });

    const handleChange = (key,value) => {
        setIngredient({...ingredient, [key] : value})
       console.log('ingredient', ingredient);
    }


    return  (
        <View>
            
             <TextInput
                style={{ height: 40, width: 250, marginLeft: 15, backgroundColor: 'lightgray', padding: 10 }}
                placeholder="Ingredient"
                // onChangeText ={event => addIng({...ingredient, name: event})}
                onChangeText ={event => handleChange('name', event)}
                value={ingredient.name}
            />

            <TextInput
            style={{ height: 40, width: 75 }}
            placeholder="Amount"
            // onChangeText={event => addIng({...ingredient, quantity: event}) }
            onChangeText ={event => handleChange('quantity', event)}
            value={ingredient.quantity}
            />
            <TextInput
                style={{ height: 40, width: 75 }}
                placeholder="Unit"
                // onChangeText ={event => addIng({...ingredient, unit: event})}
                onChangeText ={event => handleChange('unit', event)}
                value={ingredient.unit}
                />

           
            <Button
            title="+"
            // onPress={testSubmit} 
            />
        </View>
    )
}

export default Ingredient;