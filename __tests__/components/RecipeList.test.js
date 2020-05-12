import React from 'react';
import renderer from 'react-test-renderer';
import RecipeList from '../../components/RecipeList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('<RecipeList />', () => {
  it('matches snapshot', () => {
    // The RecipeList component needs a few things from the store,
    //     so we create a simple store for those things:
    const store = createStore(() => {
      return {
        allRecipes: { recipeList: [] },
        cookbook: { cookbookRecipes: [] },
      };
    });

    // Then we create our component tree with the provider:
    const renderTree = (
      <Provider store={store}>
        <RecipeList />
      </Provider>
    );
    const tree = renderer.create(renderTree).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
