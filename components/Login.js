import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, loginUser } from '../store/auth/authActions';
import styles from '../styles/authPageStyles.js';
import backgroundImg from '../assets/auth-page-background.jpg';
import AuthButton from './AuthButton';
import { logoHeaderPlain } from './header/navigationHeader';

//Analytics
import { Analytics, Event } from 'expo-analytics';

const analytics = new Analytics('UA-160806654-1');

const Login = ({ navigation }) => {
  const [credentials, setLogin] = useState({ username: '', password: '' });
  const errorMsg = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  useEffect(() => {
    if (errorMsg != null) {
      emptyFieldsAlert();
    }
  }, [errorMsg]);

  const _loginUser = async () => {
    const success = await dispatch(loginUser(credentials));

    if (success) {
      navigation.navigate('App');
    }
    analytics
      .event(new Event('Login', 'User logged in'))
      .then(() => console.log('User logged in'))
      .catch((e) => console.log(e.message));
  };

  const emptyFieldsAlert = () => {
    return Alert.alert(
      'Oops!',
      'Please provide a valid username and password.',
      [{ title: 'Okay' }]
    );
  };

  return (
    <SafeAreaView>
      <ImageBackground source={backgroundImg} style={styles.backgroundImg}>
        <KeyboardAvoidingView behavior="height">
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.contentContainer}>
                <Text style={styles.inputLabelText}>Username</Text>
                <TextInput
                  ref={usernameInput}
                  style={styles.inputFields}
                  name="username"
                  testID="username"
                  value={credentials.username}
                  returnKeyType="next"
                  onSubmitEditing={() => passwordInput.current.focus()}
                  onChangeText={(event) =>
                    setLogin({
                      ...credentials,
                      username: event,
                    })
                  }
                />
                <Text style={styles.inputLabelText}>Password</Text>
                <TextInput
                  ref={passwordInput}
                  style={styles.inputFields}
                  name="password"
                  testID="password"
                  value={credentials.password}
                  returnKeyType="done"
                  onChangeText={(event) =>
                    setLogin({
                      ...credentials,
                      password: event,
                    })
                  }
                  secureTextEntry={true}
                  onSubmitEditing={_loginUser}
                />

                <View style={styles.promptContainer}>
                  <Text style={styles.questionPrompt}>
                    Don't have an account?{' '}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(clearError());
                      navigation.navigate('Signup');
                    }}
                  >
                    <Text style={styles.switchAuthPageLink}>Sign Up</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    flexDirection: 'row-reverse',
                    marginRight: 16,
                  }}
                >
                  <AuthButton
                    parent="login"
                    credentials={credentials}
                    loginUser={_loginUser}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};
Login.navigationOptions = logoHeaderPlain;

export default Login;
