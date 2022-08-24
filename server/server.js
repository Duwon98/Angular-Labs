const express = require('express');
const app = express();

var cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Static 
app.use(express.static(__dirname + '/../dist/week4tut'));

var http = require("http").Server(app);
var server = http.listen(3000, function(){
    console.log("Server listening on port: 3000");
});

//Route for checking user credentials
var check = require('./routes/check.js');

// Route for user Login
app.post('/api/auth', (req, res)=>{
    // console.log(typeof(req.body));
    // console.log(req.body.birthdate);
    var result = check(req.body.name, req.body.birthdate, parseInt(req.body.age), req.body.email, req.body.pwd);

    // if result is not false
    if (result != false){
        res.send(true);
    }else{
        res.send(false);
    }
})

// Route for modify user details
app.post('/api/edit', (req,res)=>{
    console.log(sessionStorage.getItem("name"));
    // if user input new name
    // if (req.body.name != ''){
    //     sessionStorage.setItem('name',req.body.name)
    // };

    // if (req.body.birthdate != ''){
    //     sessionStorage.setItem('birthdate',req.body.birthdate)
    // };

    // if (req.body.age != ''){
    //     sessionStorage.setItem('age',req.body.age)
    // };

    // if (req.body.email != ''){
    //     sessionStorage.setItem('email',req.body.email)
    // };
});


