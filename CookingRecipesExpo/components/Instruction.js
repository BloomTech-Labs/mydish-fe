import React from 'react';
import {TextInput, Button, View, TouchableOpacity, Text, Image} from 'react-native';
import styles from '../styles/createRecipeStyles';
import add from '../assets/add_circle_32px.png';

const Instruction = ({ recipe, setRecipe, count, setCount}) => {

    let [step, setStep] = React.useState({text : ''});

    const handleChange = async (event) => {
            // console.log(event, 'event');
            await setStep({text : event});
            // console.log('step: ', step);  
    }

    const handleSubmit = async () => {
        await setCount(oldCount => oldCount + 1);
    }

    const handleBlur = (event) => {
        console.log('onBlur event triggered in <Instruction/>');
        setRecipe({...recipe, steps : [...recipe.steps, step.text] });
    }

    return (
        <>
        <View>
            <View style = {{width: 350, marginBottom: 20}}>
                {/* <Text>Step </Text> */}
                <TextInput 
                    style={{ height: 76, width: 350,  padding: 10, borderWidth: 0.8, borderColor: '#363838', borderRadius: 4}}
                    placeholder=" Add Instructions"
                    multiline={true}
                    onChangeText ={(event) => handleChange(event)}
                    onBlur={handleBlur}
                    value={step.text}
                />
            </View>

            <View>

            {/* <TouchableOpacity onPress={handleSubmit} style = {{flexDirection: 'row'}} >
                
                <Image source={add} style={{width: 20, height: 20}}/> 
                
                <Text style = {{color : 'green', fontSize: 16, marginLeft: 5}}>
                    Add A Steps
                </Text>
               
            </TouchableOpacity>  */}
                {/* <Button title="Add A Step" onPress={handleSubmit} /> */}
            </View>

        </View>
      </>
    )
}


export default Instruction;
