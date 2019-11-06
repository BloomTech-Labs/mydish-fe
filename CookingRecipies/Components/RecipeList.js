import React, {useEffect} from 'react';
import Recipe from './Recipe';
import {ScrollView, View} from 'react-native';


const RecipeList = (props) => {
    let imageHeight = 0;
    let LeftHeight = 0;
    let RightHeight= 0;
    let Margin =0

    const [recipes, setRecipes] = React.useState([]);

    useEffect(() =>{
        setRecipes(props.props)

        console.log("HELLLOOOOO",Math.floor(recipes.length/2)+1)
    },[]);
    // const imgSizer = () => {
    //     const width = Math.floor(100 + Math.random()*100);
    //     console.log(width);
    //     return width;
    // }
    const wow =()=>{
        if(Math.floor(recipes.length/2)  ==0){
            return 1
        }else{
            return Math.floor(recipes.length/2) 
        }
        
    }
    

    // console.log("WOW", recipes.slice(0, wow))
    // console.log("NOW", recipes.slice(wow, recipes.length+1))
    
    const adjust1 = () => {
        Height = !Height;
        return Height ? 200 : 300;
    }
    const LeftHeightAdjustment = () => {
        
        if(LeftHeight === 0){  
            console.log("LeftHeight 0", LeftHeight)
            LeftHeight= LeftHeight +1
            return 200
        }if(LeftHeight===1){
            console.log("LeftHeight 1", LeftHeight)
            LeftHeight = LeftHeight -1
            return 230
        }
    }
    const RightHeightAdjustment = () => {
        
        if(RightHeight === 0){  
            console.log("RightHeight 0", RightHeight)
            RightHeight= RightHeight +1
            return 230
        }if(RightHeight===1){
            console.log("RightHeight 1", RightHeight)
            RightHeight = RightHeight -1
            return 200
        }
    }
    const adjustImageHeight = () => {  
        if(imageHeight === 0){  
            console.log("imageHeight 0", imageHeight)
            imageHeight= imageHeight +1
            return 150
        }if(imageHeight===1){
            console.log("imageHeight 1", imageHeight)
            imageHeight = imageHeight -1
            return 185
        }
    }

    const adjustMargin = () =>{
        if(Margin === 0){ 
            console.log("Margin 0", Margin)
            Margin= Margin +1
            return 0
        }if(Margin===1){
            console.log("Margin 1", Margin)
            Margin= Margin -1
            return 0
        }

    }
    console.log("recipes", recipes.slice(0, wow))

    return (
        <ScrollView>
            <View style={{flexDirection: 'row'}}>
                {/* {recipes.length==1 && <Recipe key={props.title} recipe={recipes} height={adjustHeight()} marg={adjustMargin()}/>} */}
                <View style={{flexDirection: 'column', marginRight: -137, marginLeft: 12}}>
                 {recipes.slice(0, wow()).map( recp =>  <Recipe key={recp.id} recipe={recp} imageHeight={adjustImageHeight()} marg={adjustMargin()} cardHeight={LeftHeightAdjustment()}/>)}
                </View>
                 <View style={{flexDirection: 'column'}}>
                 {recipes.slice(wow(), recipes.length+1).map( recp =>  <Recipe key={recp.id} recipe={recp} imageHeight={adjustImageHeight()} marg={adjustMargin()} cardHeight={RightHeightAdjustment()}/>)}
                </View>
            </View>
         </ScrollView>
    )  
}

export default RecipeList;




