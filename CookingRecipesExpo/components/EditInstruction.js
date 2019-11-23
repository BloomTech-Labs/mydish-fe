import React, {useState,useEffect}from 'react';
import {TextInput, Text, Image, TouchableOpacity, View} from 'react-native';
import styles from '../styles/createRecipeStyles';
// import add from '../assets/add_circle_32px.png';

 
const EditInstruction = (props) => {
    const { recipe, setRecipe, index, stepDelete} = props;

    const [step, setStep] = useState(props.step);

useEffect(() => {
    setStep(props.step)
}, recipe.steps)

    const handleChange = (step) => {
            setStep({body : step});
            //console.log('step inside handlechange',step)
        }
        
    const handleBlur = () => {
        let instructions = recipe.steps;
        instructions[index] = step;
        setRecipe({...recipe, steps : instructions});
    }

    const deleteButton = () => {
        stepDelete(index)
      }

    return (
        <>
            {/* <View style = {, marginBottom: 20, borderWidth: 3, borderColor: "red"}}> */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={deleteButton}>
              <View style={styles.deleteButtonIngredient}>
                <View style={styles.deleteRedLine}></View>
                </View>
               </TouchableOpacity>
                <Text style={{marginLeft: 8}}>Step {index + 1}</Text>
               </View>
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