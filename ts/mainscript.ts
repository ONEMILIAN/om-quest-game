//HTMLElements
const CANVAS:HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
let c:CanvasRenderingContext2D = CANVAS.getContext("2d") as CanvasRenderingContext2D;
let stats_div_doc:HTMLElement = document.getElementById("stats_div") as HTMLElement;
let settings_div_doc:HTMLElement = document.getElementById("settings_div") as HTMLElement;

//VARIABLES
let on:number = 0;
let show_stats:number = 0;
let show_settings:number = 0;

//CLASS INIT
const grid = new Grid;
let healthbar = new Healthbar;
let expbar = new Expbar;
let player = new Player;
let attack = new Attack;

//FUNCTIONS
function start():void{
    on = 1;
}
function stop():void{
    on = 0;
}
function reset():void{
    on = 0;
    c.clearRect(0, 0, CANVAS.width, CANVAS.height);
}
function stats():void{
    if(show_stats == 0){
	stats_div_doc.style.display = "block";
	show_stats = 1;
    }
    else if(show_stats == 1){
	stats_div_doc.style.display = "none";
	show_stats = 0;
    }
}
function settings():void{
    if(show_settings == 0){
	settings_div_doc.style.display = "block";
	show_settings = 1;
    }
    else if(show_settings == 1){
	settings_div_doc.style.display = "none";
	show_settings = 0;
    }
}

//MAIN BACKBONE
(function main():void{
    window.setInterval(()=>{
	if(on == 1){
	    c.clearRect(0, 0, CANVAS.width, CANVAS.height);
	    player.update();
	    attack.update();
	    healthbar.update();
	    expbar.update();
	}
    },100);
}());

window.addEventListener("keydown", ((e)=>{
    const direction = e.key.replace("Arrow", "");
    player.direction_switch(direction);
}));
