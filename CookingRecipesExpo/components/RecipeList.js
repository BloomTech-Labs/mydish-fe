import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import {ScrollView, View} from 'react-native';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';


const RecipeList = (props) => {

    let LeftimageHeight = 0;
    let RightimageHeight = 0;
    let LeftHeight = 0;
    let RightHeight= 0;
    // console.log('props in <RecipeList>', props);

    let recipeList= props.recipes;

<<<<<<< HEAD

    useEffect(() =>{
        setRecipes(props.props)
=======
    const [recipes, setRecipes] = useState([]); //namespace collision with the recipes in <Search/>
    let [cookbook, setCookbook] = useState([]);
    const cookbookURL = 'https://recipeshare-development.herokuapp.com/cookbook/';
    // let cookbook = [];

    const likedByUser = cookbook => {
        // console.log('cookbook', cookbook);
        // console.log('props.recipes', props.recipes);
        recipeList = recipeList.map(rec => {
            // console.log('rec id', rec.id);
            // console.log('found rec in cookbook', cookbook.find(({id}) => id === rec.id));
            const match = cookbook.find(({id}) => id === rec.id);
            if (match) {
              rec.likedByUser = true;
            } else {
              rec.likedByUser = false;
            }
          return rec;
        })
        setRecipes(recipeList);
    }
>>>>>>> 6692060124b6ada24288c290d8a38c81e1731c09

    const getCookbook = async () => {
        const axiosAuth = await axiosWithAuth();
        const res = await axiosAuth.get(cookbookURL);
        setCookbook(res.data);
        likedByUser(res.data);
    }
    
    useEffect(() =>{
        getCookbook();
    },[]);
    
    const divideArray =()=>{
        if(Math.floor(recipes.length/2)  ==0){
            return 1
        }else{
            return Math.floor(recipes.length/2) 
        }      
    }
    
    const LeftHeightAdjustment = () => {    
        if(LeftHeight === 0){  
            LeftHeight= LeftHeight +1
            return 220
        }if(LeftHeight===1){
            LeftHeight = LeftHeight -1
            return 240
        }
    }
    const RightHeightAdjustment = () => {     
        if(RightHeight === 2){  
            RightHeight= RightHeight +1
            return 235
        }if(RightHeight===3){
            RightHeight = RightHeight -1
            return 225
        }
    }
    const LeftadjustImageHeight = () => {  
        if(LeftimageHeight === 0){  
            LeftimageHeight= LeftimageHeight +1
            return 150
        }if(LeftimageHeight===1){
            LeftimageHeight = LeftimageHeight -1
            return 185
        }
    }
    const RightadjustImageHeight = () => {  
        if(RightimageHeight === 0){  
            RightimageHeight= RightimageHeight +1
            return 185
        }if(RightimageHeight===1){
            RightimageHeight = RightimageHeight -1
            return 150
        }
    }

    return (
        <ScrollView >
            <View style={{flexDirection: 'row', marginLeft: "4%"}}>
<<<<<<< HEAD
                <View style={{flexDirection: 'column',width: "39%", marginRight:"10%", paddingBottom: "40%"}}>
                 {recipes.slice(0, divideArray()).map( recp =>  <Recipe key={recp.id} recipe={recp} imageHeight={LeftadjustImageHeight()} cardHeight={LeftHeightAdjustment()} status={props.status}/>)}
                </View>
                 <View style={{flexDirection: 'column', width: "39%", paddingBottom: "40%"}}>
                 {recipes.slice(divideArray(), recipes.length+1).map( recp =>  <Recipe key={recp.id} recipe={recp} imageHeight={RightadjustImageHeight()} cardHeight={RightHeightAdjustment()} status={props.status}/>)}
=======
                <View style={{flexDirection: 'column',width: "39%", marginRight:"10%"}}>
                 {
                 recipes.slice(0, divideArray()).map( recp =>  
                 <Recipe key={recp.id} 
                 recipe={recp} recipeList={props.recipes} 
                 setRecipeList={props.setRecipes} imageHeight={LeftadjustImageHeight()} 
                 cardHeight={LeftHeightAdjustment()}/>)
                 }
                </View>
                 <View style={{flexDirection: 'column', width: "39%"}}>
                 {recipes.slice(divideArray(), recipes.length+1).map( recp =>  <Recipe key={recp.id} recipe={recp} recipeList={props.recipes} setRecipeList={props.setRecipes} imageHeight={RightadjustImageHeight()} cardHeight={RightHeightAdjustment()}/>)}
>>>>>>> 6692060124b6ada24288c290d8a38c81e1731c09
                </View>
            </View>
         </ScrollView>
    ) 
     
}

export default RecipeList;