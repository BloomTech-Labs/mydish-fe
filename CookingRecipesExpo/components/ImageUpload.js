import React from 'react';
import {View, Text, Button} from 'react-native';
// import AWS from 'aws-sdk';
// import { SOME_KEY } from 'react-native-dotenv';
// const access_key = 'AKIA35GJTLYLRXJ3V2NC'
// const secret = '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'
import {access_key, secret_key, identityPoolId, region, bucket} from '../auth';
import image from '../assets/background.png';
import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {identityPoolId,region},
    Storage : {bucket,region}
})

const {Storage} = Amplify;

const upload = () => {
    Storage.put('test.txt','Hello World')
        .then(result => console.log('result from successful upload: ', result))
        .catch(err => console.log('error uploading to s3:', err));
}


function ImageUpload(props) {

    return (
        <View>
            <Text>text chosen automatically.  Click button to upload to S3</Text>
            <Button title="Upload to S3" onPress={upload}/>
        </View>
    )

}

export default ImageUpload;