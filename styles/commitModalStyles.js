import { StyleSheet } from 'react-native';
import theme from '../styles/theme.style';

const styles = StyleSheet.create({
  modalContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(30, 27, 27, 0.45)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'rgba(300, 300, 300, 0.95)',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 59,
  },
  text: {
    textAlign: 'left',
    fontFamily: theme.BOLD_FONT_FAMILY,
    fontSize: theme.REGULAR_FONT_SIZE,
    paddingVertical: 2,
  },
  textInput: {
    fontFamily: theme.REGULAR_FONT_FAMILY,
    padding: 8,
    marginVertical: 16,
    width: '100%',
    maxWidth: '100%',
    minHeight: 109,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.INPUT_BORDER_COLOR,
  },
  highlighted: {
    borderColor: theme.PRIMARY_COLOR,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  narrowButton: {
    width: 100,
    marginBottom: 0,
  },
  cancelButton: {
    ...theme.SECONDARY_BUTTON,
    marginRight: 20,
  },
});

module.exports = styles;
