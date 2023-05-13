"use strict";
class Player {
    constructor() {
        let x = Math.floor(Math.random() * 19) * grid.x;
        let y = Math.floor(Math.random() * 11) * grid.y;
        const w = 1 * grid.x;
        const h = 1 * grid.y;
        let level = 1;
        let health = 100;
        let max_health = 100;
        let mana = 50;
        let max_mana = 50;
        let exp = 0;
        let max_exp = 200;
        let strength = 1;
        let damage = 25;
        let agility = 1;
        let armor = 0;
        let color = "#906030";
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.level = level;
        this.health = health;
        this.max_health = max_health;
        this.mana = mana;
        this.max_mana = max_mana;
        this.exp = exp;
        this.max_exp = max_exp;
        this.strength = strength;
        this.damage = damage;
        this.agility = agility;
        this.armor = armor;
        this.color = color;
    }
    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.w, this.h);
    }
    update() {
        this.draw();
    }
    direction_switch(direction) {
        switch (direction) {
            case "w": {
                attack.deattack();
                this.y += -1 * grid.y;
                break;
            }
            case "a": {
                attack.deattack();
                this.x += -1 * grid.x;
                break;
            }
            case "s": {
                attack.deattack();
                this.y += 1 * grid.y;
                break;
            }
            case "d": {
                attack.deattack();
                this.x += 1 * grid.x;
                break;
            }
            case "i": {
                attack.deattack();
                attack.attack(attack.up, this.x, this.y - 1 * grid.y);
                break;
            }
            case "k": {
                attack.deattack();
                attack.attack(attack.down, this.x, this.y + 1 * grid.y);
                break;
            }
            case "l": {
                attack.deattack();
                attack.attack(attack.right, this.x + 1 * grid.x, this.y);
                break;
            }
            case "j": {
                attack.deattack();
                attack.attack(attack.left, this.x - 1 * grid.x, this.y);
                break;
            }
        }
    }
}
