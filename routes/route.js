import express from 'express'
import {signup, getAll, signin, verifyOTP, submitCrimeReport} from '../controllers/auth.js'
import {getuser} from '../controllers/rest.js'
import upload from "../utils/multer.js";
import { imageUpload } from "../controllers/upload.js";
import { universalFileUpload } from "../controllers/file_upload.js";
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
router.post('/fileupload', upload.single('file'), universalFileUpload);


router.get("/", (req, res) => {
    res.json({
        message: "HELLO WORLD"
    })

})
router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  });

export default router