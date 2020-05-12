import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
//Analytics
import { Analytics, Event } from 'expo-analytics';
const analytics = new Analytics('UA-159002245-1');

const CourseTitle = (props) => {
  const { course, img } = props.course;

  const handlePress = () => {
    props.navigation.navigate('Folder', { Course: course }),
      analytics
        .event(new Event('Recipe Book', 'User checked recipe book'))
        .then(() => console.log('Recipes opened'))
        .catch((e) => console.log(e.message));
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <View style={{ height: 200, marginBottom: '15%' }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: '2%',
            }}
          >
            {course}
          </Text>
          <Image
            source={{ uri: img }}
            style={{
              width: '100%',
              height: 200,
              borderRadius: 4,
              paddingRight: 20,
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CourseTitle;
