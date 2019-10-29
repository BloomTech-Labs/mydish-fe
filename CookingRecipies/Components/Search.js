import React, {useState, useEffect} from "react";
import {View,TouchableOpacity, TextInput, Button, StyleSheet, Text} from "react-native";
import axios from "axios";

import RecipeList from './RecipeList.js'

const Search = () => {
    let [dish, setDish] = useState('')
    let [recipe, setRecipes] = useState([])

    useEffect(() =>{
        axios
        .get(
          `https://restcountries.eu/rest/v2/all`
        )
        .then(res => {
          setRecipes([res.data]);
          console.log("hi", recipe)
        })
        .catch(err => console.log(err));

    },[]);
    
    let grabRecipes = e => {
        e.preventDefault();
        console.log(dish);
        if( dish.length>0){
            axios
            .get(
              `https://restcountries.eu/rest/v2/capital/${dish}`
            )
            .then(res => {
              setRecipes([]);
              setRecipes([res.data]);
              console.log(recipe)
              
            })
            .catch(err => console.log(err));
        };
    };


    return(
        <View>
            <Text >Search Bar</Text>
				 <TextInput
					style={styles.textInput}
					placeholder="What Dish are you looking for?"
					placeholderTextColor="#D3D3D3"
					value={dish}
					onChangeText={dish => setDish(dish)}
				/>
                 <TouchableOpacity style={styles.button}>
                    <Button  
                    color="white"    
                    onPress={grabRecipes}
                    title="Click me"
                    accessibilityLabel="Search"                   
                    />
                </TouchableOpacity>
            {/* <RecipeList />  */}


        </View>

    )
}

const styles = StyleSheet.create({
textInput: {
    flex: 1,
    height: 4000,
    fontSize: 18,
    margin: 7,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 3,
    minHeight: '65%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da'
},
button: {
    borderRadius: 4,
    borderWidth: 2,
    marginLeft: 100,
    marginRight: 100,
    borderColor: '#2089dc',
    backgroundColor: `#2089dc`
}
})

export default Search;