import React from 'react';
import { TextInput } from 'react-native';
import styles from '../styles/search.styles';
//Analytics
import { Analytics, Event } from 'expo-analytics';
const analytics = new Analytics('UA-160806654-1');

const Search = (props) => {
  const { dish, setDish } = props;

  const searching = () => {
    analytics
      .event(new Event('Searchbar', 'User searching for recipes'))
      .then(() => console.log('Searchbar accessed'))
      .catch((e) => console.log(e.message));
  };

  return (
    <TextInput
      style={styles.textInput}
      placeholder="What dish are you looking for?"
      placeholderTextColor="#D3D3D3"
      value={dish}
      onChangeText={(text) => setDish(text)}
      onFocus={searching}
    />
  );
};

export default Search;
