import React, {useEffect} from 'react';
import Recipe from './Recipe';
import {ScrollView, View} from 'react-native';


const RecipeList = (props) => {
    let imageHeight = 0;
    let LeftHeight = 0;
    let RightHeight= 0;

    const [recipes, setRecipes] = React.useState([]);

    useEffect(() =>{
        setRecipes(props.props)

        // console.log("HELLLOOOOO",Math.floor(recipes.length/2)+1)
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
            return 230
        }if(RightHeight===3){
            RightHeight = RightHeight -1
            return 220
        }
    }
    const adjustImageHeight = () => {  
        if(imageHeight === 0){  
            imageHeight= imageHeight +1
            return 150
        }if(imageHeight===1){
            imageHeight = imageHeight -1
            return 185
        }
    }

    return (
        <ScrollView>
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column', marginLeft: "5%" }}>
                 {recipes.slice(0, divideArray()).map( recp =>  <Recipe key={recp.id} recipe={recp} imageHeight={adjustImageHeight()} cardHeight={LeftHeightAdjustment()}/>)}
                </View>
                 <View style={{flexDirection: 'column', marginRight: "150%"}}>
                 {recipes.slice(divideArray(), recipes.length+1).map( recp =>  <Recipe key={recp.id} recipe={recp} imageHeight={adjustImageHeight()} cardHeight={RightHeightAdjustment()}/>)}
                </View>
            </View>
         </ScrollView>
    )  
}

export default RecipeList;