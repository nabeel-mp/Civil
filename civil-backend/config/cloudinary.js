import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import dotenv from 'dotenv';

dotenv.config();

// Connect to your Cloudinary account
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure where the images will be stored
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'civil_portfolio_works', // The folder name inside your Cloudinary account
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
  },
});

// Export the multer upload middleware
export const upload = multer({ storage });