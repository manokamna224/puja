import Puja from '../models/puja.js';

export const getPujas = async (req, res) => {
  try {
    const pujas = await Puja.find({});
    res.json(pujas);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch pujas' });
  }
};
