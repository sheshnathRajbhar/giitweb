import mediaModel from "../models/mediaModel.js";
import certificateModel from "../models/certificateModel.js";
import newsModel from "../models/newsModel.js";
import enquiryModel from "../models/enquiryModel.js";
import registrationModel from "../models/registrationModel.js";
import { v2 as cloudinary } from "cloudinary";

export const media = async (req, res) => {
    try {
        // Log files and request body for debugging
       const image =req.file &&  req.file
        console.log(image)
        const response = await cloudinary.uploader.upload(image.path)

        if(!response){
            return res.json({success: false, message:response})
        }

        const newMedia = new mediaModel({imageUrl:response.secure_url})

        await newMedia.save()
        return res.json({ success: true, imageUrl: response.secure_url });
    } catch (error) {
        console.error("Error while uploading file:", error);
        return res.json({ success: false, message: error.message });
    }
};


export const certificate = async (req, res) => {
    const { registration_number, dob } = req.body;

    // Check if required fields are empty
    if ([registration_number, dob].some(field => !field.trim())) {
        return res.json({ success: false, message: "Please fill all the fields" });
    }

    try {
        // Ensure image file exists
        const existUser = await certificateModel.findOne({registration_number})
        if(existUser){
            return res.json({success: false, message: "User already exist"})
        }
        const image = req.file;
        if (!image) {
            return res.json({ success: false, message: "File not found" });
        }

        // Log the image file for debugging purposes
        console.log("Uploaded image:", image);

        // Upload image to Cloudinary
        const response = await cloudinary.uploader.upload(image.path);

        // Check if Cloudinary returned a valid response
        if (!response || !response.secure_url) {
            return res.json({ success: false, message: "Error while uploading image to Cloudinary" });
        }

        const splitUrl = response.secure_url.split('upload')
        let finalUrl = splitUrl[0]+'upload/fl_attachment'+splitUrl[1]

        // Create new certificate entry in the database
        const newCertificate = new certificateModel({
            registration_number,
            dob,
            image_url: finalUrl
        });

        // Save the new certificate to the database
        await newCertificate.save();

        return res.json({ success: true, message: "Uploaded successfully" });
    } catch (error) {
        // Log the error for debugging purposes
        console.error("Error in certificate upload:", error);

        return res.json({ success: false, message: error.message });
    }
};



export const registrationList = async(req, res)=>{
    try {
        const data = await registrationModel.find()
        if(!data){
            return res.json({success: false, message: "Data not aviable"})
        }

        return res.json({success: true, data:data})
    } catch (error) {
       return res.json({success: false, message: error.message}) 
    }
}


export const enquiryList = async(req, res)=>{
    try {
        const data = await enquiryModel.find()
        if(!data){
            return res.json({success: false, message: " Data is not aviable"})
        }

        return res.json({success: true, data: data})
    } catch (error) {
       return res.json({success: false, message: error.message}) 
    }
}


export const news = async(req, res)=>{
    const {title, desc} = req.body
    if(!title || !desc){
        return res.json({success: false, message: "Please fill all the fields"})
    }

    try {
        const newNews =  newsModel({title, desc})
        await newNews.save()
        return res.json({success: true, message: "News publish successfully"})
    } catch (error) {
       return res.json({success: false, message: error.message}) 
    }
}