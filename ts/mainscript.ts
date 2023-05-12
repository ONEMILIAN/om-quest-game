//HTMLElements
const CANVAS:HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
let c:CanvasRenderingContext2D = CANVAS.getContext("2d") as CanvasRenderingContext2D;

//VARIABLES
let on:number = 0;

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
