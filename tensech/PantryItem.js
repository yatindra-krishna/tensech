// models/PantryItem.js

const mongoose = require('mongoose');

const pantryItemSchema = new mongoose.Schema({
  pantryId: String,
  basketKey: String,
  value: String,
});

module.exports = mongoose.model('PantryItem', pantryItemSchema);
