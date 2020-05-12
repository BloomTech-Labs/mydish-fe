import React, { useEffect } from 'react';
import { View, ScrollView, Text, SafeAreaView } from 'react-native';
import { withNavigation } from 'react-navigation';
import { cookbookHeaderOptions } from './header/navigationHeader';
import { getAllCookbookRecipes } from '../store/cookbook/cookbookAction';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/recipe-styles';
import Recipe from './Recipe';
import FancySpinner from './FancySpinner';
import AddRecipeButton from './AddRecipeButton';

const MyCookBook = ({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.cookbook.isLoading);
  const allCookbookRecipes = useSelector(
    (state) => state.cookbook.entireCookbook
  );

  useEffect(() => {
    dispatch(getAllCookbookRecipes());
  }, [dispatch, getAllCookbookRecipes]);

  const getAllCategories = (allRecipes) => {
    let categoryList = [];
    if (allRecipes) {
      allRecipes.forEach((recipe, _) => {
        if (recipe.tags && recipe.tags[0]) {
          if (!categoryList.includes(recipe.tags[0].name)) {
            categoryList = [...categoryList, recipe.tags[0].name];
          }
        }
      });
    }
    return categoryList;
  };
  const categories = getAllCategories(allCookbookRecipes);

  const cookbookHeadText = () => (
    <View style={styles.cookbookHeadContainer}>
      <Text style={styles.cookbookHeadText}>My Cookbook</Text>
      <AddRecipeButton navigation={navigation} />
    </View>
  );

  const noCookbookRecipes = () => (
    <View style={styles.noRecipeCookbookContainer}>
      {cookbookHeadText()}
      <Text style={styles.noRecipes}>
        You don't have any recipes saved yet.
      </Text>
      <AddRecipeButton navigation={navigation} />
    </View>
  );

  if (loading) return <FancySpinner />;
  if (!loading && allCookbookRecipes.length === 0) return noCookbookRecipes();

  return (
    <SafeAreaView
      style={{
        maxWidth: '90%',
        marginHorizontal: 16,
      }}
    >
      {cookbookHeadText()}
      <ScrollView>
        {categories.map((tag) => {
          return (
            <View key={tag}>
              <Text style={styles.heading}>{tag}</Text>
              {allCookbookRecipes
                .filter((recipeToFilter) => {
                  return recipeToFilter.tags[0].name === tag;
                })
                .map((filteredRecipe) => {
                  const id = filteredRecipe.id;
                  const tag = filteredRecipe.tags[0].name;
                  return (
                    <Recipe
                      key={`${id}.${tag}`}
                      recipe={filteredRecipe}
                      parent={'Cookbook'}
                    />
                  );
                })}
            </View>
          );
        })}
        <View style={{ height: 200 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

MyCookBook.navigationOptions = cookbookHeaderOptions;

export default withNavigation(MyCookBook);
