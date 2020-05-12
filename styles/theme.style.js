import * as Font from 'expo-font';

Font.loadAsync({
  'nunito sans': require('../assets/fonts/NunitoSans-Regular.ttf'),
  'nunito sans bold': require('../assets/fonts/NunitoSans-Bold.ttf'),
  'nunito sans semi-bold': require('../assets/fonts/NunitoSans-SemiBold.ttf'),
});
const regularFontFamily = 'nunito sans';
const boldFontFamily = 'nunito sans bold';
const darkFontColor = '#1E1B1B';
const regularFontSize = 14;
const primaryColor = '#D2291F';
const button = {
  width: 136,
  height: 32,
  marginBottom: 20,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
};
const buttonText = {
  fontFamily: boldFontFamily,
  fontSize: 16,
};
export default {
  PRIMARY_COLOR: primaryColor,
  HOVER_COLOR: '#B82D25',
  ACCENT_COLOR: '#EBC953',
  DISABLED_COLOR: '#D7665F',
  NAV_BAR_BACKGROUND_COLOR: '#F1F1F1',
  DARK_FONT_COLOR: darkFontColor,
  GREY_FONT_COLOR: '#959595',
  DARK_GREY_FONT_COLOR: '#525252',
  WHITE_FONT_COLOR: '#FFFFFF',
  INPUT_BACKGROUND_COLOR: '#FFFFFF',
  INPUT_BORDER_COLOR: '#D4D4D4',
  INPUT_BORDER_HIGHLIGHT_COLOR: '#3FA2F7',
  INPUT_BORDER_WIDTH: 1,
  INPUT_BORDER_RADIUS: 6,
  INPUT_HEIGHT: 36,
  INPUT_WIDTH_SHORT: 48,
  REGULAR_FONT_FAMILY: regularFontFamily,
  BOLD_FONT_FAMILY: boldFontFamily,
  SEMI_BOLD_FONT_FAMILY: 'nunito sans semi-bold',
  REGULAR_FONT_SIZE: regularFontSize,
  SMALL_FONT_SIZE: 12,
  MEDIUM_FONT_SIZE: 18,
  LARGE_FONT_SIZE: 24,
  REGULAR_FONT_WEIGHT: 'normal',
  REGULAR_FONT: {
    fontFamily: regularFontFamily,
    fontSize: regularFontSize,
    color: darkFontColor,
  },
  INPUT_FONT_FAMILY: 'Roboto',
  SUBHEADING_FONT_SIZE: 14,
  SUBHEADING_FONT_WEIGHT: 600,
  TITLE_FONT_WEIGHT: 'bold',
  BUTTON_FONT_WEIGHT: 'bold',
  MARGIN_SIDE_STANDARD: 16,
  DEBUG_BORDER: { borderWidth: 1, borderColor: '#f00' },
  PRIMARY_BUTTON: { ...button, backgroundColor: primaryColor },
  SECONDARY_BUTTON: {
    ...button,
    borderWidth: 1,
    borderColor: primaryColor,
    marginRight: 35,
  },
  PRIMARY_BUTTON_TEXT: { ...buttonText, color: '#FFF' },
  SECONDARY_BUTTON_TEXT: { ...buttonText, color: primaryColor },
};
