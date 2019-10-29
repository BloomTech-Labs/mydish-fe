import React, {useEffect} from 'react';
import Recipe from './Recipe';
import {ScrollView, View} from 'react-native';




const RecipeList = (props) => {

    
    
    let smallHeight = true;

    const [recipes, setRecipes] = React.useState([]);

    useEffect(() =>{
        setRecipes(props.props)
    },[]);
    // const imgSizer = () => {
    //     const width = Math.floor(100 + Math.random()*100);
    //     console.log(width);
    //     return width;
    // }

    const imgSizer = () => {
        smallHeight = !smallHeight;
        return smallHeight ? 130 : 300;
    }

    return (
        <ScrollView>
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                 {recipes.map( recp => <Recipe recipe={recp} height={imgSizer()} />)}
            </View>
         </ScrollView>
    )  
}

export default RecipeList;

