import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../store/singleRecipe/singleRecipeActions";

import Add from "../Add";

const AddNote = () => {
  return (
      <View><Add text="Add Note" /></View>
  )
}

export default AddNote;