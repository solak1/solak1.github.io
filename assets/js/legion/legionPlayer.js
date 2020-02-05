class Character {
    constructor(name){
        this.name = name;
        this.coins = 0;
        this.strength = 5;
        this.defenceBonus = 0;
        this.health = 10;
        this.level = 1;
        this.xp = 0;
        this.inventory = []
        this.equipedWeapon = null;
        this.equipedArmor = null;
    }
    kill(target) {
        // attack logic
        console.log("fighting: ", target.name,'Health:', target.health, 'To:', this.strength);
        if (this.strength >= target.health) {
        // able to kill
            if (this.defenceBonus > target.strength) {
        // unscathed
                return [target.coins, target.xp, 'Killed'];
            } else {
        // damage taken
                var damage = 1
                this.health -= damage;
                return [target.coins, target.xp, 'Killed'];
            }
        }
        // wound enemy
        else if ((this.strength*2)>= target.health) {
            return target.coins, target.xp, 'Wounded';
            } 
        // humiliated
        else {
            return null, null, "Humiliated"
        }
    }
}

class Player extends Character {
    constructor(name) {
        super(name);
        this.location = null;
    }
    campaign(potentialEnemiesArray) {
        // change
        var randomInt = 0;
        var reward = this.kill(potentialEnemiesArray[randomInt]);
        this.coins += reward[0];
        this.xp += reward[1];
        console.log(reward);
    }
}


const player = new Player("Unknown");
const enemyArray = [];
const goblin1 = new Character("goblin");
goblin1.health = 5;
goblin1.strength = 0;
goblin1.coins = 10;
goblin1.xp = 5;
enemyArray.push(goblin1);
player.campaign(enemyArray);