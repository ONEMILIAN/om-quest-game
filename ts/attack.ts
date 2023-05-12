class Attack{
    public x;
    public y;
    private w;
    private h;
    public shot;
    public up;
    public down;
    public left;
    public right;
    private color;
    
    constructor(){
	let x:number = -50;
	let y:number = -50;
	const w:number = 1 * grid.x;
	const h:number = 1 * grid.y;
	let shot:boolean = false;
	let up:boolean = false;
	let down:boolean = false;
	let left:boolean = false;
	let right:boolean = false;
	const color:string = "#906030";

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
    attack(who:boolean, x:number, y:number){
	this.shot = true;
	who = true;
	this.x = x;
	this.y = y;
    }
    deattack(){
	this.shot = false;
	this.x = -50;
	this.y = -50;
	this.up = false;
	this.down = false;
	this.left = false;
	this.right = false;
    }
    draw(){
	c.fillStyle = this.color;
	c.fillRect(this.x, this.y, this.w, this.h);
    }
    update(){
	this.draw()
    }
}
