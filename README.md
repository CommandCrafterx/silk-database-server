# Express SQLite3 Template
A light and very beginner-friendly template for an Express.js application using SQLite3.
This is a very basic setup with a configured database and sample user data so that you can start your projects as quickly as possible.

# Features
- Pre-configured SQLite3 database using the better-sqlite3 library.
- A basic REST API built with Express.js.
- Sample data preloaded into a chat table (id, name, age).
- API routes to fetch all users and individual user details by ID.
- Clean code with structured error handling and extensible architecture.

# Getting Started
Note: You can also use our Installer from the Releases section if you use macOS or Linux.
# Install Dependencies
Type into your terminal: "npm install express better-sqlite3"
# Run the Application
Type into your terminal: "node script.js"

# Access the Application
Open your browser and navigate to:
- Home: http://localhost:3000
- List All Users: http://localhost:3000/users
- Get User by ID: http://localhost:3000/users/:id (Replace :id with a user ID)

# Available Routes
# GET /
Returns a welcome message with instructions.
# GET /users
Fetches all users from the database.
# GET /users/:id
Fetches user details for a specific user by their ID. Returns a 404 if the user is not found.

# Database Structure
The "chat" table schema:

CREATE TABLE IF NOT EXISTS chat (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL CHECK(age > 0)
);

Sample data includes users like:
- Matt Rose (25)
- May Fest (24)
- Jackson Pot (19)

# Adding Data
Use the "fetch" syntax with the POST request method to add data to the database.
Example:

fetch("http:/localhost:3000/users/", {
    method: "POST",
    body: JSON.stringify({
        name: "Bigger, GG",
        age: 25}),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})

# Contributing
Feel free to submit pull requests or open issues to suggest improvements.
