// script.js
console.log("Initialising..."); // Log initializing message

const express = require("express"); // Import Express Library
const app = express(); // Create an Express Application
const port = 3000; // Set the server port
const db = require("./database.js"); // Import the database file

app.use(express.json())

console.log("Starting Server..."); // Log message when server is starting

// Home route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the User Information API</h1><p>Use the /users endpoint to access user data.</p>");
});

// Route to get all users
app.get("/users", (req, res) => {
  console.log("Fetching all users");
  const users = db.prepare("SELECT * FROM chat").all();
  res.json(users);
});

// Route to get a specific user by ID
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    return res.status(400).json({ error: "Invalid user ID." });
  }

  console.log(`Fetching user with ID: ${userId}`);
  const user = db.prepare("SELECT * FROM chat WHERE id = ?").get(userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found." });
  }
});

// Route to add data to the database
app.post("/users/", (req, res) => {
  const {name, age} = req.body;
  if (!(name && age)) {
    return res.status(400).json({error: "Provide name and age to add it to the database."})
  }

  console.log(`Adding Data to Database: Name = ${name} Age = ${age}`)
  const result = db.prepare("INSERT INTO chat (name, age) VALUES (?,?)").run(name, age)

  if (result.changes > 0) {
    res.status(201).json({message: "Successfully added user data!"})
  } else {
    res.status(500).json({error: "An unknown server error ocurred."})
  }
})

// Error handling for unknown routes
app.use((req, res) => {
  res.status(404).send("<h1>404 Not Found</h1><p>The requested resource was not found.</p>");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});