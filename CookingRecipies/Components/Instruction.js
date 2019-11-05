import React from 'react';
import {TextInput, Button} from 'react-native';




const Instruction = ({recipe, setRecipe, count, setCount}) => {

    let [step, setStep] = React.useState({text : ''});

    const handleChange = (event) => {
            console.log(event, 'event');
            setStep({text : event});
    }

    const handleSubmit = () => {
        setCount(count + 1);
        setRecipe({...recipe, steps : [...recipe.steps, step] });
        console.log('recipe', recipe);
        console.log('step count', count);
    }

    return (
        <>
            <TextInput
            style={{ height: 40, width: 250, marginLeft: 15, backgroundColor: 'lightgray', padding: 10 }}
            placeholder=" Add Instructions"
            onChangeText ={(event) => handleChange(event)}
            value={step}
             />
            <Button title="Add Instruction" onPress={handleSubmit} />
      </>
    )
}


export default Instruction;
