// class user
// set userName - > 4 letters
// set password - > 5 letters, and at least 1 number
// login(username, password) if correct log("Welcom in ${userName}")

// user.userName = "karn" // log("con't be less than 5 characters")
// user.password = "nakea" // log("Your password has to have a number")

class User {
    constructor () {
        
    }

    set userName(name) {
        if(name.length >= 4) {
            this.Uname = name;
        }else {
            console.log(`Can't be less than 4 characters`);
        }
    }

    set setPassword(pass) {
        if(pass.length >= 5 && pass.toLowerCase() != pass.toUpperCase()) {
            this.password = pass;
        }else {
            console.log(`Can't be less than 5 characters and you need at least one number`);
        }
    }

    Login(loginUsername, loginPassword) {
        if(loginUsername == this.Uname && loginPassword == this.password) {
            console.log(`Welcome in ${loginUsername}`);
        }else {
            console.log(`Incorrect Password or User Name`);
        }
    }
}

let user1 = new User();

user1.userName = "Nick S";
user1.setPassword = "adminss1";

console.log(user1);

user1.Login('Nick S', 'adminss1');