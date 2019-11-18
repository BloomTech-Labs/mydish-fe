import React from 'react';
import {View, Text, Button, Modal} from 'react-native';

const UnlikeModal = (props) => {
    const {categories,modal,setModal, text, route, navigate} = props;
    // console.log('route in UnlikeModal: ',route)
    // console.log('modal in UnlikeModal: ', modal);

    const handlePress = () => {
        console.log('button press in cookbook modal');

        setModal(!modal);

        if (route === 'Folder') {
            navigate();
        }
       
    }

        return (
            <Modal animationType="fade" transparent={true} visible={modal}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 50}}>
                    <View style={{alignItems: 'center', borderWidth: 5, borderRadius: 10, backgroundColor: 'white', padding: 40, borderColor:"#8FCC70"}}>
                    <Text>{text}</Text>
                    {categories.map((cat,i) => <Text key={i}>{cat}</Text>)}
                    <Text>of Your Cookbook</Text>
                    <Button title="Got it!" color='#8FCC70' borderColor="#8FCC70" onPress={handlePress} />
                    </View>
                </View>
            </Modal>
        )
    }

    export default UnlikeModal;
