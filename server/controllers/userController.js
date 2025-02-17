import registrationModel from "../models/registrationModel.js";
import enquiryModel from "../models/enquiryModel.js"
import certificateModel from "../models/certificateModel.js";
import mediaModel from "../models/mediaModel.js";
import newsModel from "../models/newsModel.js";
import jwt from "jsonwebtoken"
import {v2 as cloudinary} from 'cloudinary'
import request from "request"
// registration
export const registration = async (req, res) => {
    const {coursename, name, email, adhar, phone, fathername, mothername, dob, qualification, gender, address} = req.body
    if(!coursename, !name || !email || !adhar || !phone || !fathername || !mothername || !dob || !qualification || !gender || !address){
        return res.json({ success: false, message: "Please fill all fields" })
    }


    try {
        const newRegistration = new registrationModel({coursename, name, email, adhar, phone, fathername, mothername, dob, qualification, gender, address})
        await newRegistration.save()
        return res.json({ success: true, message: "Your request has been submited" })

    } catch (error) {
        return res.json({ success: false, message: error.message })
    }
}


// Enquery 

export const enquiry = async (req, res) => {
    const { course, name, phone, email, message } = req.body

    if (!course || !name || !email || !phone || !message) {
        return res.json({ success: false, message: "Please fill all fields" })
    }



    try {
        const newEnquiry = new enquiryModel({ course, name, phone, email, message })
        await newEnquiry.save()
        return res.json({ success: true, message: "Your query added" })


    } catch (error) {
        return res.json({ success: false, message: error.message })
    }

}


export const adminLogin = async(req, res)=>{
    const {username, password} = req.body
    if(!username || !password){
        return res.json({success:true, message:"Please fill all the fields"})
    }

    try {
        if(password.length < 6){
            return res.json({success:false, message:"Please use Strogn password"})
        }
    
        if(username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS){
            const token =  jwt.sign({username, password}, process.env.JWT_SECRET, {expiresIn :'1d' })
            return res.json({success: true, token: token})
    
        }else{
            return res.json({success: false, message: "Invalid credentials "})
        }
    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}



// get media files

export const media = async(req, res)=>{
 try {
  const data = await mediaModel.find()
  if(data.length === 0){
    return res.json({success:false, message: "files not aviable"})
  }
  return res.json({success: true, data:data})
 } catch (error) {
    return res.json({success: false , message: error.message})
 }
}


// Result verification controller

export const certificateVerification = async(req, res)=>{
    const {registration_number, dob} = req.body

    if(!registration_number || !dob){
        return res.json({success: false, message: "Please fill all the fields"})
    }

    try {
       const certificate = await certificateModel.findOne({registration_number, dob})
        if(!certificate){
            return res.json({success: false, message: "Certificate not aviable"})
        }

        return res.json({success: true, image_url:certificate.image_url})

    } catch (error) {
       return res.json({success: false, message: error.message}) 
    }
} 




export const getNews = async(req, res)=>{
    try {
        // const lastDocument = await Model.find().sort({ _id: -1 }).limit(1);

        const news = await newsModel.find().sort({_id: -1}).limit(1)
        return res.json({success: true, data:news})

    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}








// export const certificateVerification = async(req, res)=>{
// const { registration_number, dob } = req.body;

//   try {
//     // Create the unique file name based on roll number and dob
//     const userCertificate = await certificateModel({registration_number,dob})
//     if(!userCertificate){
//         return res.json({success: false, message: "not Aviable"})
//     }
//     const certificateFileName = userCertificate.image_url

//     // Search Cloudinary by the file name (could be based on naming conventions or metadata)
//     const result = await cloudinary.search
//       .expression(`filename:${certificateFileName}`)
//       .sort_by('public_id', 'desc') // Sort by date if needed
//       .max_results(1)
//       .execute();

//     if (result.resources.length > 0) {
//       // Get the URL of the certificate image from Cloudinary
//       const certificateUrl = result.resources[0].secure_url;

//       // Optionally, download it and save it temporarily to the server's public folder
//       const certificatePath = path.join(__dirname, 'public', 'temp', `${rollNo}_${dob}.jpg`);

//       // Download the certificate and save it locally (Optional step)
     
//       request.get(certificateUrl)
//         .pipe(fs.createWriteStream(certificatePath))
//         .on('close', () => {
//           res.json({ success: true, certificateUrl: `/temp/${userCertificate.image_url}` });
//         });

//     } else {
//       res.json({ success: false, message: 'Certificate not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching certificate:', error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// }