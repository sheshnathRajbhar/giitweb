import mongoose from "mongoose"

const mediaSchema = new mongoose.Schema({
    imageUrl: {type: String, required:[true, 'Please select a file']}
})


const mediaModel = mongoose.models.media || mongoose.model('media', mediaSchema)

export default mediaModel