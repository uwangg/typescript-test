function greeter(person: string) {
    return `hello ${person}`;
}
const user = 'Jane User';
// const user = [0, 1, 2];
document.body.innerHTML = greeter(user);