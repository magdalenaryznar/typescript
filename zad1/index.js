"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, suername, age) {
        this.name = name;
        this.surname = suername;
        this.age = age;
    }
    Person.prototype.show = function () {
        document.body.innerHTML = "<h1>Hello " + this.name + " " + this.surname + " " + this.age + "</h1>";
    };
    return Person;
}());
exports.Person = Person;
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    console.log(person.name + ', ' + person.surname + ', ' + person.role);
}
function filterPersons(persons, criteria) {
    return persons.filter(function (person) { return person.name === criteria.name; });
}
var p = new Person("John", "Blake", 11);
p.show();
var all = users.concat.apply(users, admins);
console.log(all);
var age25 = all.filter(function (item) { return item.age > 25; });
console.log(age25);
var filtered = filterPersons(all, { name: 'Adam' });
console.log(filtered);
