const { throws } = require('assert');
var fs = require('fs');

class User{
    valid = false
    constructor(username = String, birthdate = String, age = Number, email = String, password = String){
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
    }
    userValid() {
        this.valid = true;
    };
}
// Adding user 
let user1 = new User("Duwon","3/5/1998",24,"email","123");
let user2 = new User("John","1",1,"2","1");
let user3 = new User("Jay","2",2,"2","2");
// put user info to Array
let userData = [user1,user2,user3];


module.exports = function(username, birthdate, age, email, password){
    for (var i =0; i < userData.length; i++){
        // console.log("User input: "+ username, birthdate, age, email, password)
        // console.log("From database: "+ userData[i].username,userData[i].birthdate,userData[i].age,userData[i].email,userData[i].password )
        if (userData[i].username == username && userData[i].birthdate == birthdate && userData[i].age == age && userData[i].email == email && userData[i].password == password){
            userData[i].userValid();
            return userData[i];
        }
    }
    return false;  
}