import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

//ICONS
import LogoutProfileIcon from '../../assets/profile-icon-red.png';
import { Ionicons } from '@expo/vector-icons';

//STYLES
import styles from '../../styles/profileModalStyles';
import icon from '../../styles/navigationHeaderStyles';

const Settings = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.logout} onPress={() => props.logout()}>
        <Image style={icon.profileIcon} source={LogoutProfileIcon} />
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.close} onPress={() => props.closeModal()}>
        <Ionicons name="md-arrow-back" size={24} />
        <Text style={styles.text}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
