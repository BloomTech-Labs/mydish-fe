import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/individualRecipeStyles';

function Tab({ text, toggleTab, color }) {
  return (
    <TouchableOpacity
      style={styles.tabsTouchable}
      onPress={() => toggleTab(text)}
    >
      <View
        style={{
          ...styles.tab,
          ...(color.active.includes(text) && styles.showTab),
        }}
      >
        <Text
          style={{
            ...styles.tabText,
            ...(color.active.includes(text)
              ? styles.tabTextActive
              : styles.tabTextInactive),
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Tab;
