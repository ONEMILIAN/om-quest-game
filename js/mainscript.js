"use strict";
//HTMLElements
const CANVAS = document.getElementById("canvas");
let c = CANVAS.getContext("2d");
//VARIABLES
let on = 0;
//CLASS INIT
const grid = new Grid;
let healthbar = new Healthbar;
let expbar = new Expbar;
let player = new Player;
let attack = new Attack;
//FUNCTIONS
function start() {
    on = 1;
}
function stop() {
    on = 0;
}
function reset() {
    on = 0;
    c.clearRect(0, 0, CANVAS.width, CANVAS.height);
}
//MAIN BACKBONE
(function main() {
    window.setInterval(() => {
        if (on == 1) {
            c.clearRect(0, 0, CANVAS.width, CANVAS.height);
            player.update();
            attack.update();
            healthbar.update();
            expbar.update();
        }
    }, 100);
}());
window.addEventListener("keydown", ((e) => {
    const direction = e.key.replace("Arrow", "");
    player.direction_switch(direction);
}));
