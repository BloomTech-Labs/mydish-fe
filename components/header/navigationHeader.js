import React from 'react';
import RecipeShareLogo from '../RecipeShareLogo';
import ProfileButton from './ProfileButton';
import SearchButton from './SearchButton';

const headerTitle = <RecipeShareLogo />;

export const homepageHeaderOptions = {
  headerLeft: <ProfileButton />,
  headerTitle,
  headerRight: <SearchButton homepage={'homepage'} />,
};

export const logoHeaderPlain = {
  headerTitle,
};

export const cookbookHeaderOptions = {
  headerTitle,
  // headerRight: <SearchButton cookbook={"cookbook"} />,
};
