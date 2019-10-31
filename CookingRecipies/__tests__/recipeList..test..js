import React from 'react';
import RecipeList from '../Components/RecipeList';
import Recipe from '../Components/Recipe';
import {render, fireEvent} from 'react-native-testing-library';
import renderer from 'react-test-renderer';
import styled from 'styled-components/native';
import homePage from '../Components/homePage';

  test('testing react-native-testing-library', () => {
    const RL = render(<RecipeList/>);
    // console.log("recipe list rendered by react native testing library render() : ", RL)
    const RLSnap = renderer.create(<RecipeList/>).toJSON();
    expect(RLSnap).toMatchSnapshot();
  })

  test('testing homePage', () => {
    const HP = render(<homePage/>);
    console.log('homepage', HP);
    HPSnap = renderer.create(<homePage/>).toJSON();
    expect(HPSnap).toMatchSnapshot();
    const Text = HP.getByText('Hello home page');
    console.log(Text);
    expect(text).toBe('Hello home page');
  })






  



  // test('renders correctly', () => {
  //   const homePageSnap = renderer.create(<homePage/>).toJSON();
  //   expect(homePageSnap).toMatchSnapshot();
  // });


  // it('recipelist', () => {
  //   const recipeList = renderer.create(<RecipeList/>).toJSON();
  //   expect(recipeList).toMatchSnapshot();
  // })






