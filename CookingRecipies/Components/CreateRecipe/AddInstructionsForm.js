import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Image, StyleSheet, Button, Alert, ScrollView, AsyncStorage } from 'react-native';


export default function AddInstructionsForm(props) {

    const initialFormState = {
      title: '',
      minutes: {
        prepTime: '', 
        cookTime: '',
        totalTime: '',
      },
      notes: "",
      categories: [
        ""
      ],
      ingredients: {
        name: "",
        quantity: "",
        unit: ""
      },
      likes: "",
      steps: [
        {
          ordinal: 1,
          body: ""
        },
        {
          ordinal: 1,
          body: ""
        }
      ],
      ancestor: ""
    }  
  
    const [instruction, setInstruction] = useState(initialFormState)
  
    const handleInputChange = e => {
      const { name, value } = e.target;
      setInstruction({ ...instruction, [name]: value })
    }
    return (
        <ScrollView>
             <View style={{ flexDirection: "row", padding: 15, }}>

{/* ==== Instructions === */}

<TextInput
  style={{ height: 40, width: 250, marginLeft: 15, backgroundColor: 'lightgray', padding: 10 }}
  placeholder=" Add Instructions"
  onChange={handleInputChange}
  value={instruction.name}
/>

</View >

{/* ========= Add Instructions View ============== */}

<View style={{ flexDirection: "row", padding: 15 }} >

{/* <Icon name='add' reverse={true}></Icon> */}

<Button
  title="Add Instructions"
  color="black"
  backgroundColor=''
  onPress={() => Alert.alert('Really Random Alert')}
/>
</View> 

 </ScrollView>
)
    
}