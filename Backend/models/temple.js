import mongoose from 'mongoose';

const templeSchema = new mongoose.Schema({
  name: String,
  slug: String,
  location: String,
  description: String,
  history: String,
  importance: String,
  architecture: String,
  rituals: String,
  mythology: String,
  image: String
});

export default mongoose.model('Temple', templeSchema);
