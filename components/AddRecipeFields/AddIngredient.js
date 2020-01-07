import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput } from "react-native";

import styles from "../../styles/individualRecipeStyles";

const AddIngredient = () => {
    const nameInput = useRef(null);

    const quantityInput = useRef(null);

    return (
        <View><Text>ADD ING</Text><TextInput ref={nameInput} autoFocus onSubmitEditing={() => quantityInput.current.focus()}/><TextInput ref={quantityInput}/></View>
        
    )
}

export const AddIngredient;