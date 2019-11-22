import React, {useState,useEffect}from 'react';
import {TextInput, Text, Image} from 'react-native';
import styles from '../styles/createRecipeStyles';
import add from '../assets/add_circle_32px.png';

const EditInstruction = (props) => {
    const { recipe, setRecipe, index} = props;
    // console.log('instructions in Edit Instruction', props.step);
    console.log('props.step', props.step);


//     output = [];
// for (i = 0; i < recipe.steps.length; i++) {
//     obj = {text: recipe.steps[i]};

//     output.push(obj);

// }
//console.log('testing function for steps', output)

    let [step, setStep] = useState(props.step);
    let [editedSteps, setEditedSteps] = useState([]);

//console.log('edited steps', editedSteps)

    const handleChange = (step) => {
            setStep({body : step});
            //console.log('step inside handlechange',step)
        }
        
        // useEffect(()=>{
        //     // console.log('step in <EditInstruction/>', step);
        // },[step])
        
        const handleBlur = () => {
            const recipeSteps = [...recipe.steps];
            setEditedSteps([...editedSteps, step])
            console.log('new step', step)
            console.log('recipe.steps in the <EditInstruction/> component', recipe.steps)
            console.log('editedSteps in the handleblur function', editedSteps)

        if (editedSteps.length) {
            for (let i=0; i<editedSteps.length; i++) {
                for (let j=0; j<recipeSteps.length; j++) {
                    if (editedSteps[i].body === recipeSteps[j]) {
                        recipeSteps.splice(j,1, step.body);
                    }
                }
            }
            setRecipe({...recipe, steps : recipeSteps });
        } else {
            setRecipe({...recipe, steps : [...recipe.steps, step.body] });
        }
    }

    //console.log('recipe.steps in the instruction component', recipe.steps)

    return (
        <>

            {/* <View style = {, marginBottom: 20, borderWidth: 3, borderColor: "red"}}> */}
                <Text style={{marginLeft: 14}}>Step {index + 1}</Text>
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
                    value={step.body} 
                />
            {/* </View> */}

      </>
    )
}


export default EditInstruction;