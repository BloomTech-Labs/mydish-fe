import React, {useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from "../styles/individualRecipeStyles";

function Tab({text, toggleTab, color}) {
  return (
    <TouchableOpacity
      style={styles.tabsTouchable}
      onPress={() => toggleTab(text)}>
      <View
        style={color.active.includes(text) ? styles.showTab : styles.hideTab}>
        <Text
          style={
            color.active.includes(text)
              ? styles.tabTextActive
              : styles.tabTextInactive
          }>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Tab;
