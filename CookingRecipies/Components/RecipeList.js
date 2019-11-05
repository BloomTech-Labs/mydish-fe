import React, {useEffect} from 'react';
import Recipe from './Recipe';
import {ScrollView, View} from 'react-native';
import Masonry from 'react-native-masonry-layout'




const RecipeList = (props) => {
    let Height = true;

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
    const adjust2 = () => {
        Height = !Height;
        return Height ? 300 : 200;
    }

    return (
        <ScrollView>
            {/* <Masonry
                ref="masonry"
                columns={3} // optional - Default: 2
                renderItem={recipes.map( recp =>  <Recipe recipe={recp} height={adjust1()}/>)}
                /> */}
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                 {recipes.map( recp =>  <Recipe recipe={recp} height={adjust1()}/>)}
            </View>
         </ScrollView>
    )  
}

export default RecipeList;

