import { StyleSheet } from 'react-native';
import theme from './theme.style';

module.exports = StyleSheet.create({
  headText: {
    color: theme.DARK_GREY_FONT_COLOR,
    marginTop: 20,
    marginBottom: 16,
    fontSize: theme.REGULAR_FONT_SIZE,
    fontFamily: theme.REGULAR_FONT_FAMILY,
  },
  ingredientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  ingredientText: {
    color: theme.DARK_FONT_COLOR,
    fontSize: theme.REGULAR_FONT_SIZE,
    fontFamily: theme.REGULAR_FONT_FAMILY,
  },
  addButton: {
    marginRight: 14,
  },
  deleteButton: {
    marginLeft: 'auto',
  },
});
