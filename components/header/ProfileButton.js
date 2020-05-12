import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { profilePageToggle } from '../../store/navigation/navigationActions';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../styles/navigationHeaderStyles';
import profileIcon from '../../assets/profile-icon.png';
import profileIconActive from '../../assets/profile-icon-red.png';
import ProfileModal from './ProfileModal';

export default function ProfileButton() {
  const [hasToken, setHasToken] = useState();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.navigation.profileOpen);
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = () => {
    setIsVisible(false);
  };

  const _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    userToken ? setHasToken(true) : setHasToken(false);
  };

  useEffect(() => {
    _bootstrapAsync();
  }, []);

  const togglePress = () => {
    dispatch(profilePageToggle(!profile));
  };

  return (
    <>
      {hasToken && (
        <TouchableOpacity
          onPress={() => setIsVisible(true)}
          style={styles.leftButton}
        >
          {profile ? (
            <Image source={profileIconActive} style={styles.profileIcon} />
          ) : (
            <Image source={profileIcon} style={styles.profileIcon} />
          )}
          <ProfileModal
            visible={isVisible}
            closeModal={closeModal}
            logout={togglePress}
          />
        </TouchableOpacity>
      )}
    </>
  );
}
