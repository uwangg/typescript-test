function greeter(person) {
    return "hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: 'Jane', lastName: 'User' };
// const user = [0, 1, 2];
document.body.innerHTML = greeter(user);
