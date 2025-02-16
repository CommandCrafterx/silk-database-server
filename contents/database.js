// database.js
const Database = require("better-sqlite3"); // Import the SQL Library
const db = new Database("./database.db"); // Creating a new Database as a file

// Create the "chat" table if it doesn't already exist
// Ensuring proper table creation with primary key constraint
const createTableQuery = `CREATE TABLE IF NOT EXISTS chat (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT NOT NULL, 
    age INTEGER NOT NULL CHECK(age > 0)
)`;
db.exec(createTableQuery);

// Prepopulate the table with sample data if empty
const rowCount = db.prepare("SELECT COUNT(*) as count FROM chat").get().count;
if (rowCount === 0) {
    const insertDataQuery = `INSERT INTO chat (name, age) VALUES 
        ('Matt Rose', 25), 
        ('May Fest', 24), 
        ('Micheal Sead', 31), 
        ('Sam Nelson', 21), 
        ('Eric Widget', 35), 
        ('Alan Fresco', 36), 
        ('Jackson Pot', 19)`;
    db.exec(insertDataQuery);
    console.log("Sample Data was added to the chat table.");
} else {
    console.log("Table already contains data. Sample Data was not added. Continuing script.");
}

module.exports = db;

console.log("Success!");
