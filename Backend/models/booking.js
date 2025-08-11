import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  pujaSlug: String,
  userUid: String,
  name: String,
  phone: String,
  date: Date,
  package: String,
  status: { type: String, default: 'pending' }
});

export default mongoose.model('Booking', bookingSchema);
