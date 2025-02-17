import mongoose from "mongoose"

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true},
    desc: { type: String, required: true, trim: true }
},{timestamps: true})



const newsModel = mongoose.models.news || mongoose.model('news', newsSchema)
export default newsModel