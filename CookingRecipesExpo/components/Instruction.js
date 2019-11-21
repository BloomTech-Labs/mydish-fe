import React, {useState}from 'react';
import {TextInput, Text, Image} from 'react-native';
import styles from '../styles/createRecipeStyles';
import add from '../assets/add_circle_32px.png';

const Instruction = ({ recipe, setRecipe, index}) => {
    let [step, setStep] = useState({text : ''});
    let [editedSteps, setEditedSteps] = useState(recipe.steps);

    const handleChange = async (event) => {
            await setStep({text : event});
    }



    const handleBlur = (event) => {
        const recipeSteps = [...recipe.steps];
        setEditedSteps([...editedSteps, step])

        if (editedSteps.length) {
            for (let i=0; i<editedSteps.length; i++) {
                for (let j=0; j<recipeSteps.length; j++) {
                  if (editedSteps[i].text === recipeSteps[j]) {
                    recipeSteps.splice(j,1,step.text);
                  }
                }
            }
            setRecipe({...recipe, steps : recipeSteps });
        } else {
            setRecipe({...recipe, steps : [...recipe.steps, step.text] });
        }
    }

    console.log('recipe.isteps in the instruction component', recipe.steps)

    return (
        <>

            {/* <View style = {, marginBottom: 20, borderWidth: 3, borderColor: "red"}}> */}
                <Text style={{marginLeft: 14}}>Step {index}</Text>
                <TextInput 
                    style={{  
                        height: 76,
                        padding: 10, 
                        borderWidth: 0.8, 
                        borderColor: '#363838',
                         borderRadius: 4,
                         marginLeft: 14, marginBottom: 20,
                        marginRight: 14,
                    marginTop: 10}}
                    placeholder=" Add Instructions"
                    multiline={true}
                    onChangeText ={(event) => handleChange(event)}
                    onBlur={handleBlur}
                    value={step.text}
                />
            {/* </View> */}

      </>
    )
}


export default Instruction;