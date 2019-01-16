var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        // public은 해당 이름으로 속성을 자동으로 생성할 수 있는 단축형태
        /*
        public firstName -> this.firstName = firstName
        * */
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "hello " + person.firstName + " " + person.lastName;
}
// const user = { firstName: 'Jane', lastName: 'User'};
var user = new Student('Jane', 'M.', 'User');
document.body.innerHTML = greeter(user);
