import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
//Analytics
import { Analytics, Event } from "expo-analytics";
const analytics = new Analytics("UA-159002245-1");

const HomeCourseTitle = props => {
    const { course, img } = props.course;

    const handlePress = () => {
        props.navigation.navigate("Folder", { Course: course }),
            analytics
                .event(new Event("Recipe Book", "User checked recipe book"))
                .then(() => console.log("Recipes opened"))
                .catch(e => console.log(e.message));
    };

    return (
        <View
            style={{
                height: 100,
                marginBottom: "10%",
                width: "50%",
                paddingLeft: 5,
                paddingRight: 5,
                paddingTop: 5,
                paddingBottom: 5,
            }}
        >
            <TouchableOpacity onPress={handlePress}>
                <Image
                    source={{ uri: img }}
                    style={{
                        width: "100%",
                        height: 100,
                        borderRadius: 4,
                    }}
                />
                <Text
                    style={{
                        fontSize: 14,
                        marginBottom: "4%",
                    }}
                >
                    {course}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeCourseTitle;
