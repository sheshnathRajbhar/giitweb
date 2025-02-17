import express from "express"
import { registration, enquiry, adminLogin ,certificateVerification, media, getNews} from "../controllers/userController.js"

const userRouter = express.Router()


userRouter.post('/register', registration)
userRouter.post('/enquiry', enquiry)
userRouter.post('/admin', adminLogin)
userRouter.get('/get-news', getNews)
userRouter.post('/media', media)
userRouter.post('/verify-certificate', certificateVerification )


export default userRouter