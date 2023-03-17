const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  pricePerDay: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  imageUrl: String,
  description: String
});

module.exports = mongoose.model('Car', CarSchema);
