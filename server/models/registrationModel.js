import mongoose from "mongoose"

// coursename, name, email, adhar, phone, fathername, mothername, dob, qualification, gender, address

const registrationSchema = new mongoose.Schema({
    coursename:{ type:String, required:true, trim:true},
    name:{ type:String, required:true, trim:true},
    email:{ type:String, required:true, trim:true},
    adhar:{ type:String, required:true, trim:true},
    phone:{ type:String, required:true, trim:true},
    fathername:{ type:String, required:true, trim:true},
    mothername:{ type:String, required:true, trim:true},
    dob:{ type:String, required:true, trim:true},
    qualification:{ type:String, required:true, trim:true},
    gender:{ type:String, required:true, trim:true},
    address:{ type:String, required:true, trim:true},
})



const registrationModel = mongoose.models.registration || mongoose.model('registration', registrationSchema)

export default registrationModel
