import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import {ScrollView, View} from 'react-native';
import axiosWithAuth from '../utils/axiosWithAuth';
import styles from '../styles/recipe-styles';
import RecipeListContainer from './StyledComponents/RecipeListContainer';
import {LeftHeightAdjustment, RightHeightAdjustment, 
    LeftAdjustImageHeight, RightAdjustImageHeight} from '../utils/helperFunctions/recipeListStyleFunctions';

const RecipeList = (props) => {
    let recipeList= props.recipes;

    const [recipes, setRecipes] = useState([]); //namespace collision with the recipes in <Search/>
    let [cookbook, setCookbook] = useState([]);

    const cookbookURL = 'https://recipeshare-development.herokuapp.com/cookbook/';


    const likedByUser = cookbook => {

        recipeList = recipeList.map(rec => {
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

    const getCookbook = async () => {
        try{
            const axiosAuth = await axiosWithAuth();
            const res = await axiosAuth.get(cookbookURL);
            setCookbook(res.data);
            likedByUser(res.data);

        }catch(err){
            setRecipes(recipeList)
        }
        
    }
    
    useEffect(() =>{
        getCookbook();
    },[]);
    

    return (
        <ScrollView >
            <RecipeListContainer>
                <View style={styles.recipeContainer}>
                 {recipes.map( (recp, index) => index%2==0 &&
                        <Recipe key={recp.id} 
                                recipe={recp} recipeList={props.recipes} 
                                setRecipeList={props.setRecipes} imageHeight={LeftAdjustImageHeight()} 
                                cardHeight={LeftHeightAdjustment()}
                                courseType={props.courseType}
                        />)
                 }
                </View>

                 {/* <View style={{flexDirection: 'column', width: "39%", paddingBottom: "60%"}}> */}
                 <View style={styles.recipeContainer}>
                 {recipes.map( (recp, index) => index%2 ==1 && 
                        <Recipe key={recp.id} 
                                recipe={recp}  
                                imageHeight={RightAdjustImageHeight()} 
                                cardHeight={RightHeightAdjustment()}
                                courseType={props.courseType}
                        />)}
                </View>
            </RecipeListContainer>
         </ScrollView>
    )  
}

export default RecipeList;