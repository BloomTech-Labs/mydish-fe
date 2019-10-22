import React from 'react';
// import styles from '../styles/styles';
import {View,Text,ScrollView} from 'react-native';
import {Card, Button, Image, ThemeProvider} from 'react-native-elements';
// import ipad from '../assets/ipadrecipe.jpg';
const ipad = require('../assets/ipadrecipe.jpg');


const Recipe = (props) => {
    console.log('props in recipes', props);

    const btnClk = () => {
        console.log('native element button has been clicked');
    }
    
    return (
            <View style={{width: 200, alignItems: 'center'}}>
                <Card title="Recipe Card">
                    <Text>Sample Recipe</Text>
                    <Image 
                        source={ipad}
                        style={{width: 200, height: 200 }}
                        />
                    <Button title="Details" onClick={btnClk}/>
                </Card>
            </View>
    )
}

export default Recipe;

