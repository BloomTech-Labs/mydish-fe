import React, { useState, useEffect } from 'react';
import { View, Text, Modal, Alert, TouchableOpacity } from 'react-native';
import Settings from '../header/Settings';
import EditProfile from '../EditProfile';
import { useSelector } from 'react-redux';

//ICONS

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//STYLES
import styles from '../../styles/profileModalStyles';

const ProfileModal = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const { logout } = props;
  const { visible } = props;
  const { closeModal } = props;
  const success = useSelector((state) => state.users.success);

  useEffect(() => {
    success
      ? Alert.alert('Success!', 'Your profile has been successfully updated!')
      : '';
  }, [success]);

  const changeHandler = () => {
    isEditing ? setIsEditing(false) : setIsEditing(true);
  };

  return (
    <Modal
      style={(styles.modal, { backgroundColor: 'black' })}
      visible={props.visible}
      animationType="fade"
      onRequestClose={() => {
        Alert.alert(
          'Close Window',
          'Are you sure you want to go back?',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => props.closeModal(),
            },
          ],
          { cancelable: false }
        );
      }}
    >
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.editprofile}
            onPress={() => {
              setIsEditing(true);
            }}
          >
            <MaterialCommunityIcons name="playlist-edit" size={40} />
            <Text style={styles.text}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        {isEditing ? (
          <EditProfile close={changeHandler} />
        ) : (
          <Settings logout={logout} visible={visible} closeModal={closeModal} />
        )}
      </View>
    </Modal>
  );
};

export default ProfileModal;
