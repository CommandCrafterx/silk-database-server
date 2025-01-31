const Database = require("better-sqlite3"); //Import the SQL Library
const db = new Database("./database.db"); //Creating a new Database as a file

db.exec(`CREATE TABLE IF NOT EXISTS chat (id INTEGER, name TEXT, age INTEGER)`); //Create new table
db.exec(`INSERT INTO chat(id, name, age) 
    VALUES 
    (1, 'Matt Rose', 25), 
    (2, 'May Fest', 24), 
    (3, 'Micheal Sead', 31), 
    (4, 'Sam Nelson', 21), 
    (5, 'Eric Widget', 35), 
    (6, 'Alan Fresco', 36), 
    (7, 'Jackson Pot', 19), 
    (8, 'Sophie Lane', 28), 
    (9, 'Liam Trent', 22), 
    (10, 'Olivia Brook', 30), 
    (11, 'Noah East', 33), 
    (12, 'Emma Jade', 27), 
    (13, 'Ava Stone', 24), 
    (14, 'Ethan West', 29), 
    (15, 'Charlotte Gale', 26), 
    (16, 'Isabella Lake', 32), 
    (17, 'James Frost', 34), 
    (18, 'Benjamin Reed', 23), 
    (19, 'Amelia Cloud', 31), 
    (20, 'Mason Hill', 25), 
    (21, 'Ella Grove', 22), 
    (22, 'Harper Bloom', 27), 
    (23, 'Alexander Knight', 35), 
    (24, 'Grace Finn', 26), 
    (25, 'Henry Vale', 28), 
    (26, 'Victoria Ray', 30), 
    (27, 'Sebastian York', 33), 
    (28, 'Lily Hart', 29), 
    (29, 'Daniel Crest', 24), 
    (30, 'Aria Dawn', 23), 
    (31, 'Jack Noble', 34), 
    (32, 'Chloe Wells', 25), 
    (33, 'Leo Rivers', 32), 
    (34, 'Zoe Bright', 21), 
    (35, 'Nathan Pine', 28)
`); //Adding Data to the table

console.log("Done"); //Log Message when done

module.exports = db; //Make the "db" variable available to other modules