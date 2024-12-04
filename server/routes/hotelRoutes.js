const express = require('express');
const {
  createHotel,
  getAllHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
} = require('../controller/hotel');

const router = express.Router();

// Create a new hotel
router.post('/hotels', createHotel);

// Get all hotels
router.get('/hotels', getAllHotels);

// Get a hotel by ID
router.get('/hotels/:id', getHotelById);

// Update a hotel
router.put('/hotels/:id', updateHotel);

// Delete a hotel
router.delete('/hotels/:id', deleteHotel);

module.exports = router;
