const roomSchema = new mongoose.Schema({
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotel',
      required: true,
    },
    roomType: {
      type: String,
      required: true, // e.g., 'Single', 'Double', 'Suite'
    },
    pricePerNight: {
      type: Number,
      required: true,
    },
    amenities: [String],
    isAvailable: {
      type: Boolean,
      default: true,
    },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Room', roomSchema);
  