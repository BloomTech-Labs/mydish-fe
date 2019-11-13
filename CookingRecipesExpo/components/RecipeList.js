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
    let recipeList= props.recipes;

    const [recipes, setRecipes] = useState([]);
    let [cookbook, setCookbook] = useState([]);
    const cookbookURL = 'https://recipeshare-development.herokuapp.com/cookbook/';
    // let cookbook = [];


    const likedByUser = async (cookbook) => {
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
        console.log('recipeList after liking', recipeList);
    }

    const getCookbook = async () => {
        const axiosAuth = await axiosWithAuth();
        const res = await axiosAuth.get(cookbookURL);
        setCookbook(res.data);
        likedByUser(res.data);
    }

    // const getCookbook = () => {
    //     axiosWithAuth().get(cookbookURL)
    //         .then(res => {
    //             console.log(res.data);
    //             setCookbook(res.data);
    //         })
    //         .catch(err => console.log('error from get cookbook', err))
    // }

    

    useEffect(() =>{
        getCookbook();
        setRecipes(props.recipes);
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
            return 230
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
        <ScrollView stryle={{width: "80%"}}>
            <View style={{flexDirection: 'row', marginLeft: "4%"}}>
                <View style={{flexDirection: 'column',width: "39%", marginRight:"10%"}}>
                 {recipes.slice(0, divideArray()).map( recp =>  <Recipe key={recp.id} recipe={recp} imageHeight={LeftadjustImageHeight()} cardHeight={LeftHeightAdjustment()}/>)}
                </View>
                 <View style={{flexDirection: 'column', width: "39%"}}>
                 {recipes.slice(divideArray(), recipes.length+1).map( recp =>  <Recipe key={recp.id} recipe={recp} imageHeight={RightadjustImageHeight()} cardHeight={RightHeightAdjustment()}/>)}
                </View>
            </View>
         </ScrollView>
    )  
}

export default RecipeList;