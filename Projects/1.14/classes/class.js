class Student {
    constructor(Fname, id, gradeLvl) {
        this.name = Fname;
        this.id = id;
        this.gradeLvl = gradeLvl;
        this.permissions = 'Student'
    }

    graduate() {
        this.gradeLvl++;
    }

    whitlist() {
        this.permissions = 'Admin'
    }

    setGrade(grade) {
        this.grade = grade;
    }
}

let jimmy = new Student('Jimmy O.', 12345, 12);

// console.log(jimmy);

jimmy.whitlist();
jimmy.setGrade(22);
jimmy.graduate();

// console.log(jimmy);




class User {
    constructor() {
        this.firstName = "Jimmy";
        this.lastName = "Smitty";
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
};

let user = new User();

user.fullName = "Aaron Hansen";
console.log(user.fullName);