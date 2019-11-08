import React, {useState}from 'react';
import {TextInput, Button, View, TouchableOpacity, Text, Image} from 'react-native';
import styles from '../styles/createRecipeStyles';
import add from '../assets/add_circle_32px.png';

const Instruction = ({ recipe, setRecipe, count, setCount}) => {
    let [step, setStep] = useState({text : ''});
    let [editedSteps, setEditedSteps] = useState([]);
    // let [recipeSteps, setRecipeSteps] = useState(recipe.steps);

    const handleChange = async (event) => {
            // console.log(event, 'event');
            await setStep({text : event});
            // console.log('step: ', step);  
    }

    // const handleSubmit = async () => {
    //     await setCount(oldCount => oldCount + 1);
    // }

    const handleBlur = (event) => {
        const recipeSteps = [...recipe.steps];
        // console.log('onBlur event triggered in <Instruction/>');
        setEditedSteps([...editedSteps, step])
        // console.log('editedSteps', editedSteps);
        // console.log('recipeSteps before splicing',recipeSteps);

        if (editedSteps.length) {
            for (let i=0; i<editedSteps.length; i++) {
                for (let j=0; j<recipeSteps.length; j++) {
                  if (editedSteps[i].text === recipeSteps[j]) {
                    recipeSteps.splice(j,1,step.text);
                  }
                }
            }
            // console.log('recipeSteps after splice and insert',recipeSteps);
            // console.log('there are edited steps')
            setRecipe({...recipe, steps : recipeSteps });
        } else {
            setRecipe({...recipe, steps : [...recipe.steps, step.text] });
        }
    }

    return (
        <>

            <View style = {{width: "98%", marginBottom: 20, borderWidth: 3, borderColor: "red"}}>
                {/* <Text>Step </Text> */}
                <TextInput 
                    style={{  
                        height: 76,
                        padding: 10, 
                        borderWidth: 0.8, 
                        borderColor: '#363838',
                         borderRadius: 4,
                         marginLeft: 14}}
                    placeholder=" Add Instructions"
                    multiline={true}
                    onChangeText ={(event) => handleChange(event)}
                    onBlur={handleBlur}
                    value={step.text}
                />
            </View>

      </>
    )
}


export default Instruction;