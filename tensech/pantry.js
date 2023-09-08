// routes/pantry.js

const express = require('express');
const router = express.Router();
const pantryController = require('../controllers/pantryController');

// Create a new pantry item
router.post('/add-item', pantryController.createPantryItem);

// Get a pantry item by basket key
router.get('/get-item/:pantryId/:basketKey', pantryController.getPantryItem);

// List all pantry items under a specified pantry with optional name filtering
router.get('/list-baskets/:pantryId', pantryController.listBaskets);

// Update a pantry item by basket key
router.put('/update-item/:pantryId/:basketKey', pantryController.updatePantryItem);

// Delete a pantry item by basket key
router.delete('/delete-item/:pantryId/:basketKey', pantryController.deletePantryItem);

module.exports = router;
