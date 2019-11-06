import React, {useState, useEffect} from "react";
import {View,TouchableOpacity, TextInput, Button, StyleSheet, Text, ScrollView} from "react-native";
import axios from "axios";

import RecipeList from './RecipeList.js'

const Search = () => {
    let [dish, setDish] = useState('')
    let [recipe, setRecipes] = useState([])


    
<<<<<<< HEAD
    let grabRecipes = (e) => {
        setDish(e)
        useEffect(() =>{
            if(dish.length!==0){
                axios
                .get(
                  `https://recipeshare-development.herokuapp.com/recipes?title=${dish}`
                )
                .then(res => {
                  setRecipes([]);
                  setRecipes(res.data);
                  setDish('')
                  
                })
                .catch(err => console.log(err));
            };
            axios
            .get(
              `https://recipeshare-development.herokuapp.com/recipes/all`
            )
            .then(res => {
              setRecipes(res.data);
            })
            .catch(err => console.log(err));
    
        },[]);
=======
    let grabRecipes = async (d) => {
        // e.preventDefault();
        await setDish(d)
        // if(dish.length!==0){
            axios
            .get(
              `https://recipeshare-development.herokuapp.com/recipes?title=${dish}`
            )
            .then(res => {
             setRecipes([]);
              setRecipes(res.data);
              //setDish('')
              
            })
            .catch(err => console.log(err));
        // };
        // if(dish.length==0){
        //     axios
        //     .get(
        //       `https://recipeshare-development.herokuapp.com/recipes/all`
        //     )
        //     .then(res => {
        //         setRecipes([]);
        //         setRecipes(res.data);
        //         //setDish('')
        //     })
        //     .catch(err => console.log(err));
        // }
>>>>>>> b5dea9df64012a47ac124408e710f8a63720f844
 
    };


    return(
        <View>
				 <TextInput
					style={styles.textInput}
					placeholder="What dish are you looking for?"
					placeholderTextColor="#D3D3D3"
					value={dish}
                    onChangeText={dish => grabRecipes(dish)}
<<<<<<< HEAD
                    // onSubmitEditing={grabRecipes}
=======
                    //onSubmitEditing={grabRecipes}
>>>>>>> b5dea9df64012a47ac124408e710f8a63720f844
				/>
                 {/* <TouchableOpacity style={styles.button}>
                    <Button  
                    color="white"    
                    onPress={grabRecipes}
                    title="Search"
                    accessibilityLabel="Search"                   
                    />
                </TouchableOpacity> */}
                <ScrollView>
                    {recipe.length>=1  && <RecipeList props={recipe} /> }
                </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
textInput: {
    //flex: 1,
    height: 40,
    //width: 300,
    fontSize: 18,
    margin: 7,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 3,
    minHeight: '5%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da'
},
button: {
    borderRadius: 4,
    borderWidth: 2,
    marginLeft: 100,
    marginRight: 100,
    borderColor: '#3BA405',
    backgroundColor: `#3BA405`
}
})

export default Search;