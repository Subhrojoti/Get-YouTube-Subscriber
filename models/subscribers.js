const mongoose = require("mongoose");

// Define the subscriber schema
const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedChannel: {
    type: String,
    required: true,
  },
  subscribedDate: {
    type: Date,
    required: true,
    default: Date.now(), // Sets the default value to the current date and time
  },
});

// Create and export the Subscriber model using the schema
module.exports = mongoose.model("Subscriber", subscriberSchema);
