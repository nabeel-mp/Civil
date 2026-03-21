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
  const { title, category, image } = req.body;
  try {
    const work = new Work({ title, category, image });
    const createdWork = await work.save();
    res.status(201).json(createdWork);
  } catch (error) {
    res.status(400).json({ message: 'Invalid work data' });
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