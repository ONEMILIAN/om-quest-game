"use strict";
class Expbar {
    constructor() {
        const x_fore = 50;
        const y_fore = 550;
        let w_fore = 0;
        const h_fore = 10;
        const x_back = 45;
        const y_back = 545;
        const w_back = 900;
        const h_back = 20;
        const purple = "#990099";
        const black = "#000";
        this.x_fore = x_fore;
        this.y_fore = y_fore;
        this.w_fore = w_fore;
        this.h_fore = h_fore;
        this.x_back = x_back;
        this.y_back = y_back;
        this.w_back = w_back;
        this.h_back = h_back;
        this.purple = purple;
        this.black = black;
    }
    draw() {
        c.fillStyle = this.black;
        c.fillRect(this.x_back, this.y_back, this.w_back, this.h_back);
        c.fillStyle = this.purple;
        c.fillRect(this.x_fore, this.y_fore, this.w_fore, this.h_fore);
    }
    update() {
        this.draw();
    }
}
