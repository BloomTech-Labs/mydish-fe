import { StyleSheet } from 'react-native';
import theme from './theme.style';

const styles = StyleSheet.create({
  title: {
    fontFamily: theme.BOLD_FONT_FAMILY,
    color: theme.DARK_GREY_FONT_COLOR,
    fontSize: 18,
    paddingVertical: 3,
    marginTop: 16,
  },
  versionView: {
    marginTop: 16,
  },
  label: {
    fontSize: 16,
    fontFamily: theme.REGULAR_FONT_FAMILY,
    color: theme.PRIMARY_COLOR,
  },
  authorComment: {
    ...theme.REGULAR_FONT,
  },
});

module.exports = styles;
