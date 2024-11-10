let mysql= require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"daniella",
    database:"jsAttempts_db"
});

module.exports = con;

con.connect(function(err){
    if(err){throw err;}
    console.log("Connected successfully");
});
