import { AsyncStorage } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import {
  Alert,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Text,
  View,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { updateUser, getUser } from '../store/users/usersActions';
import styles from '../styles/profileModalStyles';
import authStyles from '../styles/authPageStyles';

import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const EditProfile = (props) => {
  const passwordInput = useRef(null);
  const confirmPasswordInput = useRef(null);
  const emailInput = useRef(null);
  const displayNameInput = useRef(null);
  const avatarInput = useRef(null);
  const dispatch = useDispatch();
  const currentUsername = useSelector((state) => state.auth.username);
  const isEditing = useSelector((state) => state.users.isEditing);
  const [newUserId, setUserId] = useState();
  const displayName = useSelector((state) => state.users.user.display_name);
  const avatar = useSelector((state) => state.users.user.avatar_url);
  const email = useSelector((state) => state.users.user.email);
  const success = useSelector((state) => state.users.success);

  const [updatedValues, setUpdatedValues] = useState({
    password: null,
    confirmPassword: null,
    email: null,
    display_name: null,
    avatar_url: null,
  });

  useEffect(() => {
    setUpdatedValues({
      ...updatedValues,
      email: email ? email : '',
      display_name: displayName ? displayName : '',
      avatar_url: avatar ? avatar : '',
    });
  }, [displayName, avatar, email]);

  const getId = async () => {
    let userId = '';
    try {
      userId = (await AsyncStorage.getItem('userID')) || 'none';
      setUserId(await userId);
      dispatch(getUser(await userId));
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }

    return userId;
  };

  const update = async () => {
    if (updatedValues.password !== updatedValues.confirmPassword) {
      return Alert.alert("Passwords don't match");
    } else {
      await dispatch(updateUser(newUserId, updatedValues));
    }
  };

  useEffect(() => {
    getId();
  }, []);

  return (
    <ScrollView style={authStyles.scrollContainer}>
      <Text style={styles.textFields}>Password</Text>
      <TextInput
        style={authStyles.inputFields}
        ref={passwordInput}
        placeholder="Enter Password"
        placeholderTextColor="black"
        value={updatedValues.password}
        returnKeyType="next"
        onChangeText={(event) =>
          setUpdatedValues({
            ...updatedValues,
            password: event,
          })
        }
      />

      <TextInput
        style={authStyles.inputFields}
        ref={confirmPasswordInput}
        placeholder="Confirm Password"
        placeholderTextColor="black"
        value={updatedValues.confirmPassword}
        returnKeyType="next"
        onChangeText={(event) =>
          setUpdatedValues({
            ...updatedValues,
            confirmPassword: event,
          })
        }
      />
      <Text style={styles.textFields}>Email</Text>
      <TextInput
        style={authStyles.inputFields}
        ref={emailInput}
        defaultValue={`${email}`}
        value={updatedValues.email}
        placeholder="Email"
        placeholderTextColor="black"
        keyboardType="email-address"
        returnKeyType="next"
        onChangeText={(event) =>
          setUpdatedValues({
            ...updatedValues,
            email: event,
          })
        }
      />
      <Text style={styles.textFields}>Display Name</Text>
      <TextInput
        style={authStyles.inputFields}
        ref={displayNameInput}
        defaultValue={`${displayName}`}
        value={updatedValues.display_name}
        placeholder="Nickname"
        placeholderTextColor="black"
        returnKeyType="next"
        onChangeText={(event) =>
          setUpdatedValues({
            ...updatedValues,
            display_name: event,
          })
        }
      />
      <Text style={styles.textFields}>Avatar URL</Text>
      <TextInput
        style={authStyles.inputFields}
        ref={avatarInput}
        autoGrow={false}
        defaultValue={`${avatar}`}
        value={updatedValues.avatar_url}
        placeholder="Avatar Url"
        placeholderTextColor="black"
        returnKeyType="go"
        onChangeText={(event) =>
          setUpdatedValues({
            ...updatedValues,
            avatar_url: event,
          })
        }
      />
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => {
            update();
            props.close();
          }}
        >
          <AntDesign name="checkcircle" size={36} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.close();
          }}
        >
          <MaterialIcons name="cancel" size={40} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditProfile;
