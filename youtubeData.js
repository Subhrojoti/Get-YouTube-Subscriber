// Load environment variables from .env file
require("dotenv").config();

// Importing necessary modules
const connectDB = require("./db/connect");
const Subscriber = require("./models/subscribers");
const ytDataJson = require("./youtubeData.json");

// Function to start the process
const start = async () => {
  try {
    // Connect to MongoDB
    await connectDB(process.env.MONGODB_URI);

    // Delete existing documents in Subscriber collection
    await Subscriber.deleteMany();

    // Create documents based on data from youtubeData.json
    await Subscriber.create(ytDataJson);

    // Log success message
    console.log("Database Created");
  } catch (error) {
    // Handle errors
    console.log("Something gone Wrong.");
    console.log("Please Try Again Later");
  }
};

// Start the process
start();
