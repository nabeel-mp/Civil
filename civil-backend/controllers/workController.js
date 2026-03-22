import Work from '../models/Work.js';

// @desc    Get all works
// @route   GET /api/works
export const getWorks = async (req, res) => {
  try {
    const works = await Work.find().sort({ createdAt: -1 });
    res.json(works);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Add a work
// @route   POST /api/works (Protected)
export const addWork = async (req, res) => {
  try {
    const { title, category } = req.body;
    
    // Cloudinary automatically attaches the secure image URL to req.file.path
    const imageUrl = req.file ? req.file.path : null;

    if (!imageUrl) {
      return res.status(400).json({ message: 'Image upload failed. Please provide an image.' });
    }

    const work = new Work({ 
      title, 
      category, 
      image: imageUrl // Save the Cloudinary URL to MongoDB
    });
    
    const createdWork = await work.save();
    res.status(201).json(createdWork);
  } catch (error) {
    console.error("Error adding work:", error);
    res.status(500).json({ message: 'Failed to add project', error: error.message });
  }
};

// @desc    Delete a work
// @route   DELETE /api/works/:id (Protected)
export const deleteWork = async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (work) {
      await work.deleteOne();
      res.json({ message: 'Work removed' });
    } else {
      res.status(404).json({ message: 'Work not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};