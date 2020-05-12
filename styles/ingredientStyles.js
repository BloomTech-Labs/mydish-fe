import { StyleSheet } from 'react-native';
import theme from './theme.style';

module.exports = StyleSheet.create({
  container: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '90%',
  },
  input: {
    height: theme.INPUT_HEIGHT,
    paddingHorizontal: 10,
    borderWidth: theme.INPUT_BORDER_WIDTH,
    borderColor: theme.INPUT_BORDER_COLOR,
    borderRadius: theme.INPUT_BORDER_RADIUS,
    textAlign: 'left',
    fontFamily: theme.REGULAR_FONT_FAMILY,
    fontSize: 16,
  },
  quantity: { width: '25%' },
  units: { width: '25%' },
  name: {
    height: 'auto',
    minHeight: theme.INPUT_HEIGHT,
    width: '45%',
    paddingBottom: 5,
  },
  highlighted: { borderColor: theme.INPUT_BORDER_HIGHLIGHT_COLOR },
});
