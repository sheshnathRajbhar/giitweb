import mongoose from "mongoose"

// course, name, phone, email, message

const enquirySchema = new mongoose.Schema({
    course:{ type: String, required:true, trim:true,  },
    name:{ type: String, required:true, trim:true,  },
    email:{ type: String, required:true, trim:true,  },
    phone:{ type: String, required:true, trim:true,  },
    message:{ type: String, required:true, trim:true,  }
})


const enquiryModel = mongoose.models.enquiry || mongoose.model('enquiry', enquirySchema)

export default enquiryModel