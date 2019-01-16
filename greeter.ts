class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        // public은 해당 이름으로 속성을 자동으로 생성할 수 있는 단축형태
        /*
        public firstName -> this.firstName = firstName
        * */
        this.fullName = `${firstName} ${middleInitial} ${lastName}`;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `hello ${person.firstName} ${person.lastName}`;
}

// const user = { firstName: 'Jane', lastName: 'User'};
const user = new Student('Jane', 'M.', 'User');
document.body.innerHTML = greeter(user);