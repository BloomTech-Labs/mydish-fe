import React from 'react';
import { useSelector } from 'react-redux';
import Recipe from './Recipe';
import { View, FlatList } from 'react-native';
import FancySpinner from './FancySpinner';

const RecipeList = ({ parent, folder }) => {
  const isLoading = useSelector((store) => store.cookbook.isLoading);

  // If the RecipeList is being rendered from the cookbook,
  //     grab the props that the cookbook is passing down.
  // If the RecipeList ISN'T coming from the cookbook, then we
  //     useSelector to get all of the recipes.
  const recipeList =
    parent === 'cookbook'
      ? folder
      : useSelector((store) => store.allRecipes.recipeList);

  if (isLoading) return <FancySpinner />;

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {recipeList.length !== 0 && (
        <FlatList
          contentContainerStyle={{ paddingBottom: 150 }}
          data={recipeList}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Recipe key={item.id} recipe={item} />}
        />
      )}
    </View>
  );
};

export default RecipeList;
