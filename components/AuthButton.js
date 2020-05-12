import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../styles/authPageStyles';
import * as theme from '../styles/theme.style';

const AuthButton = ({ parent, loginUser, register }) => {
  const isLoading = useSelector((state) => state.auth.isAuthorizing);

  return (
    <TouchableOpacity
      onPress={parent === 'login' ? loginUser : register}
      style={styles.submitButton}
    >
      {isLoading ? (
        <ActivityIndicator size="large" color={theme.default.PRIMARY_COLOR} />
      ) : (
        <Text style={styles.submitButtonText}>
          {parent === 'login' ? 'Sign in' : 'Sign up'}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default AuthButton;
