import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import { fetchCookbook } from '../store/cookbook/cookbookAction';
import styles from '../styles/recipe-styles';
import FancySpinner from './FancySpinner';
import RecipeList from './RecipeList';
import AddRecipeButton from './AddRecipeButton';
import { logoHeaderPlain } from './header/navigationHeader';

const CookBookFolder = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.cookbook.isLoading);
  const folder = useSelector((state) => state.cookbook.cookbookRecipes);
  const course = props.navigation.getParam('Course', 'params not passed');

  useEffect(() => {
    dispatch(fetchCookbook(course));
  }, [dispatch, fetchCookbook, course]);

  if (loading) {
    return <FancySpinner />;
  } else {
    return (
      <View style={styles.cookbookFolderContainer}>
        <Text style={styles.folderHeadText}>{course}</Text>
        <View style={styles.cookbookFolderRecipeList}>
          {folder.length ? (
            <RecipeList folder={folder} parent="cookbook" />
          ) : (
            <View style={styles.noRecipeCookbookContainer}>
              <Text style={styles.noRecipes}>
                You don't have any {course} recipes in your Cookbook yet.
              </Text>
              <AddRecipeButton navigation={props.navigation} />
            </View>
          )}
        </View>
      </View>
    );
  }
};

CookBookFolder.navigationOptions = logoHeaderPlain;

export default CookBookFolder;
