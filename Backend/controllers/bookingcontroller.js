import Booking from '../models/booking.js';

export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Booking failed' });
  }
};
