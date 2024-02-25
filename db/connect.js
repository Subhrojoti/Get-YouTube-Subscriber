const mongoose = require("mongoose");

// Define a function named connectDB that takes a MongoDB URI as input
const connectDB = (uri) => {
  // Log a message indicating that connection process is starting
  console.log("Connecting....");

  // Use Mongoose to connect to the MongoDB database specified by the URI
  // mongoose.connect returns a promise, so it can be directly returned from the function
  return mongoose.connect(uri);
};

// Export the connectDB function to make it available for use in other modules
module.exports = connectDB;
