import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';


const Modal = () => {
    return (
        <View>
        <TouchableOpacity onPress={()  =>  props.navigation.navigate('Courses', {Course: course.course})} >
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

export default Modal;