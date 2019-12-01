const S3 = require('s3-react-uploader');
import backgroundImage from '../assets/background.png';

const config = {
    accessKey : '',
    secretKey : '',
    bucket : '',
    region : ''
}


S3.get('http://s3object_url', config)
    .then(res => console.log(res.data.url))
    .catch(err => console.log(err))

S3.post(backgroundImage, config)
    .then(res => console.log(res.data.url))  //URL returned from the uploaded object
    .catch(err => console.log(err))

S3.put(backgroundImage, config)
    .then(res => console.log(res.data.url))
    .catch(err => console.log(err))

S3.delete('http://s3object_url', config)
    .then(res => console.log(res.data.url))
    .catch(err => console.log(err))