import React, {useState,useEffect}from 'react';
import {TextInput, Text, Image, TouchableOpacity, View} from 'react-native';
import styles from '../styles/createRecipeStyles';
// import add from '../assets/add_circle_32px.png';

 
const EditInstruction = (props) => {
    const { recipe, setRecipe, index, stepDelete} = props;

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

    const deleteButton = () => {
        stepDelete(index)
      }

    return (
        <>
            {/* <View style = {, marginBottom: 20, borderWidth: 3, borderColor: "red"}}> */}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={deleteButton}>
              <View style={{borderWidth: 0.8, borderColor: '#363838', borderRadius:50, width: 24, height: 24,  marginLeft: 14, alignContent: 'center'}}>
                <View style={{borderTopWidth: 0.8, borderColor: 'red', width: 15, marginTop: '50%', marginLeft: 3.3}}></View>
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