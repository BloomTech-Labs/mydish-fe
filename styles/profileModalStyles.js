import { StyleSheet } from 'react-native';
import theme from '../styles/theme.style';

const settings = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
};

module.exports = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    width: '100%',
  },
  setting: {
    marginBottom: 55,
  },
  text: {
    fontFamily: theme.REGULAR_FONT_FAMILY,
    fontSize: theme.MEDIUM_FONT_SIZE,
    color: theme.DARK_FONT_COLOR,
    fontWeight: theme.REGULAR_FONT_WEIGHT,
  },
  editprofile: {
    ...settings,
    justifyContent: 'center',
    alignContent: 'center',
  },
  logout: {
    ...settings,
  },
  close: {
    ...settings,
  },

  InputField: {
    marginVertical: 35,
  },
  content: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 50,
  },
  button: {
    fontSize: 24,
  },
  modal: {
    maxWidth: '100%',
  },
  textFields: {
    fontFamily: theme.REGULAR_FONT_FAMILY,
    fontSize: theme.MEDIUM_FONT_SIZE,
    color: theme.DARK_FONT_COLOR,
    fontWeight: theme.REGULAR_FONT_WEIGHT,
    alignSelf: 'center',
  },
});
