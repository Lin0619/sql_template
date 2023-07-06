const sqlite3 = require("sqlite3").verbose();
const path = require("node:path");

const db = new sqlite3.Database(path.join(__dirname, "sample.db"), sqlite3.OPEN_READWRITE, (error) => {
    if (error){
        return console.error(error);
    }
    console.log("Connected to database!");
})

/*
CRUD
CREATE
READ
UPDATE
DELETE
*/

const Timmy = {
    ID: "1234567",
    Username: "Timmy",
    Email: "timmy@failure.org",
    DOB: "2005-10-28"
}

function CallbackFunc(Error, Results){
    if (Error){
        console.error(Error);
        return;
    }
    console.log("Executed SQL Query successfully!");
    if (!Results) return;
    Results.forEach(data => console.log(data));
}

let sql = 
    `CREATE TABLE IF NOT EXISTS Users(
    ID TEXT PRIMARY KEY,
    username TEXT,
    Email TEXT,
    Dob TEXT
    );`

let table = 'SELECT name FROM pragma_table_info("Users");'

let x=`
ALTER TABLE Users
RENAME COLUMN Email TO Emali;
`
let y =`
INSERT INTO Users(ID,username,Emali,Dob)
VALUES("11011","Bob","bob.6666@gmail.com","2023-0555-06")
`

let z=`
SELECT * FROM Users;
`
const a=`
SELECT * FROM Users
WHERE id = "111111";
`
const b =`
    UPDATE Users
    SET Emali = "sheeep"
    WHERE id ="111111";
    `

// db.all(x,CallbackFunc);
//db.all(y,CallbackFunc);
//db.all(z,CallbackFunc);
// db.all(a,CallbackFunc);
//db.all(table,CallbackFunc);
db.exec(sql, CallbackFunc);
// db.all(b, CallbackFunc);

let c=`
DELETE FROM Users
WHERE id ="111111";
`
db.all(c, CallbackFunc);
