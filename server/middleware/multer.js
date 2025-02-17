import multer from 'multer';
import path from 'path';

// Set up storage engine for multer
const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Create a unique filename
    }
});

// Multer instance to handle multiple file uploads, specifying maxCount and field name
const upload = multer({ storage: storage });

export default upload;
