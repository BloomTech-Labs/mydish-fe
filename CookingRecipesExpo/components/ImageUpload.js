import React from 'react';
import {View, Text, Button, Image} from 'react-native';
// import AWS from 'aws-sdk';
// import { SOME_KEY } from 'react-native-dotenv';
// const access_key = 'AKIA35GJTLYLRXJ3V2NC'
// const secret = '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'
import {identityPoolId, region, bucket} from '../auth';
import image from '../assets/background.png';
// const image = require('../assets/background.png');
import Amplify, {Storage} from 'aws-amplify';

Amplify.configure({
    Auth: {identityPoolId,region},
    Storage : {bucket,region}
})

const upload = () => {
    Storage.put('logo.jpg', image, {contentType: 'image/jpeg'})
        .then(result => console.log('result from successful upload: ', result))
        .catch(err => console.log('error uploading to s3:', err));
}

const get = () => {
    Storage.get('amir.txt')
        .then(res => console.log('result get', res))
        .catch(err => console.log('err getting', err))
}

function ImageUpload(props) {

    return (
        <View style={{alignItems : 'center'}}>
            <Image style={{width: 100, height: 100}} source={image} />
            <Text>Click button to upload above image to S3</Text>
            <Button title="Upload to S3" onPress={upload}/>
            <Button title="Get from S3" onPress={get}/>
        </View>
    )

}

export default ImageUpload;