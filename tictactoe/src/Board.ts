import { Cell } from "./Cell";
import { CheckGame } from "./CheckGame";

export class Board {
    cells: Cell[];
    currentSymbol: number;


    constructor(size: number) {
        this.cells = new Array(size);
        this.currentSymbol = 1;

        let table = <HTMLTableElement>document.getElementById("tictactoe");

        let i = 0;
        for (let r = 0; r < size; r++) {
            let row = table.insertRow(r);
            for (let c = 0; c < size; c++) {
                let cell = <HTMLTableDataCellElement>row.insertCell(c);
                cell.className = 'cell';
                const newCell = new Cell(cell);
                this.cells[i] = newCell;
                cell.addEventListener("click", () => this.makeMove(newCell), false);
                i++;
            }
        }
        this.current(this.currentSymbol)
    }

    makeMove(cell: Cell): void {
        if (cell.cellValue == 0) {
            cell.setCellValue(this.currentSymbol);
            if (this.currentSymbol == 1) {
                this.currentSymbol = -1;
            } else if (this.currentSymbol == -1) {
                this.currentSymbol = 1;
            }
        }
        new CheckGame(this.cells);
        this.current(this.currentSymbol);
    };

    current(currentSymbol: number) {
        let cr =  document.getElementById("current") as HTMLTableElement;

        const xImage = new Image();
        const oimg = document.createElement("img");
        xImage.src = "../assets/images/x.png";
        oimg.src = "../assets/images/O.png";
        xImage.classList.add("img");
        oimg.classList.add("img");
        cr.innerHTML = "Ruch: ";
        if (currentSymbol == 1) {
            cr.appendChild(xImage);
        }
        else if (currentSymbol == -1) {
            cr.appendChild(oimg);
        }

    }


}
