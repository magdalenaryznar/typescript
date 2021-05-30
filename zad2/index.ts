import Animal from './animals/Animal'
import Snake from './animals/Snake';
import Horse from './animals/Horse';

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
