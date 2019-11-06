import React, {useEffect} from 'react';
import Recipe from './Recipe';
import {ScrollView, View} from 'react-native';


const RecipeList = (props) => {
    let imageHeight = 0;
    let cardHeight = 0;
    let Margin =3

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
    const adjustCardHeight = () => {
        
        if(cardHeight === 0){  
            console.log("cardHeight 0", cardHeight)
            cardHeight= cardHeight +1
            return 240
        }if(cardHeight===1){
            console.log("cardHeight 1", cardHeight)
            cardHeight = cardHeight +1
            return 200
        }if(cardHeight===2){
            console.log("cardHeight 2", cardHeight)
            cardHeight = cardHeight -2
            return 240
        }if(cardHeight===3){
            console.log("cardHeight 2", cardHeight)
            cardHeight = cardHeight -3
            return 200
        }
    }
    const adjustImageHeight = () => {  
        if(imageHeight === 0){  
            console.log("imageHeight 0", imageHeight)
            imageHeight= imageHeight +1
            return 250
        }if(imageHeight===1){
            console.log("imageHeight 1", imageHeight)
            imageHeight = imageHeight +1
            return 225
        }if(imageHeight===2){
            console.log("imageHeight 2", imageHeight)
            imageHeight = imageHeight -2
            return 225
        }if(imageHeight===3){
            console.log("imageHeight 2", imageHeight)
            imageHeight = imageHeight -3
            return 275
        }
    }

    const adjustMargin = () =>{
        if(Margin === 0){ 
            console.log("Margin 0", Margin)
            Margin= Margin +1
            return 85
        }if(Margin===1){
            console.log("Margin 1", Margin)
            Margin= Margin +1
            return 30
        }if(Margin===2){
            console.log("Margin 2", Margin)
            Margin= Margin +1
            return 15
        }if(Margin===3){
            console.log("Margin 3", Margin)
            Margin= Margin -3
            return 50
        }

    }
    console.log("recipes", recipes)

    return (
        <ScrollView>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', flex: 1}}>
                {/* {recipes.length==1 && <Recipe key={props.title} recipe={recipes} height={adjustHeight()} marg={adjustMargin()}/>} */}
                 {recipes.map( recp =>  <Recipe key={recp.id} recipe={recp} imageHeight={adjustImageHeight()} marg={adjustMargin()} cardHeight={adjustCardHeight()}/>)}
            </View>
         </ScrollView>
    )  
}

export default RecipeList;




