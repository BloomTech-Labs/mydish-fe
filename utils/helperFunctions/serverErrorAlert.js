import { Alert } from 'react-native';

export const serverErrorAlert = () => {
  return Alert.alert(
    'Sorry',
    'There was an error when trying to create your recipe. Please try again.',
    [{ text: 'Okay' }]
  );
};
