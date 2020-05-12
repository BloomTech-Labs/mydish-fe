import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import theme from '../styles/theme.style';
//Analytics
import { Analytics, Event } from 'expo-analytics';
import { withNavigation } from 'react-navigation';
const analytics = new Analytics('UA-159002245-1');

const HomeCourseTitle = (props) => {
  const { course, img } = props.course;

  const handlePress = () => {
    props.navigation.navigate('Folder', { Course: course }),
      analytics
        .event(new Event('Recipe Book', 'User checked recipe book'))
        .then(() => console.log('Recipes opened'))
        .catch((e) => console.log(e.message));
  };

  return (
    <TouchableOpacity onPress={handlePress} style={{ width: '48%' }}>
      <Image
        source={{ uri: img }}
        style={{
          width: '100%',
          height: 85,
          borderRadius: 4,
        }}
      />
      <Text
        style={{
          fontSize: theme.REGULAR_FONT_SIZE,
          fontFamily: theme.REGULAR_FONT_FAMILY,
          color: theme.DARK_GREY_FONT_COLOR,
          marginBottom: 10,
          lineHeight: 19,
        }}
      >
        {course}
      </Text>
    </TouchableOpacity>
  );
};

export default withNavigation(HomeCourseTitle);
