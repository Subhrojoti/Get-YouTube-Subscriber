// Load environment variables from .env file
require("dotenv").config();

// Importing necessary modules
const connectDB = require("./db/connect");
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const subcriberRoute = require("./app");

// Function to start the server
const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB(process.env.MONGODB_URI);

    // Start listening on specified PORT
    app.listen(PORT, () => {
      console.log(`App Listning on Port ${PORT}`);
    });
  } catch (err) {
    // Handle errors
    console.log("Something gone Wrong.");
    console.log("Please Try Again Later");
  }

  // Define routes
  // Default route
  app.get("/", (req, res) => {
    res.status(200).send("<h1> Hii I Am Live </h1>");
  });

  // Subscriber routes
  app.use("/subscribers", subcriberRoute); // For listing all subscribers
  app.use("/subscribers/names", subcriberRoute); // For listing subscriber names
  app.use("/subscribers/:id", subcriberRoute); // For handling subscriber by ID
};

// Start the server
startServer();
