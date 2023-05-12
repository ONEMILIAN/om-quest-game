class Player{
    public x;
    public y;
    private w;
    private h;
    public level;
    public health;
    public max_health;
    public mana;
    public max_mana;
    public exp;
    public max_exp;
    public strength;
    public damage;
    public agility;
    public armor;
    private color;

    constructor(){
	let x:number = Math.floor(Math.random() * 19) * grid.x;
	let y:number = Math.floor(Math.random() * 11) * grid.y;
	const w:number = 1 * grid.x;
	const h:number = 1 * grid.y;
	let level:number = 1;
	let health:number = 100;
	let max_health:number = 100;
	let mana:number = 50;
	let max_mana:number = 50;
	let exp:number = 0;
	let max_exp:number = 200;
	let strength:number = 1;
	let damage:number = 25;
	let agility:number = 1;
	let armor:number = 0;
	let color:string = "#906030";

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
    draw(){
	c.fillStyle = this.color;
	c.fillRect(this.x, this.y, this.w, this.h);
    }
    update(){
	this.draw();
    }
    direction_switch(direction:string){
	switch(direction){
	    case "w":{
		attack.deattack();
		this.y += -1 * grid.y;
		break;
	    }
	    case "a":{
		attack.deattack();
		this.x += -1 * grid.x;
		break;
	    }
	    case "s":{
		attack.deattack();
		this.y += 1 * grid.y;
		break;
	    }
	    case "d":{
		attack.deattack();
		this.x += 1 * grid.x;
		break;
	    }
	    case "i":{
		attack.deattack();
		attack.attack(attack.up, this.x, this.y - 1 * grid.y);
		break;
	    }
	    case "k":{
		attack.deattack();
		attack.attack(attack.down, this.x, this.y + 1 * grid.y);
		break;
	    }
	    case "l":{
		attack.deattack();
		attack.attack(attack.right, this.x + 1 * grid.x, this.y);
		break;
	    }
	    case "j":{
		attack.deattack();
		attack.attack(attack.left, this.x - 1 * grid.x, this.y);
		break;
	    }
	}
    }
}
