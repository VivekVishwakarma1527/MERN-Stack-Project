import  express  from "express";
import {uploadImage, downloadImage} from "../Cimage/image.js";
import middleware from "../utils/middleware.js";

const router = express.Router();

router.post('/upload', middleware.single('file') , uploadImage );
router.get('/file/:fileID', downloadImage);

export default router;