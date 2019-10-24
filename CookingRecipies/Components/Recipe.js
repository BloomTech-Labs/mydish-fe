import React from 'react';
// import styles from '../styles/styles';
import {View,Text,ScrollView, Image} from 'react-native';
import {Card, Button, ThemeProvider} from 'react-native-elements';
// import ipad from '../assets/ipadrecipe.jpg';
const ipad = require('../assets/ipadrecipe.jpg');
import styled from 'styled-components';



const Recipe = ({recipe}) => {

    const RecipeCard = styled.View`
    flex: 1;
    alignItems: center;
    minWidth: 200;
    `;
    
    return (
        <>
            {/* <View style={{flex: 1, minWidth: 160, alignItems: 'center'}}> */}
            <RecipeCard>
                <Image 
                    source={ipad}
                    style={{width: 130, height: 180 }}
                    />
                <Text style={{marginTop: 10}}>Sample Recipe</Text>
                <Button title="Details"/>
            </RecipeCard>
            {/* <View style={{flex: 4, minWidth: 140, alignItems: 'center'}}>
            <Card title="Recipe Card">
                <Text>Sample Recipe</Text>
                <Image 
                    source={ipad}
                    style={{width: 130, height: 100 }}
                    />
                <Button title="Details"/>
            </Card>
        </View> */}
        </>
    )
}

export default Recipe;

