import React, {useState,useEffect}from 'react';
import {TextInput, Text, Image} from 'react-native';
// import styles from '../styles/createRecipeStyles';
// import add from '../assets/add_circle_32px.png';

 
const EditInstruction = (props) => {
    const { recipe, setRecipe, index, count} = props;

    const [step, setStep] = useState(props.step);
    // const [editedSteps, setEditedSteps] = useState(recipe.steps);

//    output = [];
// for (i = 0; i < recipe.steps.length; i++) {
//     obj = {text: recipe.steps[i]};
// }

    const handleChange = (step) => {
            setStep({body : step});
            //console.log('step inside handlechange',step)
        }
        
        // const dynamicValue = editedSteps.length === count ? (step.text ? step.text : editedSteps[index].text) 
        //                     : step.text;
        
       
    const handleBlur = () => {
        // let instructions = recipe.steps.map(st => st.body);
        // // instructions = instructions.map(ins => ins.body);
        // console.log('instructions', instructions);

        // instructions[index] = step.body;
        // console.log('instructions after replacement', instructions);
        // setRecipe({...recipe, steps : instructions});

        let instructions = recipe.steps;
        instructions[index] = step;
        setRecipe({...recipe, steps : instructions});
        // console.log("handle blur triggered in <EditInstruction>");
        // const recipeSteps = [...recipe.steps];
        // setEditedSteps([...editedSteps, step]);
        // const edits = [...editedSteps, step];
        // console.log('new step', step);
        // // console.log('edits', edits);
        // console.log('recipe.steps in the <EditInstruction/> component', recipeSteps);
        // console.log('edits in the handleblur function', edits.length, edits);
        // setRecipe({...recipe, steps : [...recipe.steps, step] });
        // if (edits.length) {
        //     for (let i=0; i<edits.length; i++) {
        //         for (let j=0; j<recipeSteps.length; j++) {
        //             console.log(`edits[${i}]`, edits[i]);
        //             console.log(`recipeSteps[${j}]`, recipeSteps[j]);
        //             if (edits[i].body === recipeSteps[j].body) {
        //                 recipeSteps.splice(j,1, step);
        //             }
        //         }
        //     }
        //     setRecipe({...recipe, steps : recipeSteps });
        // } else {
        //     setRecipe({...recipe, steps : [...recipe.steps, step] });
        // }
    }

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
                    onChangeText ={text => handleChange(text)}
                    onBlur={handleBlur}
                    value={step.body} 
                />
            {/* </View> */}

      </>
    )
}


export default EditInstruction;