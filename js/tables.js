const con = require('./connection');

const users = `CREATE TABLE IF NOT EXISTS users(
    UserID INT PRIMARY KEY ,
    FullName VARCHAR(40) NOT NULL,
    UserName VARCHAR (40) NOT NULL,
    Password VARCHAR(25) NOT NULL,
    Email VARCHAR (255) NOT NULL,
    Contact VARCHAR (15) NOT NULL
);
`;

con.query(users, function(err){
    if(err){throw err;}
    console.log("Table created successfully");


const dropPrimaryKey = 'ALTER TABLE users DROP PRIMARY KEY';

con.query(dropPrimaryKey, function(err) {
    if (err) {
        throw err;
    }
    console.log("Primary key dropped successfully");

const modification = "ALTER TABLE users MODIFY COLUMN UserID INT AUTO_INCREMENT PRIMARY KEY";

con.query(modification, function(err){
    if(err){throw err; }
    console.log("UserID column set to AUTO_INCREMENT");
    });
});
});