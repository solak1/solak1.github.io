// ui functions / prototypes
import { LogUI, sellUI, equipUI } from "./legionUI.mjs";
// init type functions
import { initNavSection, initTravelButtons, readyCampaign, initCampaignButtons } from "./legionUI.mjs";
export {player};

const logUI = new LogUI;

/*
All Buttons
*/
// Next Campaign Buttons
const campaignButtonRest = document.getElementById("camButton2"); // next campaign in
const campaignButton1 = document.getElementById("camButton"); // forest campaign
const campaignButton2 = document.getElementById("camButton3"); // mountain campaign

// Top UI Bottons
const imgButton = document.getElementById("imgButton");
const locationButton = document.getElementById("locButton");
// Heal Buttons
const healButton = document.getElementById('healButton');
// Travel Buttons
const goToShopButton = document.getElementById('goToShopButton');
const goToMountainsButton = document.getElementById('goToMountainsButton');
const goToForestButton = document.getElementById('goToForestButton');
// Array of Elements (navigate & sections)
const navButtons = Array.from(document.getElementsByClassName("navBlock"));
const fiveSections = Array.from(document.getElementsByClassName("moreInfo"));



// Character Prototype / "class"
// Note: JS uses the prototype model for objects
class Character {
    constructor(name) {
        this.name = name;
        this.coins = 0;
        this.defenceBonus = 0;
        this.health = 10;
        this.level = 1;
        this.xp = 0;
        this.nextLevelXp = this.level * 100;
        this.inventory = []
        this.equipedWeapon = null;
        this.equipedArmor = null;
    }
    cantDie() {
        if (this.health < 1) {
            this.health = 1;
        }
        logUI.updateHealthBar(this);
    }

    kill(target) {
        /**
         *  RewardXp = target.xp + (Math.floor(Math.random() * target.xp / 10));
         *  Attack Logic Variables:
         *  -Player "Strength"
         *  -Player "Defence " 
         *  Logic Flows:
         *  -kill (no damage, damage taken) = 20%
         *  -wound (no damage, damage taken) = 30%
         *  -humiliated (damage) -> damage = ~40%
         * 
         */
        // update total strength?
        this.totalStr();
        let maxHealth = this.level + 9;
        // let nextLevelXpConst = this.level * 100;
        // let woundXpDiscount = parseInt(nextLevelXpConst * .05) 
        let damageConst = parseInt(maxHealth / 10); // 10% of max health
        console.log(target);
        if (target == undefined || target === null) { // failed to find a target
            return [0, 0, 'were unsuccessful', 'and wasted an attempt'];
        }
        else if (this.health === 1) {
            return [0, 0, 'were gravely injured!', 'Travel and Heal!'];
        } 
        else {
            var rewardXp = target.xp + (Math.floor(Math.random() * target.xp / 10)); // 10% variablility
            // easily kill
            if (this.totalStrength >= target.health) { 
                //Take no damage
                if (this.defenceBonus > target.strength) { 
                    return [target.coins, rewardXp, 'easily killed a', target.name];
                } 
                // damage taken
                else { 
                    this.health -= 2*damageConst;
                    this.cantDie();
                    return [target.coins, rewardXp, 'killed a', target.name];
                }
            }
            // Wound enemy, allowing them to escape
            else if ((this.totalStrength * 2) >= target.health) { 
                // take no damage
                if (this.defenceBonus > target.strength) {
                    return [target.coins, (rewardXp -  5), 'easily wounded a', target.name];
                }
                // take damage
                else {
                    this.health -= 3 * damageConst;
                    this.cantDie();
                    return [target.coins, (rewardXp - 5), 'wounded a', target.name];
                }
            } 
             // humiliated
             else {
                this.health -= 4 * damageConst;
                this.cantDie();
                return [0, 1, "were humiliated by a", target.name];
            }
        }
    }
    buyEquipment(equipment) {
        player.inventory.push(equipment);

    }
    buyShortSword() {
        let cost = 1500;
        let str = 15;
        if (this.coins >= cost) {
            this.coins -= cost;
            let shortSword = new Weapon("Short Sword", cost, str);
            this.inventory.push(shortSword);
            this.weaponStrength = str;
            console.log('returning true');
            updateCoinUI(this);
            return true;
        } else return false;
    }
    
    buySimpleBow() {
        let cost = 400;
        let str = 10;
        if (this.coins >= cost) {
            this.coins -= cost;
            let simpleBow = new Weapon("Short Sword", cost, str);
            this.inventory.push(simpleBow);
            this.weaponStrength = str;
            console.log('returning true');
            updateCoinUI(this);
            return true;
        } else return false;
    }
    
    buySmallSpear() {
        let cost = 50;
        let str = 7;
        if (this.coins >= cost) {
            this.coins -= cost
            let smallSpear = new Weapon("Small Spear", cost, str);
            console.log('buying ' + smallSpear.name);
            this.inventory.push(smallSpear);
            this.weaponStrength = str;
            updateCoinUI(this);
            return true;
        } else return false;
    }
    buyStandardSword() {
        let cost = 7200;
        let str = 17;
        if (this.coins >= cost) {
            this.coins -= cost;
            let standardSword = new Weapon("Standard Sword", cost, str);
            this.inventory.push(standardSword);
            this.weaponStrength = str;
            console.log('returning true');
            updateCoinUI(this);
            return true;
        } else return false;
    }
    
    buyCraftedBow() {
        let cost = 3400;
        let str = 20;
        if (this.coins >= cost) {
            this.coins -= cost;
            let craftedBow = new Weapon("Crafted Bow", cost, str);
            this.inventory.push(craftedBow);
            this.weaponStrength = str;
            console.log('returning true');
            updateCoinUI(this);
            return true;
        } else return false;
    }
    
    buyStandardSpear() {
        let cost = 2000;
        let str = 17;
        if (this.coins >= cost) {
            this.coins -= cost
            let standardSpear = new Weapon("Standard Spear", cost, str);
            console.log('buying ' + standardSpear.name);
            this.inventory.push(standardSpear);
            this.weaponStrength = str;
            updateCoinUI(this);
            return true;
        } else return false;
    }
    buyLongSword() {
        let cost = 24000;
        let str = 35;
        if (this.coins >= cost) {
            this.coins -= cost;
            let longSword = new Weapon("Long Sword", cost, str);
            this.inventory.push(longSword);
            this.weaponStrength = str;
            console.log('returning true');
            updateCoinUI(this);
            return true;
        } else return false;
    }
    
    buyEngineeredBow() {
        let cost = 16000;
        let str = 30;
        if (this.coins >= cost) {
            this.coins -= cost;
            let engineeredBow = new Weapon("Engineered Bow", cost, str);
            this.inventory.push(engineeredBow);
            this.weaponStrength = str;
            console.log('returning true');
            updateCoinUI(this);
            return true;
        } else return false;
    }
    
    buyLongSpear() {
        let cost = 12000;
        let str = 27;
        if (this.coins >= cost) {
            this.coins -= cost
            let longSpear = new Weapon("Long Spear", cost, str);
            console.log('buying ' + longSpear.name);
            this.inventory.push(longSpear);
            this.weaponStrength = str;
            updateCoinUI(this);
            return true;
        } else return false;
    }
    buyClothTunic() {
        let cost = 700;
        let def = 2;
        if (this.coins >= cost) {
            this.coins -= cost;
            // let clothTunic = new Weapon("Long Sword", cost, str);
            // this.inventory.push(longSword);
            this.defenceBonus = def;
            console.log('returning true');
            updateCoinUI(this);
            return true;
        } else return false;
    }
    
    buyStuddedTunic() {
        let cost = 4800;
        let def = 4;
        if (this.coins >= cost) {
            this.coins -= cost;
            // let studdedTunic = new Weapon("Studded Tunic", cost, str);
            // this.inventory.push(engineeredBow);
            this.defenceBonus = def;
            console.log('returning true');
            updateCoinUI(this);
            return true;
        } else return false;
    }
    
    buyLeatherCuirass() {
        let cost = 18000;
        let def = 6;
        if (this.coins >= cost) {
            this.coins -= cost
            // let leatherCuirass = new Weapon("Long Spear", cost, str);
            //console.log('buying ' + longSpear.name);
            // this.inventory.push(longSpear);
            this.defenceBonus = def;
            updateCoinUI(this);
            return true;
        } else return false;
    }
}

// Player Prototype or "class"
class Player extends Character {
    constructor(name) {
        super(name);
        this.characterStrength = 0;
        this.weaponStrength = 5;
        this.totalStrength = this.characterStrength + this.weaponStrength;
        this.location = "Forest";
        this.enemiesArray = []
    }

    totalStr() {
        this.totalStrength = this.characterStrength + this.weaponStrength;
        document.getElementById('totalStrengthSpan').innerHTML = this.totalStrength;
        document.getElementById('characterStrengthSpan').innerHTML = this.characterStrength;
        return this.totalStrength;

    }

    campaign() {
        // handle location arrays
        if (this.location !== 'Forest') {
            if (this.location === 'Mountains') {
                this.enemiesArray = enemiesInMountains;
                console.log('enemies in mountains.')
            }
            else if (this.location === 'Desert') {
                console.log('enemies in the desert!');
                this.enemiesArray = enemiesInDesert;
            }
            else {
                this.enemiesArray = enemiesInElse;
            }
        } else {
            this.enemiesArray = enemiesInForest;
            console.log('enemies in forest.')
            
        }
        // Selects random enemy in an array and kills the enemy
        let randomInt = Math.round(Math.random() * this.enemiesArray.length);
        var reward = this.kill(this.enemiesArray[randomInt]);
        this.coins += reward[0];
        this.xp += reward[1];
        console.log(reward);
        this.didLevel();
        logUI.logEncounter(reward);

        // now to update html
        document.getElementById('level').innerHTML = this.level;
        document.getElementById('xp').innerHTML = this.xp;
        updateCoinUI(this);
        // document.getElementById("gold").innerHTML = this.coins;
        document.getElementById("health").innerHTML = this.health;
    }
    didLevel() {
        // @ level 1 xp must be greater than 100 to level
        if (this.xp >= this.nextLevelXp) {
            this.level += 1; // level up
            this.characterStrength += 1;
            this.nextLevelXp += this.level * 100;
            this.health = this.level + 10 - 1;
            document.getElementById("level").innerHTML = this.level;
            document.getElementById('totalStrengthSpan').innerHTML = this.totalStrength;
            document.getElementById("characterStrengthSpan").innerHTML = this.characterStrength;
            return true;
        } else return false;
    }
    // Handle HEAL BUTTON CLICK
    heal() {
        healButton.addEventListener("click", () => {
            // player health below max health
            if (this.health < (this.level * 10)) {
                this.coins -= 10;
                this.health = (this.level + 10 - 1);
                // update Camp Stats
                updateCoinUI(this);
                // document.getElementById("gold").innerHTML = this.coins;
                document.getElementById("health").innerHTML = this.health;
                logUI.updateHealthBar(this);
            }
        })
        logUI.updateHealthBar(this);

        // medical debt lol
        let l = document.createElement("LI");
        if (this.coins < 0) {
            let t = document.createTextNode('You take on medical debt to continue fighting.');
            l.appendChild(t);
            document.getElementById("logUL").prepend(l);
        } else {
            let t = document.createTextNode('You feel ready to take on the world.');
            l.appendChild(t);
            document.getElementById("logUL").prepend(l);
        }
    }
    test() {
        this.coins += 50;
        this.xp += 100;
        this.campaign(enemiesInForest[0]);
    }
}


// all inits
const player = new Player("Unknown");
window.player = player;

initNavSection();
initTravelButtons(player);
sellUI(player);
equipUI(player);
readyCampaign(campaignButton1, "Forest", goToForestButton, player);
initCampaignButtons(player);
player.heal();






class Equipment {
    constructor(name, price) {
        this.name = name;
        this.price = price;

    }
    createBuyButton() {
        this.buyButtonInit = document.createElement("BUTTON");
        this.buyButtonMsg = String(String(name + " (Costs: " + price))
        this.t = document.createTextNode(this.buyButtonMsg);
        this.buyButton = this.buyButtonInit.appendChild(this.t);
        this.buyButtonEle = document.getElementById("shopContainer").prepend(this.buyButton);
    }
    buy() {
        this.document.getElementById("")
    }
}

class Weapon extends Equipment {
    constructor(name, price, strength) {
        super(name, price);
        this.weaponStrength = strength;
        this.inventoryButton = document.createElement("button").appendChild(document.createTextNode(String(name + " (Strength: " + strength)));
    }
}

class Enemy extends Character {
    constructor(id, name, health, strength, coins, xp) {
        super(name)
        this.id = id;
        this.health = health;
        this.strength = strength;
        this.coins = coins;
        this.xp = xp;
    }
}


function addToLogUL(data) {
    var y = document.createElement("LI");
    var t = document.createTextNode(data);
    y.appendChild(t);
    document.getElementById("logUL").appendChild(y);
}

const enemiesInElse = [];
const wanderingSoul = new Enemy(0, 'wondering soul', 0, 0, 20, 20);
enemiesInElse.push(wanderingSoul);

const enemiesInForest = [];
const goblinE   =   new Enemy(1, "goblin", 5, 0, 5, 10);
const goblinE1  =   new Enemy(2, "goblin", 5, 0, 10, 20);
const goblinE2  =   new Enemy(3, "goblin", 10, 0, 15, 20);
const goblinM   =   new Enemy(4, "goblin", 10, 0, 20, 25);
const goblinH   =   new Enemy(5, "goblin", 15, 0, 25, 25);
const mugger    =   new Enemy(6, "mugger", 20, 2, 30, 20);
const anarchist =   new Enemy(7, "burgler",25, 2, 35, 40);
const blackBear =   new Enemy(8, 'black bear', 30, 2, 40, 30);
const brownBear =   new Enemy(9, "brown bear", 35, 4, 45, 40);
const grizleyBear = new Enemy(10, "grizzley bear", 35, 4, 50, 50);
enemiesInForest.push(goblinE, goblinE1, goblinE2, goblinM, goblinH, mugger, anarchist, blackBear, brownBear, grizleyBear);

const enemiesInMountains = [];
const mountainGoatE     = new Enemy(11, "mountain goat", 15, 2, 50, 20);
const mountainGoatE1    = new Enemy(12, "mountain goat", 20, 2, 50, 30);
const mountainGoatE2    = new Enemy(13, "mountain goat", 25, 2, 100, 30);
const mountainGoatM     = new Enemy(14, "mountain goat", 25, 2, 125, 40);
const mountainGoatH     = new Enemy(15, "mountain goat", 30, 2, 150, 50);
const poacher           = new Enemy(16, "poacher", 30, 4, 200, 55);
const poacher1           = new Enemy(17, "poacher", 30, 4, 250, 10);
const smallCougar       = new Enemy(18, 'small cougar', 35, 4, 350, 70);
const cougar            = new Enemy(19, 'cougar', 45, 6, 450, 80);
const mountainLion      = new Enemy(20, "mountain lion", 65, 6, 550, 90);
enemiesInMountains.push(mountainGoatE, mountainGoatE1, mountainGoatE2, mountainGoatM, mountainGoatH, poacher, poacher1, smallCougar, cougar, mountainLion);

const enemiesInDesert = [];
const banditE           = new Enemy(21, 'bandit', 30, 4, 500, 100);
const banditE1          = new Enemy(22, 'bandit', 30, 4, 600, 155);
const banditE2          = new Enemy(23, 'bandit', 35, 4, 700, 158);
const banditM           = new Enemy(24, 'bandit', 40, 4, 800, 160);
const banditH           = new Enemy(25, 'bandit', 45, 4, 900, 165);
const cammel            = new Enemy(26, 'cammel', 50, 6, 1000, 165);
const cammelM           = new Enemy(27, 'cammel', 55, 6, 1100, 168);
const cammelH           = new Enemy(28, 'cammel', 65, 6, 1200, 170);
const assassin          = new Enemy(29, 'assassin', 75, 8, 1300, 172);
const rogue             = new Enemy(30, 'rogue', 95, 8, 1500, 175);

enemiesInDesert.push(banditE, banditE1, banditE2, banditM, banditH, cammel, cammelM, cammelH, assassin, rogue);

player.enemiesArray = enemiesInForest;

function test() {
    player.campaign(enemiesInForest);
    player.coins += 30;
    logUI.updateProgressBar(player);
}

function rich(){
    player.coins += 1000;
}

/*
Coin UI updating
*/
var gold1 = document.getElementById("gold");
var gold2 = document.getElementById("goldSpan");
var gold3 = document.getElementById("inventoryCoins");

function updateCoinUI(player) {
    gold1.innerHTML = player.coins;
    gold2.innerHTML = player.coins;
    gold3.innerHTML = player.coins;
}

