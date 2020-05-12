import React from 'react';
import { Image } from 'react-native';
import logo from '../assets/LogoRed.png';

export default RecipeShareLogo = () => (
  <Image
    source={logo}
    style={{
      resizeMode: 'contain',
      height: 32,
      marginBottom: 4,
    }}
  />
);
