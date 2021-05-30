export interface IPerson {
    name: string;
    surname: string;
    age: number;
    role: string;
}

export class Person implements IPerson {
    name: string;
    surname: string;
    age: number;
    role: string;

    constructor(name: string, suername: string, age: number) {
        this.name = name;
        this.surname = suername;
        this.age = age;
    }

    show(): void {
        document.body.innerHTML = `<h1>Hello ${this.name} ${this.surname} ${this.age}</h1>`
    }
}

const users: IPerson[] = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
]

const admins: IPerson[] = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
]

function logPerson(person: Person) {
    console.log(person.name + ', ' + person.surname + ', ' + person.role);
}

function filterPersons(persons: IPerson[], criteria: any): IPerson[] {

    return persons.filter(person => person.name === criteria.name);
}

let p = new Person("John", "Blake", 11);
p.show();

const all = users.concat(...admins);
console.log(all);

const age25 = all.filter(item => item.age > 25)
console.log(age25);

const filtered = filterPersons(all, { name: 'Adam' });
console.log(filtered)