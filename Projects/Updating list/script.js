let food = "";
let age = "";
let id = 102;
let passangers = [];
let extra = [];

function addToList() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let dOb = document.getElementById('DoB').value;
    let leaving = document.getElementById('departing').value;
    let arriving = document.getElementById('arriving').value;
    let leaveDate = document.getElementById('leaveDate').value;
    let arriveDate = document.getElementById('returnDate').value;
    let bags = document.getElementById('bags').value;

    let passanger = new Passanger(id, firstName, lastName, dOb, leaving, arriving, leaveDate, arriveDate, bags)
    id++
    passangers.push(passanger);
    passanger.findFood();
    passanger.findExtras()

    document.getElementById('firstName').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('DoB').value = "";
    document.getElementById('departing').value = "";
    document.getElementById('arriving').value = "";
    document.getElementById('leaveDate').value = "";
    document.getElementById('returnDate').value = "";
    document.getElementById('bags').value = "";

    document.getElementById('kb').checked = false;
    document.getElementById('mcd').checked = false;
    document.getElementById('sbu').checked = false;

    document.getElementById('legroom').checked = false;
    document.getElementById('window').checked = false;
    document.getElementById('headphones').checked = false;
    document.getElementById('moreFood').checked = false;

}



class Passanger {
    constructor(id, firstName, lastName, dOb, leaving, arriving, leaveDate, arriveDate, bags, meal) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dOb = dOb;
        this.leaving = leaving;
        this.arriving = arriving;
        this.leaveDate = leaveDate;
        this.arriveDate = arriveDate;
        this.bags = bags;
        this.id = id;
        this.meal = meal
    }

    formatDate(date) {
        date = new Date(date);
        let month = "";
        let day = "";
        if(date.getMonth() + 1 < 10) {
            month = '0' + (date.getMonth()+1);
        } else {
            month = `${(date.getMonth() + 1)}`;
        }
        if (date.getDate() < 10){
            day = '0' + (date.getDate());
        }else {
            day = (date.getDate());
        }

        let newDate = `${date.getFullYear()}-${month}-${day}`;
        return newDate
    }

    findFood() {
        food = "";
        let kB = document.getElementById('kb').checked;
        let mcD = document.getElementById('mcd').checked;
        let sbu = document.getElementById('sbu').checked;

        if(kB) {
            food = document.getElementById('kb').value;
        }else if(mcD) {
            food = document.getElementById('mcd').value;
        }else if(sbu) {
            food = document.getElementById('sbu').value;
        }
        this.meal = food;
    }

    getAge(dOb) {
        age = "";
        let today = new Date();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        let newDoB = dOb.split("-");
        if(mm <= newDoB[1]) {
            age = yyyy - newDoB[0];
        }else if(mm > newDoB[1]) {
            age = yyyy - newDoB[0] + 1;
        }
        return age;
    }

    findExtras() {
        extra = [];
        let elemList = document.getElementsByName('extra');
        for(let i = 0; i < elemList.length; i++) {
            if (elemList[i].checked){
                extra.push(elemList[i].value) 
            }
        }
        return extra;
    }
}

let bean = new Passanger('100' ,'Mr.', 'Bean', '1955-01-06', 'Consett, United Kingdom', 'London, England', '2006-01-08', '2006-01-09', 69, 'Sbubby');
passangers.push(bean);

let connor = new Passanger('101', 'Connor', 'Vokel', '2001-6-21', 'Phoenix, AZ', 'Flagstaff, AZ', '2006-3-7', '2006-3-8', 0, 'Mc Dongle');
passangers.push(connor);

let passangerList = document.querySelector('#names');

function print() {
    let div = document.getElementById('names');
    div.innerHTML = "";
    
    for(let i = 0; i < passangers.length; i++) {
        let li = document.createElement('li');
        passangerList.appendChild(li);
        li.onclick = function(){fillInInfo(passangers[i].id ,passangers[i].firstName, passangers[i].lastName, passangers[i].formatDate(passangers[i].dOb), passangers[i].leaving, passangers[i].arriving, passangers[i].formatDate(passangers[i].leaveDate), passangers[i].formatDate(passangers[i].arriveDate), passangers[i].meal, passangers[i].bags, passangers[i].getAge(passangers[i].dOb), passangers[i].findExtras());}
        li.textContent = `${passangers[i].id} | ${passangers[i].firstName} ${passangers[i].lastName}`
    }
}

function fillInInfo(id, firstName, lastName, dOb, inLeaving, inArriving, inLeaveDate, inArriveDate, meal, bags, age, extras) {
    clearInfo();
    document.getElementById('outfirstName').value = firstName;
    document.getElementById('outlastName').value = lastName;
    document.getElementById('outDoB').value = dOb;
    document.getElementById('outbags').value = bags;
    document.getElementById('outdeparting').value = inLeaving;
    document.getElementById('outarriving').value = inArriving;
    document.getElementById('outleaveDate').value = inLeaveDate;
    document.getElementById('outreturnDate').value = inArriveDate;
    document.getElementById('outmeal').value = meal;
    document.getElementById('outage').textContent = age;

    console.log(extras);

    // if(extra.length == 1) {
    //     document.getElementById('outextras').value = `${extra[0]}`
    // }else if(extra.length == 2) {
    //     document.getElementById('outextras').value = `${extra[0]}, ${extra[1]}`
    // }else if(extra.length == 3) {
    //     document.getElementById('outextras').value = `${extra[0]}, ${extra[1]}, ${extra[2]}`
    // }else if(extra.length == 4) {
    //     document.getElementById('outextras').value = `${extra[0]}, ${extra[1]}, ${extra[2]}, ${extra[3]}`
    // }
}

function clearInfo() {
    document.getElementById('outfirstName').value = "";
    document.getElementById('outlastName').value = "";
    document.getElementById('outDoB').value = "";
    document.getElementById('outbags').value = "";
    document.getElementById('outdeparting').value = "";
    document.getElementById('outarriving').value = "";
    document.getElementById('outleaveDate').value = "";
    document.getElementById('outreturnDate').value = "";
    document.getElementById('outmeal').value = "";
    document.getElementById('outage').textContent = "";
    document.getElementById('outextras').value = "";
}