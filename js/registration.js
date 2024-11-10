const con = require('./connection');

//function that specifies user details and the callback fucntion that displays errors
const newUser= (userDetails, callback)=>{ 

//object that was specified in the function to hold the details 
const {FullName, UserName, Password, Email, Contact} = userDetails;

const regUser ='INSERT INTO users(FullName, UserName, Password, Email, Contact)  VALUES  (?,?,?,?,?)';
const values=[FullName, UserName, Password, Email, Contact];

con.query(regUser, values, function(err){
    if(err){
        console.log("Error inserting data:", err);
        return callback(err);
    }
    console.log("User registered.");
    return callback(null);
});
};

module.exports={newUser};