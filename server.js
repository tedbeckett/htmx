// Import the express module
const express = require('express');
const path = require('path');

// create an express application
const app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

// Creating a "/home" route for sending "Hello World!" to the clientSide(Browser)
app.get("/one", (req, res) => {
    res.status(200).send("<h3>ONE</h3>")
})

const PORT = 3000;

// Creates the server
app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}`)
});