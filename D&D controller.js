function isPotion(obj) {
	if (obj instanceof Potion) {
		return true;
	} else {
		return false;
	}
}
	//item default prototype
function Item(name, price){
	this.name = name;
	this.price = price;
}
Item.prototype.itemType = "held";

	//potion prototype
function Potion(name, effectType, price, strength) {
    Item.call(this, name, price);

	this.effectType = effectType;
    this.strength = strength;
}

Potion.prototype = new Item();
Potion.prototype.constructor = Potion;

Potion.prototype.itemType = "potion";

	//poison prototype
function Poison(name, effectType, price, strength) {
    Item.call(this, name, price);

	this.effectType = effectType;
    this.strength = strength;
}

Poison.prototype = new Item();
Poison.prototype.constructor = Poison;

Poison.prototype.itemType = "poison";

	//character default prototype
function Character(name, level) {
    this.name = name;
    this.level = level;
}
Character.prototype.characterType = "unassigned";
//level up character
Character.prototype.levelUp = function() {
	this.level += 1;
	console.log(this.name + " leveled up and is now level " + this.level);
};

// Player Object
function Player(name, level, money, hpValue, stValue, mpValue) {
	Character.call(this, name, level);

    this.money = money;
    this.hpValue = hpValue;
    this.stValue = stValue;
    this.mpValue = mpValue;
}

Player.prototype = new Character();
Player.prototype.constructor = Player;
Player.prototype.characterType = "player";
Player.prototype.buyPotion = function(potion) {
		if(isPotion(potion)){
			if(this.money >= potion.price) // if item is a potion carry on, if not then end
			{
				switch(potion.effectType){// buy and drink potion tied to the effectType
					case "hp":{
						this.money -= potion.price;
						this. hpValue += potion.strength;
						console.log(this.name + " paid " + potion.price + " for the " + potion.name);
						console.log(this.name + " drank the " + potion.name);
						console.log(this.name + " now feel's more healthy (health points: " + this.hpValue + ")");
						break;
					}
					case "st":{
						this.money -= potion.price;
						this.stValue += potion.strength;
						console.log(this.name + " paid " + potion.price + " for the " + potion.name);
						console.log(this.name + " drank the " + potion.name);
						console.log(this.name + " now feel's energized (stamina points: " + this.stValue + ")");
						break;
					}
					case "mp":{
						this.money -= potion.price;
						this.mpValue += potion.strength;
						console.log(this.name + " paid " + potion.price + " for the " + potion.name);
						console.log(this.name + " drank the " + potion.name);
						console.log(this.name + " now feel's more magical (mana points: " + this.mpValue + ")");
						break;
					}
					default:{
						console.log("This " + potion.name + " doesn't look healthy, better not drink this.");
						break;
					}
				}
			}else{
				console.log("sorry bud you don't have enough money to buy a " + potion.name);
			}
		} else {
			console.log("This is not a potion!");
		}
    };
					//override levelUp Method
Player.prototype.levelUp = function() {
	this.level += 1;
	this.hpValue += 10;
	this.stValue += 20;
	this.mpValue += 20;
	console.log(this.name + " leveled up and is now level " + this.level);
	console.log(this.name + " gained a new skill point");
};

// Npc Object
function Npc(name, level, questDialog) {
   Character.call(this, name, level);

   this.questDialog = questDialog;
}

Npc.prototype = new Character();
Npc.prototype.constructor = Npc;
Npc.prototype.characterType = "Npc";
Npc.prototype.startQuest = function(){
	console.log(this.questDialog);
};

				//make objects
var greenPotion = new Potion("Green Potion", "st", 20, 10);
var redPotion = new Potion("Red Potion", "hp", 30, 40);
var bluePotion = new Potion("Blue Potion", "mp", 25, 35);
var moldyPotion = new Potion("Moldy Potion", "na", 1, -9999);

var sinisterPoison = new Poison("Sinister Potion", "st", 1, 100);

var mario = new Player("Mario", 22, 1000, 45, 10, 20);
var lango = new Player("Lango", 51, 26, 50, 13, 15);
			//overide buyPotion method
lango.buyPotion = function(potion) {
		if(isPotion(potion)){
			if(this.money >= potion.price) // if item is a potion carry on, if not then end
			{
				switch(potion.effectType){// buy and drink potion tied to the effectType
					case "hp":{
						this.money -= potion.price;
						this. hpValue += potion.strength;
						console.log(this.name + " paid " + potion.price + " for the " + potion.name);
						console.log(this.name + " drank the " + potion.name);
						console.log(this.name + " now feel's more healthy (health points: " + this.hpValue + ")");
						break;
					}
					case "st":{
						this.money -= potion.price;
						this.stValue += potion.strength;
						console.log(this.name + " paid " + potion.price + " for the " + potion.name);
						console.log(this.name + " drank the " + potion.name);
						console.log(this.name + " now feel's energized (stamina points: " + this.stValue + ")");
						break;
					}
					case "mp":{
						this.money -= potion.price;
						this.mpValue += potion.strength;
						console.log(this.name + " paid " + potion.price + " for the " + potion.name);
						console.log(this.name + " drank the " + potion.name);
						console.log(this.name + " now feel's more magical (mana points: " + this.mpValue + ")");
						break;
					}
					default:{
						console.log("This " + potion.name + " doesn't look healthy, better not drink this.");
						break;
					}
				}
			}else{
				console.log("Lango doesn't have enough money, but while the shop keeper was not looking he stole "
					+ potion.name);
					switch(potion.effectType){// buy and drink potion tied to the effectType
					case "hp":{
						this. hpValue += potion.strength;
						console.log(this.name + " paid " + potion.price + " for the " + potion.name);
						console.log(this.name + " drank the " + potion.name);
						console.log(this.name + " now feel's more healthy (health points: " + this.hpValue + ")");
						break;
					}
					case "st":{
						this.stValue += potion.strength;
						console.log(this.name + " paid " + potion.price + " for the " + potion.name);
						console.log(this.name + " drank the " + potion.name);
						console.log(this.name + " now feel's energized (stamina points: " + this.stValue + ")");
						break;
					}
					case "mp":{
						this.mpValue += potion.strength;
						console.log(this.name + " paid " + potion.price + " for the " + potion.name);
						console.log(this.name + " drank the " + potion.name);
						console.log(this.name + " now feel's more magical (mana points: " + this.mpValue + ")");
						break;
					}
					default:{
						console.log("This " + potion.name + " doesn't look healthy, better not drink this.");
						break;
					}
				}
			}
		} else {
			console.log("This is not a potion!");
		}
    };
var stergion = new Npc("Stergion", 3, "Hey, can you kill three slimes for me?");





//testing it out.
console.log("name: " + mario.name);
console.log("level: " + mario.level);
console.log("money: " + mario.money);
console.log("HP: " + mario.hpValue);
console.log("ST: " + mario.stValue);
console.log("MP: " + mario.mpValue);
console.log("mario's stats before ^^^^^");
mario.buyPotion(redPotion);
mario.buyPotion(bluePotion);
mario.buyPotion(moldyPotion);
mario.levelUp(); // overrided from the main character prototype method.
console.log("mario's stats after////////");
console.log(mario);
console.log("");

console.log("name: " + lango.name);
console.log("level: " + lango.level);
console.log("money: " + lango.money);
console.log("HP: " + lango.hpValue);
console.log("ST: " + lango.stValue);
console.log("MP: " + lango.mpValue);
console.log("lango's stats before ^^^^^");
lango.buyPotion(bluePotion); // all four of these buy potions are overrided
lango.buyPotion(greenPotion);
lango.buyPotion(moldyPotion);
lango.buyPotion(sinisterPoison);
lango.levelUp(); // overrided from the main character prototype method.
lango.levelUp();
console.log("lango's stats after////////");
console.log(lango);
console.log("");

console.log("name: " + stergion.name);
console.log("level: " + stergion.level);
console.log("stergion's stats before ^^^^^");
stergion.levelUp(); // not overided, using the levelup method inherited from Character
stergion.startQuest();
console.log("stergion's stats after////////");
console.log(stergion);
console.log("");
