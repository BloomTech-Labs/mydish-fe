import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import add from '../assets/add_circle_green.png';
import theme from '../styles/theme.style';

const Add = (props) => {
  const { text, submit } = props;

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={submit}
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
        <Image source={add} style={{ width: 20, height: 20 }} />
        <Text
          style={{
            color: theme.DARK_GREY_FONT_COLOR,
            fontSize: theme.REGULAR_FONT_SIZE,
            marginLeft: 5,
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;
