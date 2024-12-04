const { default: mongoose } = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    pricePerNight: {
      type: Number,
    }, // Optional if rooms manage their own pricing
    amenities: [String],
    rooms: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
    }], // Reference Room model
    images: [String],
  }, { timestamps: true });
  
  module.exports = mongoose.model('Hotel', hotelSchema);
  