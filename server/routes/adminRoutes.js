import express from "express";
import upload from "../middleware/multer.js";  // multer setup
import { certificate, enquiryList, media, news, registrationList } from "../controllers/adminController.js";  // controller
const adminRoute = express.Router();

// File upload endpoint
adminRoute.post('/upload-media', upload.single('image'), media);
adminRoute.post('/upload-result', upload.single('image'), certificate);
adminRoute.get('/registration-list', registrationList);
adminRoute.get('/enquiry-list', enquiryList);
adminRoute.post('/post-news', news);

export default adminRoute;
