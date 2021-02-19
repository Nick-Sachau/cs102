class User {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
};

let userList = [];
let idCount = 1;

function addToList() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;

    if(firstName != "" && lastName != "") {
        let user = new User(firstName, lastName, idCount);
        idCount++;
        userList.push(user);
        document.getElementById('firstName').value = "";
        document.getElementById('lastName').value = "";
    }
}

function print() {
    let space = document.getElementById('printSpace');

    space.innerHTML = "";
    for(let i = 0; i < userList.length; i++) {
        space.innerHTML += `<div><span>${userList[i].id}</span>${userList[i].firstName} ${userList[i].lastName}</div>`;
    }
}