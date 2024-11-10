const con= require('./connection');
const express = require ('express');
const bodyParser= require('body-parser')
const {newUser}= require('./registration');


const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());
app.use(express.static('public'));

//Middleware
app.use((req,res,next)=>{
    console.log("Server.js:", req.path /*the url */, req.method /*GET, POST, PUT..*/ , req.params /*eg id*/, req.body);
    next();
});

app.post('/register',(req, res)=>{
    const userDetails = req.body;
    newUser(userDetails, function(err){
        if(err){
            res.status(500).send("Error while registering");
        }else{
            res.status(200).send("Registration successful");
        }
    });
});


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});





