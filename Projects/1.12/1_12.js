let randomNames = `Kieran Stokes
Kiera Moody
Krystal Mcbride
Aneesah Miranda
Alby Giles
Aniyah Hopkins
Gurveer Gonzalez
Keisha Reyna
Uwais Juarez
Kaan Holloway
Kathy Moss
Aditya Mercer
Lisa-Marie Mccarthy
Emaan Mansell
Jevon Allan
Sheila Rawlings
Lainey Spooner
Warwick Reader
Kara Grimes
Simran Hale
Farhan Atherton
Jolene Reid
Rhiannon Greig
Carina Morgan
Braxton Andrews
Keiren Connolly
Will Patton
Neha Beach
Sami Burn
Gracie-Leigh Hanna
Timothy Bean
Ammarah Workman
Kristin Avery
Ryker Forster
Samantha England
Alessandra Brandt
Ella Salinas
Imaad Burch
Eryn Crouch
Ellise Hebert
Allana Simons
Tayler Simmonds
Vihaan Sweeney
Monty Shah
Huey Knight
Jayden-Lee Irving
Layla-Rose Field
Annette Davie
Stefano Fuller
Elly Swift
Tarun Redman
Maisha Cook
Lexie Buchanan
Bartlomiej Ridley
Nataniel Naylor
Kayson Reyes
Molly Roy
Kaitlan Mcfarland
Colette Cartwright
Beatrix Wiley
Marion Owens
Zackery Rich
Kaden Guest
Manav Duke
Shivam Merritt
Shayan Massey
Chad Le
Opal Peck
Tyrique Chan
Geoffrey Andersen
Jorge Ramos
Ethel Bull
Aeryn Preece
Ellie-May Sparrow
Alyx Stewart
Malik Hutton
Benjamin Fletcher
Bentley Kane
Vikki Hahn
Tiana Neale
Tahlia Randall
Emme Levy
Dru Roche
Cem Kearns
Francisco Friedman
Jaxson Palmer
Jonas Michael
Abul Cleveland
Beverly Hail
Kiran Trujillo
Anais Ireland
Jaidon Maguire
Jeff Vinson
Rachael Mellor
Halle Vazquez
Gaia Horn
Menachem Sexton
Kamil John
Jayce Ware
Pawel Reilly`


let namesArray = randomNames.split("\n");


let employed = {};
let ceoE = false;

function employedIncome(obj) {
    for(let i = 0; i < obj.length; i++) {
        

        let name = obj[i];
        let chance = Math.ceil(Math.random()* 10);

        let income = "";

        if(ceoE == false) {
            income = 250000;
            employed[name] = income;
            ceoE = true;
            continue
        }
        if(chance == 1){
            income = "intern"
        }else if(chance >= 2 && chance <= 4) {
            income = Math.ceil(Math.random() * 10000 + 10000);
        }else if(chance >= 5 && chance <= 9) {
            income = Math.ceil(Math.random() * 20000 + 30000);
        }else if(chance == 10) {
            income = Math.ceil(Math.random() * 40000 + 80000);
        }
                
        employed[name] = income;
    }
}

employedIncome(namesArray)
console.log(employed);


// let employees = 0;
// let ceo = "";

// for(let key in employed) {
//     if(employed[key] != 'intern' && employed[key] != 250000) {
//         employed[key] -= 5000;
//         employees++;
//     }

//     if(employed[key] == 250000) {
//         ceo = key;
//     }
// }

// employed[ceo] += 5000 * employees;

// console.log(employed);




let interns = 0;
let employees = 0;
let ceo = "";
let stolenMoney = 0;

for(let key in employed) {
    if(employed[key] != "intern" && employed[key] != 250000) {
        stolenMoney += employed[key] /= 2;
        employees++;
    }

    if(employed[key] == "intern") {
        interns++;
    }

    if(employed[key] == 250000) {
        ceo = key;
    }
}

let internPay = stolenMoney / interns;

console.log(Math.round(internPay * 100) / 100);

for(let key in employed) {
    if(employed[key] == "intern") {
        employed[key] = Math.round(internPay * 100) / 100;
    }
}

console.log(employed);






let users = {
    name: "jessie",
    sayhi: function() {
        console.log("hello ${this.name}");
    }
}

users.sayhi();

let newUser = {}

Object.assign(newUser, users);

newUser.name = "jimmy";

newUser.sayhi();


