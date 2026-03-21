import mongoose from 'mongoose';

const workSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true }, // We will store the Image URL here
}, { timestamps: true });

export default mongoose.model('Work', workSchema);