import { StyleSheet } from 'react-native';
import theme from './theme.style';

const styles = StyleSheet.create({
  homepageContainer: {
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: theme.LARGE_FONT_SIZE,
    fontFamily: theme.BOLD_FONT_FAMILY,
    color: theme.DARK_GREY_FONT_COLOR,
    marginVertical: 10,
  },
});

module.exports = styles;
