const Hotel = require('../models/Hotel');

// Create a new hotel
const createHotel = async (req, res) => {
    
    try {
      const { name, location, description, pricePerNight, amenities, images } = req.body;
      const hotel = new Hotel({ name, location, description, pricePerNight, amenities, images });
      const savedHotel = await hotel.save();
      res.status(201).json(savedHotel);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

// Get all hotels
const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find().populate('rooms');
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a hotel by ID
const getHotelById = async (req, res) => {
  try {
    const { id } = req.params;

    const hotel = await Hotel.findById(id).populate('rooms');
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a hotel
const updateHotel = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedHotel = await Hotel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedHotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }

    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a hotel
const deleteHotel = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedHotel = await Hotel.findByIdAndDelete(id);
    if (!deletedHotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }

    res.status(200).json({ message: 'Hotel deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createHotel,
  getAllHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
};