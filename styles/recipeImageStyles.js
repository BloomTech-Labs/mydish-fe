import { StyleSheet } from 'react-native';
import theme from '../styles/theme.style';

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    height: 180,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  newImage: {
    width: 32,
    height: 32,
    marginRight: 16,
    marginBottom: 16,
    backgroundColor: theme.NAV_BAR_BACKGROUND_COLOR,
    padding: 5,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 22,
    height: 18,
  },
  uploadModal: {
    height: 122,
    marginHorizontal: 59,
    backgroundColor: theme.NAV_BAR_BACKGROUND_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
  },
  singleIconContainer: {
    alignItems: 'center',
  },
  iconLarge: {
    width: 49,
    height: 49,
    marginBottom: 8,
  },
  iconLargeCamera: {
    height: 42,
    width: 49,
  },
  text: {
    fontFamily: theme.BOLD_FONT_FAMILY,
    fontSize: theme.SMALL_FONT_SIZE,
    paddingVertical: 2,
  },
});

module.exports = styles;
