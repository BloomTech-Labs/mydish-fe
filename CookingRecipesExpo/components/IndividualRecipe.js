import React, {useState, useEffect} from "react";
import {View,Text, ScrollView, FlatList, Image, TouchableOpacity, AsyncStorage} from 'react-native';
import axios from 'axios'
import styles from '../styles/individualRecipeStyles.js'
import editIcon from '../assets/edit_icon.png';
import clock from '../assets/timer.png';
import logo from '../assets/background.png';
import IndividualRecipeIngredients from './individualRecipeIngredients';
import placeholder from '../assets/recipe-image-placeholder.png';
import styled from 'styled-components';
import Version from './Version';
import Innovator from './StyledComponents/Innovator';
import CookTime from './StyledComponents/CookTime';


const IndividualRecipe = props => {
    const [recipe, setRecipe] = useState(props.navigation.getParam('recipe', 'no recipe param found'))
    const [userToken,setUserToken] = useState(null);
    const [color, setColor] = useState({active: 'Ingredients'})
    const id =  props.navigation.getParam('recipeID', 'params not passed');
    const [recipeList, setRecipeList] = useState(props.navigation.getParam('recipeList', 'no recipeList param found'));
    // console.log('recipeList in <IndividualRecipe>', recipeList);
    // console.log('recipe in <IndividualRecipe>', recipe);
    // console.log('recipeList in <IndividualRecipe>', recipeList);
    const [forked, setForked] = useState([])

    const getToken = async () => {  
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
            setUserToken(token); //the token is used to determine if the <Like> component should be rendered or not
        }
        
        return token;
    }
    
    
    useEffect(() =>{
        // console.log('useEffect navigation props in <IndividualRecipe/>', props.navigation);
        // console.log('id in <IndividualRecipe>', id);
        // console.log('recipeList in <IndividualRecipes> useEffect', recipeList)
        const rl = props.navigation.getParam('recipeList', 'no recipeList param found');
        console.log('recipeList in <IndividualRecipe>', rl);
        setRecipeList(rl);
        const rec = props.navigation.getParam('recipe', 'no recipe param found');
        console.log('recipe in <IndividualRecipe>', rec);
        setRecipe(rec);
        getToken();

        axios.get(`https://recipeshare-development.herokuapp.com/recipes/${id}`)
        .then(res => {
            // console.log('recipe in <IndividualRecipe>', res.data); 
            setRecipe(res.data)
        })
        .catch(err => console.log(err));
        forking();
    },[id]);

   async function forking() {
    //    console.log('recipe in forking() of <IndividualRecipe>', recipe);
    //    console.log('recipeList in forking() of <IndividualRecipe>', recipeList);
        
        // if (recipeList && recipeList.length) {
            const children = recipeList.filter(rec => rec.ancestor === id);
            console.log(`${children.length} children of the recipe with id: ${id}`, );
            setForked(children);
        // }
        

        // for (const recipe of recipeList) {
        //     try {
        //         const res = await axios.get(`https://recipeshare-development.herokuapp.com/recipes/${recipe.id}`)
        //         // console.log(res.data.ancestor === id);
        //         if (res.data.ancestor === id) {
        //             children.push(res.data);
        //         // console.log(children); //prints out data
        //         } else {
        //             continue;
        //         }
        //     } catch(err) {
        //         console.log('err getting recipe', err);
        //     }
            
        // }
        
    }


    const tabsDisplay = (cat) => {
        const newActive= cat
        setColor({active: newActive})
      }

      const capitalize = (string) => {
        const newString = string.replace(/^\w/, c => c.toUpperCase());
        return newString
      }

    const navigateToEdits = () => {
        props.navigation.navigate('Edit', {recipe} )
    }

    return (
     <ScrollView>

            <Image source={recipe.img ? {uri : recipe.img} : placeholder} style={styles.placeholder} />

            <Text style={styles.title}>{recipe.title}</Text>

            <View style={styles.innovatorTime}>
                <Innovator>
                    <Image source={logo} style={styles.icon}/> 
                    <Text>{recipe.innovator_name}</Text>
                </Innovator>

                <CookTime>
                    <Image source={clock} style={styles.icon}/> 
                    <Text>{recipe.minutes} minutes</Text>
                </CookTime>
            </View>


            
         <Text style={styles.tags}>Tags</Text>
             <View style={{borderBottomWidth: 0.3, borderBottomColor: '#6B6F70',}}>
         <View style={styles.tagBox}>
        {recipe.categories && recipe.categories.map( cat => {
            return(
                <View key={cat}>
                    <Text style={styles.individualTags}>{capitalize(cat)}</Text>
                </View>
            )
        })}
        </View>
        </View>
        {userToken &&
        <TouchableOpacity onPress={navigateToEdits}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.editButtonView}>
        <Image source={editIcon} style={styles.editButton}/> 
        </View>
            <Text style={{marginLeft: 10}}>Make changes to recipe</Text>
        </View>
        </TouchableOpacity>}
        
        <View style={styles.ingredients}> 
            <TouchableOpacity onPress={() => tabsDisplay('Ingredients')}>
                <View style={color.active.includes('Ingredients') ? styles.titlesViewBorderIng : styles.titlesViewBorderIngOff}>
                    <Text style={color.active.includes('Ingredients') ? styles.titlesColorWhite : styles.titlesColorBlue}>Ingredients</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => tabsDisplay('Instructions')}>
                <View style={color.active.includes('Instructions') ? styles.titlesViewBorderInstOn : styles.titlesViewBorderInst}>
                    <Text style={color.active.includes('Instructions') ? styles.titlesColorWhite : styles.titlesColorBlue}>Instructions</Text>
                </View>
            </TouchableOpacity>
        </View >
        <View style={styles.details}>
      {recipe.ingredients && recipe.ingredients.map( ing => { return <IndividualRecipeIngredients ing={ing} key={ing.name}color={color}/>})}
         
         {recipe.steps && recipe.steps.map( (step, index) => {
            return(
                <View key={index} style={color.active.includes('Ingredients') ? styles.hidden : styles.stepTextView}>
                        {/* .split('.')[0] */}
                    <Text style={styles.stepText}>{step.ordinal}. {step.body}</Text>
                </View>
            )
        })}
        <View style={{paddingRight:'80%'}}>
        <Text style={ color.active.includes('Ingredients') ? styles.hidden : styles.notes}>NOTES</Text>
       </View>
        <Text style={ color.active.includes('Ingredients') ? styles.hidden :styles.stepTextView}>{recipe.notes}</Text>
        </View>
                  
        <FlatList horizontal={true} 
        data={forked} 
        renderItem={({item}) => <Version key={item.id} recipe={item} 
                                        recipeList={recipeList} 
                                        navigation={props.navigation}/> } 
                                        keyExtractor={item => String(item.id)}
        />

    </ScrollView>
    );
  };

  export default IndividualRecipe;