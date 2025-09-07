function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
};

function Teacher(name, age, subject) {
    Person.call(this, name, age);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function() {
    return `${this.name} teaches ${this.subject}.`;
};

Teacher.compareScores = function(t1, t2) {
    return t1.testScore - t2.testScore;
};

function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function() {
    return `${this.name} is studying in grade ${this.grade}.`;
};

Student.compareScores = function(s1, s2) {
    return s1.testScore - s2.testScore;
};

const teacher1 = new Teacher('Alice', 30, 'Math');
teacher1.testScore = 90;
const teacher2 = new Teacher('Bob', 40, 'Science');
teacher2.testScore = 85;
console.log(teacher1.introduce());
console.log(teacher1.teach());
console.log('Compare teacher scores:', Teacher.compareScores(teacher1, teacher2));

const student1 = new Student('Charlie', 15, 10);
student1.testScore = 88;
const student2 = new Student('Diana', 16, 11);
student2.testScore = 92;
console.log(student1.introduce());
console.log(student1.study());
console.log('Compare student scores:', Student.compareScores(student1, student2));
