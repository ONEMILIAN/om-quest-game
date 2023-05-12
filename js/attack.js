"use strict";
class Attack {
    constructor() {
        let x = -50;
        let y = -50;
        const w = 1 * grid.x;
        const h = 1 * grid.y;
        let shot = false;
        let up = false;
        let down = false;
        let left = false;
        let right = false;
        const color = "#906030";
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.shot = shot;
        this.up = up;
        this.down = down;
        this.left = left;
        this.right = right;
        this.color = color;
    }
    attack(who, x, y) {
        this.shot = true;
        who = true;
        this.x = x;
        this.y = y;
    }
    deattack() {
        this.shot = false;
        this.x = -50;
        this.y = -50;
        this.up = false;
        this.down = false;
        this.left = false;
        this.right = false;
    }
    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.w, this.h);
    }
    update() {
        this.draw();
    }
}
