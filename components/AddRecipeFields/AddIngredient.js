import React, {useState} from "react";
import {View} from "react-native";

import Add from "../Add";
import Ingredient from "../Ingredient";
import {useDispatch} from "react-redux";
import {
  setCurrentActive,
  resetCurrentActive,
} from "../../store/singleRecipe/singleRecipeActions";

const AddIngredient = ({currentActive}) => {
  const dispatch = useDispatch();
  const [adding, setAdding] = useState(false);

  const startAdding = () => {
    if (currentActive && currentActive.close) currentActive.close();
    setAdding(true);
    dispatch(
      setCurrentActive({
        type: "add",
        field: "ingredient",
        index: null,
        close: () => setAdding(false),
      }),
    );
  };

  const stopAdding = () => {
    setAdding(false);
    dispatch(resetCurrentActive());
  };

  return (
    <View>
      {adding && (
        <View>
          <Ingredient stopAdding={stopAdding} parent="AddIngredient" />
        </View>
      )}
      {!adding && <Add text="Add Ingredient" submit={startAdding} />}
    </View>
  );
};

export default AddIngredient;
