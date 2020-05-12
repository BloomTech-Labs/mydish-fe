import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { searchHomepage } from '../../store/navigation/navigationActions';
import styles from '../../styles/navigationHeaderStyles';
import searchIcon from '../../assets/search-icon.png';
import searchIconActive from '../../assets/search-icon-red.png';

export default function SearchButton(props) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.navigation.profileOpen);
  const search = useSelector((state) => state.navigation.search);

  const togglePress = () => {
    if (profile) return;

    if (props.homepage) {
      dispatch(searchHomepage(!search.homepage));
    }
  };

  return (
    <TouchableOpacity onPress={togglePress} style={styles.rightButton}>
      {search.homepage ? (
        <Image source={searchIconActive} style={styles.searchIcon} />
      ) : (
        <Image source={searchIcon} style={styles.searchIcon} />
      )}
    </TouchableOpacity>
  );
}
