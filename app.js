const Subscriber = require("./models/subscribers");
const express = require("express");
const router = express.Router();

// making route to get all the all the subscribers with an array object
router.get("/", async (req, res) => {
  // console.log(req.query);

  // it will collect all the data form the data base and store it to the apiData variable
  let apiData = await Subscriber.find(req.query);

  // applying try and catch method to handle any error
  try {
    // console.log(apiData);
    res.status(200).json({ apiData });
  } catch (err) {
    res.status(500).json({ massege: "Internal Server Error" });
  }
});

// making route to get only names and subscribe channel with an array objects
router.get("/names", async (req, res) => {
  let apiData = await Subscriber.find(
    {},
    { name: 1, subscribedChannel: 1, _id: 0 }
  );
  res.status(200).send({ apiData });
});

// making route to get all the data of the user by passing only id
router.get("/:id", async (req, res) => {
  // applying try and catch method to handle any error
  try {
    // this method is this to get the id from the url
    const id = req.params.id;
    // console.log("ID:", id);
    const subscriber = await Subscriber.findById(id);
    if (!subscriber) {
      console.log("Subscriber not found");
      return res.status(404).json({ message: "Subscriber not found" });
    }
    // if the match for the following code will response with the status code of 200 and send all the data in json format
    res.status(200).send({ subscriber });
  } catch (error) {
    // console.error("Error:", error);
    res.status(500).send({ message: "Your Id is Not Valid" });
  }
});

module.exports = router;
