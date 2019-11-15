import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

const Course = (props) => {

    const {course,navigation} = props;
    console.log('props in Course', props);

    return (
        <View>
            <TouchableOpacity onPress={()  => navigation.navigate('Courses', {Course: course.course})} >
                <View style={{ height:200, marginBottom:"15%"}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom:"2%"}}>
                        {course.course}
                    </Text>
                    <Image 
                    source={{uri : course.img}}
                    style={{width: "100%", height: 200, borderRadius: 4, paddingRight: 20 }}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
   
}

export default Course;
