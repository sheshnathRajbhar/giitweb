import {v2 as cloudinary} from "cloudinary"

const connectCloudinary = ()=>{
    cloudinary.config({
        cloud_name: process.env.CLOUDINERY_CLOUD_NAME,
        api_key: process.env.CLOUDINERY_API_KEY,
        api_secret: process.env.CLOUDINERY_API_SECREAT
      });

    console.log("Cloudinary Connected")
}


export default connectCloudinary