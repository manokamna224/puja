import mongoose from 'mongoose';

const pujaSchema = new mongoose.Schema({
  name: String,
  slug: String,
  packages: Array,
  benefits: Array,
  duration: String,
  price: Number,
  delivery: String,
  image: String
});

export default mongoose.model('Puja', pujaSchema);
