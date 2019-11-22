import React, {useState,useEffect}from 'react';
import {TextInput, Text, Image} from 'react-native';
import styles from '../styles/createRecipeStyles';
// import add from '../assets/add_circle_32px.png';

 
const EditInstruction = (props) => {
    const { recipe, setRecipe, index, count} = props;

    const [step, setStep] = useState(props.step);

    const handleChange = (step) => {
            setStep({body : step});
            //console.log('step inside handlechange',step)
        }
        
    const handleBlur = () => {
        let instructions = recipe.steps;
        instructions[index] = step;
        setRecipe({...recipe, steps : instructions});
    }

    return (
        <>
            {/* <View style = {, marginBottom: 20, borderWidth: 3, borderColor: "red"}}> */}
                <Text style={{marginLeft: 14}}>Step {index + 1}</Text>
                <TextInput 
                    style={styles.editInstruction}
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