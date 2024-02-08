const mongoose = require('mongoose');

// Define the schema
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
});

// Create the model using the schema
const User = mongoose.model('user', userSchema);

module.exports = User;
