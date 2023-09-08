// controllers/pantryController.js

const PantryItem = require('../models/PantryItem');

// Create a new pantry item
exports.createPantryItem = async (req, res) => {
  try {
    const { pantryId, basketKey, value } = req.body;
    const pantryItem = new PantryItem({ pantryId, basketKey, value });
    await pantryItem.save();
    res.json(pantryItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get a pantry item by basket key
exports.getPantryItem = async (req, res) => {
  try {
    const { pantryId, basketKey } = req.params;
    const pantryItem = await PantryItem.findOne({ pantryId, basketKey });
    if (!pantryItem) {
      res.status(404).json({ message: 'Pantry item not found' });
    } else {
      res.json(pantryItem);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// List all pantry items under a specified pantry with optional name filtering
exports.listBaskets = async (req, res) => {
  try {
    const { pantryId } = req.params;
    const { name } = req.query;
    const filter = name ? { pantryId, name } : { pantryId };
    const pantryItems = await PantryItem.find(filter);
    res.json(pantryItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update a pantry item by basket key
exports.updatePantryItem = async (req, res) => {
  try {
    const { pantryId, basketKey } = req.params;
    const { value } = req.body;
    const pantryItem = await PantryItem.findOneAndUpdate(
      { pantryId, basketKey },
      { value },
      { new: true }
    );
    if (!pantryItem) {
      res.status(404).json({ message: 'Pantry item not found' });
    } else {
      res.json(pantryItem);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete a pantry item by basket key
exports.deletePantryItem = async (req, res) => {
  try {
    const { pantryId, basketKey } = req.params;
    const pantryItem = await PantryItem.findOneAndDelete({ pantryId, basketKey });
    if (!pantryItem) {
      res.status(404).json({ message: 'Pantry item not found' });
    } else {
      res.json({ message: 'Pantry item deleted' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
