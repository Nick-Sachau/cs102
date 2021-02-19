// // Creating an array object

// // Name, Age, Hair Color, Home City, Hobby

// let myself = ["Nick", 16, "Brown", "Glendale", "Video Games"];

// // Home City for myself

// console.log(`Home City for "myself" = ${myself[3]}`);

// // Age for myself

// console.log(`Age for "myself" = ${myself[1]}`);

// let newself = {
//     name: "Nick",
//     age: 16,
//     hairColor: "Brown",
//     homeCity: "Glendale",
//     hobby: "Video Games"
// };

// // Home City for newself

// console.log(`Home City for "newself" = ${newself["homeCity"]}`);

// // a type of bear

// let americanBlackBear = {
//     furColor: "Black",
//     avgWgMale: 395,
//     avgWgFemale: 135,
//     country: "North America",
//     avgLife: 18,
//     pop: "600,000",
//     diet: "Roots, Berries, Meat, Fish, Insects, larvae, grass, succulent plants",
// };





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

let typingSpeed = {};

function createList(array) {
    for(let i = 0; i < array.length; i++) {
        let name = array[i];
        let speed = Math.floor(Math.random() * 20 + 80); // give us between 80 and 100

        typingSpeed[name] = speed;
    }
}

// createList(namesArray);
// console.log(typingSpeed);


let tvStatus = {};

function createTvObject(arrayObject){
    for(let i = 0; i < arrayObject.length; i++) {
        let key = arrayObject[i];
        let chance = Math.ceil(Math.random()*3);
        let value = "";

        if(chance == 1) {
            value = "off";
        }else {
            value = Math.ceil(Math.random()*99);
        }

        tvStatus[key] = value;

    }
}

// createTvObject(namesArray);
// console.log(tvStatus);


// create an object that will say the income of people you employ
// 50 names: 
//'intern' 10%
//'10000 - 20000' 30%
//'30000 - 50000' 50%
//'80000 - 120000' 10%
// 1 person CEO: 250000


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