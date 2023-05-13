"use strict";
//HTMLElements
const CANVAS = document.getElementById("canvas");
let c = CANVAS.getContext("2d");
let stats_div_doc = document.getElementById("stats_div");
let settings_div_doc = document.getElementById("settings_div");
//VARIABLES
let on = 0;
let show_stats = 0;
let show_settings = 0;
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
function stats() {
    if (show_stats == 0) {
        stats_div_doc.style.display = "block";
        show_stats = 1;
    }
    else if (show_stats == 1) {
        stats_div_doc.style.display = "none";
        show_stats = 0;
    }
}
function settings() {
    if (show_settings == 0) {
        settings_div_doc.style.display = "block";
        show_settings = 1;
    }
    else if (show_settings == 1) {
        settings_div_doc.style.display = "none";
        show_settings = 0;
    }
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
