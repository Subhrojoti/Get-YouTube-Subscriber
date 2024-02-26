# YT Subscriber Tracker

## Overview
YT Subscriber Tracker is a simple Node.js application designed to fetch and display YouTube subscribers. It provides endpoints to retrieve subscriber data in different formats.

## Features
- Retrieve all subscribers
- Retrieve subscribers' names and subscribed channels
- Retrieve a specific subscriber by ID

## Getting Started
To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/get-youtube-subscribers.git`
2. Navigate to the project directory: `cd get-youtube-subscribers`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. The server will be running at `http://localhost:3000`

## Usage
### Retrieving all subscribers
Endpoint: `GET http://localhost:3000/subscribers`

Response: An array of subscribers (an Object)

### Retrieving subscribers' names and subscribed channels
Endpoint: `GET http://localhost:3000/subscribers/names`

Response: An array of subscribers (an Object with only two fields: `name` and `subscribedChannel`)

### Retrieving a specific subscriber by ID
Endpoint: `GET http://localhost:3000/subscribers/:id`

Response: A subscriber (an object) with the given ID. Returns a status code 400 and an error message `{message: error.message}` if the ID does not match.

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.
