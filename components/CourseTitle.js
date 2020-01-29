import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

const CourseTitle = props => {
    const { course, img } = props.course;

    return (
        <View>
            <TouchableOpacity
                onPress={() =>
                    props.navigation.navigate("Folder", { Course: course })
                }
            >
                <View style={{ height: 200, marginBottom: "15%" }}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            marginBottom: "2%",
                        }}
                    >
                        {course}
                    </Text>
                    <Image
                        source={{ uri: img }}
                        style={{
                            width: "100%",
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
