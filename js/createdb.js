let mysql= require("mysql");
const con= mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"daniella"
});

/*con.connect tries to open the connection
function(err) is a callback that is executed when the connection attempt
 is complete
 if it couldnt establish a connection, it throws an error
 otherwise displays Connected

 */
con.connect(function(err){
    if(err){throw err;}
    console.log("Connected");
/*
A variable defined as sql defines the SQL Query as a string
 and creates the new db
*/
    let sql="CREATE DATABASE jsAttempts_db";

/*
runs the SQL query
Callback function that is executed when the database creation attmpt 
is complete
if the database couldn't be created it throws an error
*/
    con.query(sql, function(err){
        if(err) {throw err;}
        console.log("Database created successfully");
    });
});