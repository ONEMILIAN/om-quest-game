class Healthbar{
    private x_fore;
    private y_fore;
    public w_fore;
    private h_fore;
    private x_back;
    private y_back;
    private w_back;
    private h_back;
    private green;
    private black;

    constructor(){
	const x_fore:number = 15;
	const y_fore:number = 15;
	let w_fore:number = 100;
	const h_fore:number = 10;
	const x_back:number = 10;
	const y_back:number = 10;
	const w_back:number = 110;
	const h_back:number = 20;
	const green:string = "#009900";
	const black:string = "#000";

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
    draw(){
	c.fillStyle = this.black;
	c.fillRect(this.x_back, this.y_back, this.w_back, this.h_back);
	c.fillStyle = this.green;
	c.fillRect(this.x_fore, this.y_fore, this.w_fore, this.h_fore);
    };
    get_damage(amount:number){
	this.w_fore += amount;
    }
    update(){
	this.draw();
    }
}
