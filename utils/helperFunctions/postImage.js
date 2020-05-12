import FormData from 'form-data';
import axiosWithAuth from '../axiosWithAuth';

export async function postImage(image, errAlert) {
  const form = new FormData();
  const imageData = {
    uri: image,
    type: 'image/jpeg',
    name: image.split('/').pop(),
  };
  form.append('image', imageData);
  let res;
  try {
    const axiosCustom = await axiosWithAuth();
    res = await axiosCustom({
      method: 'post',
      url: 'image_upload',
      data: form,
      headers: {
        'content-type': `multipart/form-data`,
      },
    });
  } catch (err) {
    console.log('error from postImage', err);
    if (err.response.status === 500) {
      errAlert && errAlert(); // Only call errAlert if it has been passed as an arg.
    }
  }
  return res.data.url;
}
