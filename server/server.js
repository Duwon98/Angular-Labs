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
// app.post('api/login',require('./routes/check'))
// app.post('/login', require('./routes/postLogin'));
// app.post('/loginafter', require('./routes/loginAfter'));
