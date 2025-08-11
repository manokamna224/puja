import Temple from '../models/temple.js';

export const getTemples = async (req, res) => {
  try {
    const temples = await Temple.find({});
    res.json(temples);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch temples' });
  }
};
