
export class Win {
    winner: string;

    constructor(value: number) {

        let win =  document.getElementById("win") as HTMLTableElement;
        let winDiv =  document.getElementById("winner") as HTMLTableElement;
        winDiv.classList.add('visible')
        const ximg = new Image();
        const oimg = document.createElement("img");
        ximg.src = "../assets/images/x.png";
        oimg.src = "../assets/images/O.png";
        ximg.classList.add("img");
        oimg.classList.add("img");

        win.innerHTML = "Wygrywa: ";

        if (value == 1) {
            this.winner = "Krzyżyk";
            win.appendChild(ximg)

        } else if (value == -1) {
            this.winner = "Kółko";
            win.appendChild(oimg)
        } else {
            this.winner = "remis";
            win.innerHTML = "Remis"
        }

        console.log(`Wygrał: ${this.winner}`);
    }
}