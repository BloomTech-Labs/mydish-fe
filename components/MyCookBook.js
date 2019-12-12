import React, { useState, useEffect } from "react";
import {
    View,
    TouchableOpacity,
    TextInput,
    Button,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    FlatList,
} from "react-native";
import RecipeList from "./RecipeList";
import axiosWithAuth from "../utils/axiosWithAuth";
import CourseTitle from "./CourseTitle";

const MyCookBook = props => {
    const [test, setTest] = useState([]);
    const [word, setWord] = useState("");

    // console.log('props in MyCookBook', props);

    const Courses = [
        {
            course: "Breakfast",
            img:
                "https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/breakfast_breakfast-classics_big-two-do-breakfast.jpg",
        },
        {
            course: "Brunch",
            img:
                "https://media.timeout.com/images/105500044/1024/576/image.jpg",
        },
        {
            course: "Lunch",
            img:
                "https://hips.hearstapps.com/del.h-cdn.co/assets/17/41/1600x1600/square-1507827786-buddha-bowls-delish-1.jpg?resize=640:*",
        },
        {
            course: "Dinner",
            img:
                "https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_900x675/public/image/2016/09/main/_1501p108-weeknight-lemon-chicken-skillet-dinner.jpg?itok=sGWzw71z",
        },
        {
            course: "Dessert",
            img:
                "https://cdn3.tmbi.com/toh/GoogleImages/exps19201_RDS011700016SC03_13_2b_WEB.jpg",
        },
        {
            course: "Snack",
            img: "https://data.thefeedfeed.com/recommended/post_4483824.jpeg",
        },
    ];

    const grab = async () => {
        const axiosAuth = await axiosWithAuth();
        axiosAuth
            .get(
                `https://recipeshare-development.herokuapp.com/cookbook?category=${word}`,
            )
            .then(res => {
                // console.log("WOOOOW", res.data)
                setTest(res.data);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        grab();
    }, []);
    return (
        <View style={{ width: "90%", marginLeft: "5%" }}>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    alignSelf: "center",
                    marginBottom: "5%",
                    color: `#3BA405`,
                }}
            >
                Your Personal CookBook!
            </Text>
            <ScrollView style={{ paddingBottom: "10%" }}>
                {Courses.map((course, index) => (
                    <CourseTitle
                        key={index}
                        course={course}
                        navigation={props.navigation}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

export default MyCookBook;
