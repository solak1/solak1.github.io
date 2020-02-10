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
        this.strength = 5;
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
        // var rewardXp = target.xp + (Math.floor(Math.random() * target.xp / 10));
        // attack logic
        console.log(target);
        if (target == undefined) { // failed to find a target
            return [0, 0, 'were unsuccessful', 'and wasted an attempt'];
        } 
        else {
            var rewardXp = target.xp + (Math.floor(Math.random() * target.xp / 10));
            if (this.strength >= target.health) { // easily kill
                if (this.defenceBonus > target.strength) { // able to kill
                    return [target.coins, rewardXp, 'killed a', target.name];
                } else { // damage taken
                    this.health -= 2;
                    this.cantDie();
                    return [target.coins, rewardXp, 'killed a', target.name];
                }
            }
            else if ((this.strength * 2) >= target.health) { // wound enemy
                if (this.defenceBonus > target.strength) {
                    // unscathed
                    return [target.coins, (rewardXp - 5), 'wounded a', target.name];
                }
                else {
                    this.health -= 2;
                    this.cantDie();
                    return [target.coins, (rewardXp - 5), 'wounded a', target.name];
                }
            } else { // humiliated
                this.health -= 4;
                this.cantDie();
                return [0, 0, "were humiliated by a", target.name];
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
            this.strength = str;
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
            this.strength = str;
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
            this.strength = str;
            updateCoinUI(this);
            return true;
        } else return false;
    }
}

// Player Prototype or "class"
class Player extends Character {
    constructor(name) {
        super(name);
        this.location = "Forest";
        this.enemiesArray = []
    }
    campaign() {
        // handle location arrays
        if (this.location !== 'Forest') {
            if (this.location === 'Mountains') {
                this.enemiesArray = enemiesInMountains;
                console.log('enemies in mountains.')
            }
            else {
                console.log('enemies in the desert!')
                this.enemiesArray = enemiesInDesert;
            }
        } else  {
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
            this.nextLevelXp += this.level * 100;
            this.health = this.level + 10 - 1;
            document.getElementById("level").innerHTML = this.level;
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
        this.strength = strength;
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

const enemiesInForest = [];
const goblinE = new Enemy(1, "goblin", 1, 0, 3, 10);
const goblinE1 = new Enemy(2, "goblin", 2, 0, 5, 20);
const goblinE2 = new Enemy(3, "goblin", 4, 0, 10, 20);
const goblinM = new Enemy(4, "goblin", 6, 1, 12, 25);
const goblinH = new Enemy(5, "goblin", 14, 2, 20, 25);
const mugger = new Enemy(25, "mugger", 9, 1, 30, 20);
const anarchist = new Enemy(7, "burgler", 10, 1, 45, 40);
const blackBear = new Enemy(8, 'black bear', 6, 2, 0, 30);
const brownBear = new Enemy(9, "brown bear", 9, 3, 0, 40);
const grizleyBear = new Enemy(10, "grizzley bear", 14, 5, 0, 50);
enemiesInForest.push(goblinE, goblinE1, goblinE2, goblinM, goblinH, mugger, anarchist, blackBear, brownBear, grizleyBear);

const enemiesInMountains = [];
const mountainGoatE = new Enemy(11, "mountain goat", 1, 0, 0, 50);
const poacher = new Enemy(12, "poacher", 1, 0, 50, 10);
const mountainLion = new Enemy(13, "mountain goat", 14, 5, 0, 100);
enemiesInMountains.push(mountainGoatE, poacher);

const enemiesInDesert = [];
const cammelE = new Enemy(21, 'cammel', 4, 4, 4, 100);
const cammelE1 = new Enemy(22, 'cammel', 4, 5, 5, 150);
const mercenary = new Enemy(23, 'mercenary', 4, 5, 50, 250);
enemiesInDesert.push(cammelE, cammelE1, mercenary);

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

