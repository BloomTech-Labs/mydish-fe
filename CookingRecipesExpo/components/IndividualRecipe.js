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
    const [recipe, setRecipe] = useState({});
    // const [recipe, setRecipe] = useState(props.navigation.getParam('recipe'));
    const naviRecipe = props.navigation.getParam('recipe');
    console.log('recipe from navigation', naviRecipe.title);
    const [userToken,setUserToken] = useState(null);
    const [color, setColor] = useState({active: 'Ingredients'})
    const id =  props.navigation.getParam('recipeID', 'params not passed');
    const [forks, setForks] = useState([]);

    useEffect(() =>{     
        getToken();
        getSingleRecipe();
        getForks();
        console.log('recipe useEffect <IndividualRecipe>', recipe.title);   
    },[id]);

    
   
    async function getToken() {  
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
            setUserToken(token); //the token is used to determine if the <Like> component should be rendered or not
        }
        return token;
    }

    function getSingleRecipe() {
        axios.get(`https://recipeshare-development.herokuapp.com/recipes/${id}`)
                .then(res => {
                    setRecipe(res.data);
                })
                .catch(err => console.log(err));
    }

    async function getForks() {
        try {
            const res = await axios.get(`https://recipeshare-development.herokuapp.com/recipes/all`)
            const allRecipes = res.data;
            const children = allRecipes.filter(rec => rec.ancestor === naviRecipe.id);
            setForks(children);
        } 
        catch(err) {
            console.log(err)
        }
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

        {/* {console.log('forks in return of <IndivdiualRecipe>', forks)} */}
                  
        <FlatList horizontal={true} 
        data={forks} 
        renderItem={({item}) => <Version recipe={item} navigation={props.navigation}/>} 
        keyExtractor={(item) => String(item.id)}
        />

        {/* <FlatList horizontal={true} 
        data={[{recipe: 'cheerios'},{recipe: 'tuna sandwich'}]} 
        renderItem={({item}) => {console.log('item in renderItem', item); return <Version recipe={item} navigation={props.navigation}/>} } 
        keyExtractor={() => Date.now()}
        /> */}

        {/* {console.log('forks in <IndividualRecipe>', forks)} */}

    </ScrollView>
    );
  };

  export default IndividualRecipe;