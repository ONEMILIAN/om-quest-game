"use strict";
class Healthbar {
    constructor() {
        const x_fore = 15;
        const y_fore = 15;
        let w_fore = 100;
        const h_fore = 10;
        const x_back = 10;
        const y_back = 10;
        const w_back = 110;
        const h_back = 20;
        const green = "#009900";
        const black = "#000";
        this.x_fore = x_fore;
        this.y_fore = y_fore;
        this.w_fore = w_fore;
        this.h_fore = h_fore;
        this.x_back = x_back;
        this.y_back = y_back;
        this.w_back = w_back;
        this.h_back = h_back;
        this.green = green;
        this.black = black;
    }
    draw() {
        c.fillStyle = this.black;
        c.fillRect(this.x_back, this.y_back, this.w_back, this.h_back);
        c.fillStyle = this.green;
        c.fillRect(this.x_fore, this.y_fore, this.w_fore, this.h_fore);
    }
    ;
    get_damage(amount) {
        this.w_fore += amount;
    }
    update() {
        this.draw();
    }
}
