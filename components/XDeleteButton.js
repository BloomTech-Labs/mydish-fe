import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import x_delete from '../assets/delete_circle_red.png';

const XDeleteButton = ({ action }) => {
  return (
    <TouchableOpacity onPress={action}>
      <Image style={{ width: 20, height: 20 }} source={x_delete} />
    </TouchableOpacity>
  );
};

export default XDeleteButton;
