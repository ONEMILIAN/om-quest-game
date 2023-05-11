//HTMLElements
const CANVAS:HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
let c:CanvasRenderingContext2D = CANVAS.getContext("2d") as CanvasRenderingContext2D;

//VARIABLES
let on:number = 0;

//FUNCTIONS
function start(){
    on = 1;
}
function stop(){
    on = 0;
}
function reset(){
    on = 0;
    c.clearRect(0, 0, CANVAS.width, CANVAS.height);
}

//MAIN BACKBONE
(function main(){
    window.setInterval(()=>{
	if(on == 1){
	    c.clearRect(0, 0, CANVAS.width, CANVAS.height);
	}
    },500);
}());
