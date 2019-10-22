import React from 'react';
// import styles from '../styles/styles';
import {View,Text} from 'react-native';
import {Card, Button, Image, ThemeProvider} from 'react-native-elements';
// import ipad from '../assets/ipadrecipe.jpg';
const ipad = require('../assets/ipadrecipe.jpg');


const Recipe = (props) => {
    console.log('props in recipes', props);

    const btnClk = () => {
        console.log('native element button has been clicked');
    }
    
    return (
        <>
        <ThemeProvider>
            <View style={{alignItems: 'center'}}>
                <Card title="Recipe Card" >
                    <Text>Sample Recipes</Text>
                    <Image 
                        source={ipad}
                        style={{width: 200, height: 200 }}
                    />
                    <Button title="Details" onClick={btnClk}/>
                </Card>
            </View>
        </ThemeProvider>
        </>
    )
}

export default Recipe;

