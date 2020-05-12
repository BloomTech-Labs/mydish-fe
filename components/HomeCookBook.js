import React from 'react';
import { View } from 'react-native';
import HomeCourseTitle from './HomeCourseTitle';

const HomeCookBook = (props) => {
  const Courses = [
    {
      course: 'Breakfast',
      img:
        'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/breakfast_breakfast-classics_big-two-do-breakfast.jpg',
    },
    {
      course: 'Brunch',
      img: 'https://media.timeout.com/images/105500044/1024/576/image.jpg',
    },
    {
      course: 'Lunch',
      img:
        'https://hips.hearstapps.com/del.h-cdn.co/assets/17/41/1600x1600/square-1507827786-buddha-bowls-delish-1.jpg?resize=640:*',
    },
    {
      course: 'Dinner',
      img:
        'https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_900x675/public/image/2016/09/main/_1501p108-weeknight-lemon-chicken-skillet-dinner.jpg?itok=sGWzw71z',
    },
    {
      course: 'Dessert',
      img:
        'https://cdn3.tmbi.com/toh/GoogleImages/exps19201_RDS011700016SC03_13_2b_WEB.jpg',
    },
    {
      course: 'Snack',
      img: 'https://data.thefeedfeed.com/recommended/post_4483824.jpeg',
    },
  ];

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingVertical: 5,
      }}
    >
      {Courses.map((course, index) => (
        <HomeCourseTitle
          key={index}
          course={course}
          navigation={props.navigation}
        />
      ))}
    </View>
  );
};

export default HomeCookBook;
