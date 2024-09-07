// uploadMiddleware.js
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinaryConfig.js';

// Define Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'profile_images',
    allowed_formats: ['jpg', 'png'],
  },
});

// Create multer instance with Cloudinary storage
const upload = multer({ storage: storage });

export default upload;
