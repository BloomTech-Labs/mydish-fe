import { StyleSheet } from 'react-native';
import theme from '../styles/theme.style';

const borderWidth = theme.INPUT_BORDER_WIDTH;
const borderColor = theme.INPUT_BORDER_COLOR;

const styles = StyleSheet.create({
  heading: {
    // fontSize: theme.MEDIUM_FONT_SIZE,
    // fontWeight: "500",
    // color: theme.DARK_GREY_FONT_COLOR,
    marginTop: 12,
    marginBottom: 5,
    flexDirection: 'row',
  },
  headText: {
    color: theme.DARK_GREY_FONT_COLOR,
    fontSize: theme.MEDIUM_FONT_SIZE,
  },
  img: {
    height: 180,
  },
  errors: {
    color: theme.PRIMARY_COLOR,
    fontFamily: theme.SEMI_BOLD_FONT_FAMILY,
    marginTop: 30,
  },
  editInstruction: {
    height: 76,
    padding: 10,
    borderWidth: 5,
    borderColor: '#363838',
    borderRadius: 4,
    marginLeft: 42,
    marginBottom: 20,
    marginRight: 14,
    marginTop: 10,
  },
  deleteButtonIngredient: {
    borderWidth: 0.8,
    borderColor: '#363838',
    borderRadius: 50,
    width: 24,
    height: 24,
    marginLeft: 14,
    alignContent: 'center',
  },
  deleteRedLine: {
    borderTopWidth: 0.8,
    borderColor: 'red',
    width: 15,
    marginTop: '50%',
    marginLeft: 3.3,
  },
  deleteButtonIngredient: {
    borderWidth: 0.8,
    borderColor: '#363838',
    borderRadius: 50,
    width: 24,
    height: 24,
    marginLeft: 14,
    alignContent: 'center',
  },
  tagButton: {
    borderRadius: 50,
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    height: 27,
    paddingHorizontal: 16,
    marginBottom: 8,
    marginRight: 8,
  },
  tagButtonSelected: {
    ...theme.PRIMARY_BUTTON,
    borderColor: theme.PRIMARY_COLOR,
    borderWidth: 1,
  },
  tagButtonUnselected: {
    ...theme.SECONDARY_BUTTON,
  },
  tagText: {
    fontSize: 14,
  },
  fontColorWhite: {
    color: 'white',
  },
  baseText: {
    //   Recipe by:
    fontSize: 15,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textInputStyles: {
    fontSize: 14,
    color: '#363838',
    marginBottom: 10,
  },
  RecipeNameContainer: {
    height: theme.INPUT_HEIGHT,
    borderRadius: 6,
    borderWidth: borderWidth,
    borderColor: borderColor,
    padding: 10,
    marginRight: 14,
    marginBottom: 5,
  },
  totalTimeView: {
    flexDirection: 'row',
  },
  timeInputContainer: {
    height: theme.INPUT_HEIGHT,
    width: 113,
    textAlign: 'left',
    borderRadius: theme.INPUT_BORDER_RADIUS,
    borderWidth: borderWidth,
    borderColor: borderColor,
    paddingLeft: 12,
    marginRight: 30,
    marginBottom: 10,
  },
  notesContainer: {
    flexGrow: 1,
    minHeight: theme.INPUT_HEIGHT,
    paddingHorizontal: 10,
    paddingTop: 10,
    borderWidth: theme.INPUT_BORDER_WIDTH,
    borderColor: theme.INPUT_BORDER_COLOR,
    borderRadius: theme.INPUT_BORDER_RADIUS,
    maxWidth: '90%',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: theme.MARGIN_SIDE_STANDARD,
    marginRight: theme.MARGIN_SIDE_STANDARD,
  },
  dropdownText: {
    //    Text shown before clicking the dropdown
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',
    fontSize: 18,
    marginTop: 15,
  },
  dropdown: {
    //    Text shown in dropdown bar
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',
    fontSize: 15,
    marginTop: 15,
  },
  saveView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64,
    marginBottom: 48,
  },
  generateView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 24,
  },
  add: {
    fontSize: 16,
    color: '#363838',
    marginTop: 25,
    marginLeft: 14,
    marginBottom: 10,
  },
  tagGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  maxLengthIndicator: {
    alignSelf: 'flex-end',
    color: theme.DARK_FONT_COLOR,
    fontSize: 10,
    marginTop: 4,
    marginRight: 14,
  },
  missingAsterisk: {
    color: theme.PRIMARY_COLOR,
    marginLeft: 4,
  },
  highlighted: {
    borderColor: theme.INPUT_BORDER_HIGHLIGHT_COLOR,
    borderWidth: theme.INPUT_BORDER_WIDTH,
  },
});

module.exports = styles;
