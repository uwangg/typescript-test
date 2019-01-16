interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `hello ${person.firstName} ${person.lastName}`;
}
const user = { firstName: 'Jane', lastName: 'User'};
// const user = [0, 1, 2];
document.body.innerHTML = greeter(user);