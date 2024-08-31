import express from 'express'
import {signup, getAll, signin, verifyOTP, submitCrimeReport} from '../controllers/auth.js'
import {getuser} from '../controllers/rest.js'
import upload from "../utils/multer.js";
import { imageUpload } from "../controllers/upload.js";
import { cloudinaryUploader, cloudinaryConfig  } from "../utils/cloudinary.js";
const router = express.Router()
cloudinaryConfig();

router.post("/signup", signup)
router.get("/getAll", getAll)
router.post("/signin", signin)
router.post("/verifyOTP", verifyOTP)
router.post("/imageupload", upload.single("image"), imageUpload)
router.get("/getuser/:id", getuser)
router.post("/info", submitCrimeReport)


router.get("/", (req, res) => {
    res.json({
        message: "HELLO WORLD"
    })

})

export default router