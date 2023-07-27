import multer from "multer";

const middleware = multer({dest : 'uploads'});

export default middleware;