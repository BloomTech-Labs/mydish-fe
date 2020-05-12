import { StyleSheet } from 'react-native';
import theme from './theme.style';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    paddingTop: 70,
    height: '100%',
    width: '100%',
  },
  backgroundImg: {
    height: '100%',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '65%',
    paddingVertical: 70,
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    color: '#42C200',
    fontSize: 30,
    fontWeight: 'bold',
  },
  explanationText: {
    textAlign: 'center',
    color: '#363838',
    fontSize: 16,
    marginVertical: 20,
  },
  inputFields: {
    height: 40,
    marginBottom: 25,
    paddingLeft: 10,
    minHeight: '5%',
    borderRadius: theme.INPUT_BORDER_RADIUS,
    borderWidth: 1,
    color: theme.GREY_FONT_COLOR,
    borderColor: theme.INPUT_BORDER_COLOR,
    backgroundColor: theme.INPUT_BACKGROUND_COLOR,
  },
  inputLabelText: {
    color: theme.WHITE_FONT_COLOR,
    marginBottom: 5,
  },
  submitButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    height: 45,
    borderRadius: 5,
    backgroundColor: theme.PRIMARY_COLOR,
    paddingVertical: 10,
    marginTop: 60,
  },
  submitButtonText: {
    textAlign: 'center',
    color: theme.WHITE_FONT_COLOR,
    fontSize: theme.REGULAR_FONT_SIZE,
    fontWeight: theme.BUTTON_FONT_WEIGHT,
  },
  switchAuthPageLink: {
    fontSize: theme.REGULAR_FONT_SIZE,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: theme.PRIMARY_COLOR,
  },
  questionPrompt: {
    color: theme.WHITE_FONT_COLOR,
  },
  promptContainer: {
    flexDirection: 'row',
    marginTop: -20,
  },
  maxLengthIndicator: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: theme.WHITE_FONT_COLOR,
    marginTop: -20,
  },
  scrollContainer: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
});

module.exports = styles;
