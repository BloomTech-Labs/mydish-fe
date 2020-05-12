import { StyleSheet } from 'react-native';
import theme from './theme.style';

const headText = {
  fontFamily: theme.BOLD_FONT_FAMILY,
  fontSize: theme.LARGE_FONT_SIZE,
  color: theme.DARK_GREY_FONT_COLOR,
};

const containerMargins = {
  marginHorizontal: theme.MARGIN_SIDE_STANDARD,
};

module.exports = StyleSheet.create({
  cookbookHeadText: {
    ...headText,
  },
  folderHeadText: {
    ...headText,
    margin: 5,
    marginTop: 15,
  },
  cookbookFolderContainer: {
    ...containerMargins,
  },
  cookbookFolderRecipeList: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipeContainer: {
    width: '50%',
    padding: 5,
  },
  cookbookHeadContainer: {
    marginTop: 19,
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    justifyContent: 'space-between',
  },
  cookbookContainer: {
    maxWidth: '100%',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginVertical: 5,
  },
  noRecipes: {
    fontSize: theme.LARGE_FONT_SIZE,
    color: theme.DARK_FONT_COLOR,
    fontFamily: theme.REGULAR_FONT_FAMILY,
    marginTop: '60%',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    marginTop: 5,
    fontSize: 18,
    fontFamily: theme.REGULAR_FONT_FAMILY,
    color: theme.DARK_GREY_FONT_COLOR,
    textAlign: 'left',
    width: '95%',
    maxWidth: '95%',
  },
  cookbookText: {
    marginLeft: 20,
    fontSize: 12,
    fontFamily: theme.BOLD_FONT_FAMILY,
    color: theme.DARK_FONT_COLOR,
    textAlign: 'left',
    width: '100%',
    maxWidth: '100%',
  },
  usercardTxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginBottom: '2%',
  },
  prepView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  cookbookPrepView: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    width: '80%',
  },
  prepAndUsername: {
    fontSize: 11,
    fontFamily: theme.REGULAR_FONT_FAMILY,
    color: theme.DARK_FONT_COLOR,
  },
  addRecipeButton: {
    ...theme.PRIMARY_BUTTON,
  },
  addRecipeButtonText: {
    ...theme.PRIMARY_BUTTON_TEXT,
  },
  noRecipeCookbookContainer: {
    alignItems: 'center',
    marginHorizontal: 19,
  },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  heading: {
    fontSize: theme.MEDIUM_FONT_SIZE,
    fontFamily: theme.BOLD_FONT_FAMILY,
    color: theme.DARK_GREY_FONT_COLOR,
    marginVertical: 10,
  },
});
