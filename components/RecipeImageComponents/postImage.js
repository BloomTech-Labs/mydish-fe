import FormData from "form-data";
import axiosWithAuth from "../../utils/axiosWithAuth";
import axios from "axios";

async function postImage(image, errAlert) {
    const form = new FormData();
    const imageData = {
        uri: image,
        type: "image/jpeg",
        name: image.split("/").pop(),
    };
    form.append("image", imageData);
    let res;
    try {
        // const axiosCustom = await axiosWithAuth(); TODO: Update to axiosWithAuth()
        res = await axios({
            method: "post",
            url: "http://1e08d3d1.ngrok.io/image_upload",
            data: form,
            headers: {
                "content-type": `multipart/form-data`,
            },
        });
    } catch (err) {
        console.log("error from postImage", err);
        if (err.response.status === 500) {
            //TODO Check on status code returned from image save failure.
            errAlert && errAlert(); // Only call errAlert if it has been passed as an arg.
        }
    }
    return res.data.url;
}

export default postImage;
