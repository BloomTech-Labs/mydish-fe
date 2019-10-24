import React from 'react';
// import styles from '../styles/styles';
import {View,Text,ScrollView, Image} from 'react-native';
import {Card, Button, ThemeProvider} from 'react-native-elements';
// import ipad from '../assets/ipadrecipe.jpg';
const ipad = require('../assets/ipadrecipe.jpg');
import styled from 'styled-components';



const Recipe = (props) => {

    const {recipe, height} = props;
    console.log('props in recipe', props);

    const RecipeCard = styled.View`
    flex: 1;
    alignItems: center;
    justifyContent: flex-start;
    minWidth: 150;
    marginBottom: 10;
    `;
    
    return (
        <>
            {/* <View style={{flex: 1, minWidth: 160, alignItems: 'center'}}> */}
            <RecipeCard>
                <Image 
                    source={ipad}
                    style={{width: height, height: height }}
                    />
                <Text style={{marginTop: 10, marginBottom: 10}}>Sample Recipe</Text>
                {/* <Button title="Details"/> */}
            </RecipeCard>
        </>
    )
}

export default Recipe;

