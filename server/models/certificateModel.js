import mongoose from "mongoose"


const certificateSchema = new mongoose.Schema({
    registration_number: { type: String, required: true, trim: true},
    dob: { type: String, required: true, trim: true},
    image_url: { type: String, required: true, trim: true}
},{timestamps: true})



const certificateModel = mongoose.model("certificate", certificateSchema)

export default certificateModel