import { Board } from "./Board";

let inputnumber = <HTMLInputElement>document.getElementById("num");
let tab = <HTMLTableElement>document.getElementById('tictactoe')
const play = document.getElementById('play');

let board;
let num;

play?.addEventListener('click', () => {
    tab.innerHTML = " "
    num = parseInt(inputnumber.value);
    board = new Board(num);
})


