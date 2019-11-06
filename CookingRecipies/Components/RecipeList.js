import React, {useEffect} from 'react';
import Recipe from './Recipe';
import {ScrollView, View} from 'react-native';


const RecipeList = (props) => {
    let Height = 0;

    const [recipes, setRecipes] = React.useState([]);

    useEffect(() =>{
        setRecipes(props.props)
    },[]);
    // const imgSizer = () => {
    //     const width = Math.floor(100 + Math.random()*100);
    //     console.log(width);
    //     return width;
    // }

    
    const adjust1 = () => {
        Height = !Height;
        return Height ? 200 : 300;
    }
    const adjustHeight = () => {
        
        if(Height === 0){  
            console.log("height 0", Height)
            Height= Height +1
            return 275
        }if(Height===1){
            console.log("height 1", Height)
            Height = Height +1
            return 200
        }if(Height===2){
            console.log("height 2", Height)
            Height = Height -2
            return 250
        }
    }

    const adjustMargin = () =>{
        if(Height === 0){  
            Height= Height +1
            return 10
        }if(Height===1){
            Height = Height +1
            return 15
        }if(Height===2){
            Height = Height -2
            return 25
        }

    }
    console.log("recipes", recipes)

    return (
        <ScrollView>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {/* {recipes.length==1 && <Recipe key={props.title} recipe={recipes} height={adjustHeight()} marg={adjustMargin()}/>} */}
                 {recipes.map( recp =>  <Recipe key={recp.id} recipe={recp} height={adjustHeight()} marg={adjustMargin()}/>)}
            </View>
         </ScrollView>
    )  
}

export default RecipeList;




