import React, {useState} from 'react';
import {TextInput, Button, View, TouchableOpacity, Text, Image} from 'react-native';
import styles from '../styles/createRecipeStyles';
import add from '../assets/add_circle_32px.png';

const Instruction = ({ recipe, setRecipe, count, setCount}) => {

    let [step, setStep] = useState({text : ''});
    let [editedSteps, setEditedSteps] = useState([]);

    const handleChange = async (event) => {
            // console.log(event, 'event');
            await setStep({text : event});
            // console.log('step: ', step);  
    }

    const handleSubmit = async () => {
        await setCount(oldCount => oldCount + 1);
    }

    const handleBlur = (event) => {
        const recipeSteps = [...recipe.steps];
        console.log('onBlur event triggered in <Instruction/>');
        setEditedSteps([...editedSteps, step])

        for (let i=0; i<editedSteps.length; i++) {
            for (let j=0; j<recipeSteps.length; j++) {
              if (editedSteps[i].text === recipeSteps[j]) {
                recipeSteps.splice(j,1,step.text);
              }
            }
        }
        
        setRecipe({...recipe, steps : [...recipeSteps] });
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
            </View>

        </View>
      </>
    )
}


export default Instruction;
