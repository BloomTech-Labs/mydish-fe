import React, {useState, useEffect} from "react";
import {View,TouchableOpacity, TextInput, Button, StyleSheet, Text, ScrollView, Image} from "react-native";
import axios from "axios";
import logo from '../assets/LogoGreen.png';
import RecipeList from './RecipeList.js'
import styles from '../styles/search.styles';

const Search = (props) => {
    let [dish, setDish] = useState('')
    const [recipes, setRecipes] = useState([])
    const [children,setChildren] = useState([]);
    // let [recipeListRefresh, setRecipeListRefresh] = useState(false);

    useEffect(() =>{
        getRecipes();
    },[dish]);

    function getRecipes() {
        axios.get(`https://recipeshare-development.herokuapp.com/recipes?title=${dish}`)
            .then(res => {
                setRecipes([]); 
                const allRecipes = res.data;
                // console.log('allRecipes', allRecipes);
                allRecipes.forEach(rec => console.log('recipe.ancestor in <Search>,', rec.ancestor))
                const masterRecipes = allRecipes.filter(rec => !rec.ancestor);
                const childrenRecipes = allRecipes.filter(rec => rec.ancestor);
                setChildren(childrenRecipes);
                setRecipes(masterRecipes);
            })
            .catch(err => console.log(err));
    }

    const focus = () => {
        console.log('focus on your search!');
        setDish('');
    }

    return(
        <View style={{height: '100%'}}>
            <View style = {{flexDirection: 'row', justifyContent: 'flex-start', textAlign: 'left', paddingBottom:"2%", marginTop: "2%"}}>
                <Image source={logo} style={{width: "8%", height: "85%", marginLeft: "2%"}}/> 
                <Text style={styles.title}>RecipeShare</Text>
            </View>
				 <TextInput
					style={styles.textInput}
					placeholder="What dish are you looking for?"
					placeholderTextColor="#D3D3D3"
					value={dish}
                    onChangeText={dish => setDish(dish)}
                    // clearTextOnFocus={true}
                    // onBlur={handleBlur}
                    onFocus={focus}
				/>
                {/* {console.log('children recipes in <Search>', children)} */}
                <ScrollView>
                        {recipes.length > 1 && <RecipeList recipes={recipes} forks={children} setRecipes={setRecipes} /> }
                </ScrollView>
        </View>

    )
}

export default Search;