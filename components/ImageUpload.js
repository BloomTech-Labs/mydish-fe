import React, { useState, useEffect } from "react";
import { View, Text, Button, Image } from "react-native";
import { identityPoolId, region, bucket, accessKey, secretKey } from "../auth";
import image from "../assets/background.png";
import { RNS3 } from "react-native-aws3";
import * as ImagePicker from "expo-image-picker";
// import { Permissions, Constants } from 'expo';
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

import Amplify, { Storage } from "aws-amplify";

Amplify.configure({
    Auth: { identityPoolId, region },
    Storage: { bucket, region },
});

//  import AWS from 'aws-sdk';
// AWS.config.update({
//     region,
//     credentials : new AWS.CognitoIdentityCredentials({IdentityPoolId})
// })

// const upload = () => {

//     const file = {
//         uri : 'file:///Users/ayunas/Documents/lambda/cooking-recipe-source-control-fe/CookingRecipesExpo/assets/background.png',
//         name : 'recipeShare_logo.png',
//         type: 'image/png'
//     }

//     console.log(file.uri);

//     const options = {
//         keyPrefix : "public/",
//         bucket,
//         region,
//         accessKey,
//         secretKey,
//         successActionStatus: 201
//     }

//     RNS3.put(file, options)
//         .progress(event => {
//             console.log(`percent: ${event.percent}`);
//         })
//         .then(res => {
//             if (res.status === 201) {
//                 console.log('response from successful upload to s3:', res.body);
//             } else {
//                 console.log('status code: ', res.status);
//             }
//         })
//         .catch(err => {
//             console.log('error uploading to s3', err)
//         })

// Storage.put('logo.png', image, {contentType: 'image/png'})
//     .then(result => console.log('result from successful upload: ', result))
//     .catch(err => console.log('error uploading to s3:', err));

// const s3 = new AWS.S3({
//     apiVersion: "2006-03-01",
//     params : {Bucket}
// });

// const params = {
//     Body: <Binary String />,
//     Bucket,
//     Key: "sample-image.png"
// };

// s3.putObject(params, (err,data) => {
//     if (err) console.log(err, err.stack);
//     else console.log(data);
// })
// }

// const get = () => {
//     Storage.get('recipeShare_logo.png')
//         .then(res => console.log('result get', res))
//         .catch(err => console.log('err getting', err))
// }

function ImageUpload({ setPic }) {
    // const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    // const { set } = props;

    useEffect(() => {
        // Permissions.askAsync(Permissions.CAMERA_ROLL);
        // setHasCameraPermission(status === "granted");
        getPermissionAsync();
    }, []);

    async function getPermissionAsync() {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(
                Permissions.CAMERA_ROLL,
            );
            if (status !== "granted") {
                alert(
                    "Sorry, we need camera roll permissions to make this work!",
                );
            }
        }
    }

    async function s3Upload(uri) {
        console.log("uri in s3Upload", uri);
        const file = {
            uri,
            name: uri.match(/.{12}\.(png|jpg|jpeg)$/)[0],
            // type : `image/${this.name.match(/.{3,4}$/)}`
        };
        file.type = `image/${file.name.match(/\w{3,4}$/)}`; //sets the filetype to be depending on the type of image.  png/jpg/jpeg

        const options = {
            keyPrefix: "public/",
            bucket,
            region,
            accessKey,
            secretKey,
            successActionStatus: 201,
        };

        RNS3.put(file, options)
            .progress(event => {
                console.log(`percentage uploaded: ${event.percent}`);
            })
            .then(res => {
                if (res.status === 201) {
                    console.log(
                        "response from successful upload to s3:",
                        res.body,
                    );
                    console.log("S3 URL", res.body.postResponse.location);
                    setPic(res.body.postResponse.location);
                    // setRecipe({...recipe, img: res.body.postResponse.location })
                } else {
                    console.log("error status code: ", res.status);
                }
            })
            .catch(err => {
                console.log("error uploading to s3", err);
            });
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log("image picker result", result);

        if (!result.cancelled) {
            setImage(result.uri);
            s3Upload(result.uri);
        }
    };

    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Button title="Select Image from Camera Roll" onPress={pickImage} />
            {image && (
                <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                />
            )}
            {/* <Image style={{width: 100, height: 100}} source={image} /> */}
            {/* <Text>Click button to upload above image to S3</Text> */}
            {/* <Button title="Upload to S3" onPress={upload}/>
            <Button title="Get from S3" onPress={get}/> */}
        </View>
    );
}

export default ImageUpload;
