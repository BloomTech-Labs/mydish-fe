import React, {useState} from "react";
import {View,View,TouchableOpacity, TextInput, Button} from "react-native";
import { FormInput} from 'react-native-elements'

const Search = () => {
    let [dish, setDish] = useState('')
    let [recipe, setRecipes] = useState([])
    
    let grabRecipes = dish => {
        
      };
  

    return(
        <View>
				<TextInput
					// style={styles.textInput}
					// multiline={true}
					placeholder="Dish?"
					placeholderTextColor="#abbabb"
					value={dish}
					onChangeText={dish => setDish(dish)}
				/>
                <TouchableOpacity>
                    <Button
                    onPress={grabRecipes}
                    title="Click me"
                    color="red"
                    accessibilityLabel="Search"
                    />
                </TouchableOpacity>
            <FormInput onChangeText={someFunction}/>
            {/* <RecipeList data={state.data}/> */}

        </View>

    )
}