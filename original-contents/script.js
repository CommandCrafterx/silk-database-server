console.log("Initialising...") //Log initialising message

const express = require("express"); //Import Express Library
const app = express(); //Creating an Express Application
const port = 3000; //Setting a port
const db = require("./database.js"); //Import the database file

console.log("Starting Server..."); //Log message when server is starting

app.get("/users/", (req, res) => {
    console.log("Received Request");
    res.send("<p>Add a route parameter to the URL to get a users info.</p>");
}); //Shows up when there is no route parameter set

app.get("/users/:id", (req, res) => {
    console.log("Received Request");
    const id = req.params.id;
    const prepareData = db.prepare("SELECT * FROM chat WHERE id = ?"); //Prepare the Data
    const data = prepareData.get(id); //Get the data that the Client requested
    console.log(data);
    if (data) {
        const name = data.name
        const age = data.age
        res.status(200).send(`<p>Data: ${name}, ${age} years old.</p>`) //Send a successful status and shows HTML
    } else {
        res.status(404).send(`<p>404 ERROR: ID ${id} not found!</p>`) //Send an unsuccessful status when the data was not found
    };
}); //Shows up when a route parameter is set

app.listen(port, () => {
    console.log(`Server is running at Port ${port}`);
}); //Start the server