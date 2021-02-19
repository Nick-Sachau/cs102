function Student(Fname, id, grade, gradeLvl) {
    this.name = Fname;
    this.id - id;
    this.grade = grade;
    this.gradeLvl = gradeLvl;
    this.permissions = 'Student';

    this.graduate = function () {
        this.gradeLvl++;
    }

    this.whitelist = function () {
        this.permissions = 'Admin';
    }

    this.setGrade = function (grade) {
        this.grade = grade
    }
}

let Nick = new Student('Nick Sachau', 42069, 90, 11);

let jimmy = new Student('Jimmy T.', 12345, 91, 11);

console.log(jimmy);
console.log(Nick);

Nick.graduate();
jimmy.graduate();
jimmy.setGrade(85);
Nick.setGrade(98);
Nick.whitelist();

console.log(Nick);
console.log(jimmy);