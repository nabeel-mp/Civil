import Client from '../models/Client.js';

// @desc    Get all clients
// @route   GET /api/clients
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Add a client
// @route   POST /api/clients (Protected)
export const addClient = async (req, res) => {
  const { name } = req.body;
  try {
    const client = new Client({ name });
    const createdClient = await client.save();
    res.status(201).json(createdClient);
  } catch (error) {
    res.status(400).json({ message: 'Invalid client data' });
  }
};

// @desc    Delete a client
// @route   DELETE /api/clients/:id (Protected)
export const deleteClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (client) {
      await client.deleteOne();
      res.json({ message: 'Client removed' });
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};