// game logic

// UI

// player

// game update

// you can launch campaign every 30s
const campaignButton = document.getElementById("camButton");
const navButtons = document.getElementsByClassName("navBlock");
const fiveSections = document.getElementsByClassName("moreInfo");
const imgButton = document.getElementById("imgButton");
const locationButton = document.getElementById("locButton");
const healButton = document.getElementById('healButton');
const goToShopButton = document.getElementById('goToShopButton');
console.log(navButtons);

// Handle NAV BUTTON CLICKS
navButtons[0].addEventListener("click", () => {
    console.log(fiveSections);
    fiveSections[0].style.display = "block";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "none";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
})

navButtons[1].addEventListener("click", () => {
    console.log();
    fiveSections[0].style.display = "none";
    fiveSections[1].style.display = "block";
    fiveSections[2].style.display = "none";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
})

navButtons[2].addEventListener("click", () => {
    console.log(fiveSections);
    fiveSections[0].style.display = "none";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "block";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
})

navButtons[3].addEventListener("click", () => {
    console.log(fiveSections);
    fiveSections[0].style.display = "none";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "none";
    fiveSections[3].style.display = "block";
    fiveSections[4].style.display = "none";
})

locationButton.addEventListener("click", () => {
    console.log(fiveSections);
    fiveSections[0].style.display = "none";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "block";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
})


imgButton.addEventListener("click", () => {
    console.log(fiveSections);
    fiveSections[0].style.display = "block";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "none";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
})

goToShopButton.addEventListener("click", () => {
    console.log("Going to Shop");
    document.getElementById("travel").style.display = "none";
    fiveSections[4].style.display = "block";
});



function readyCampaign() {
    document.getElementById("camButton").style.display = "none";

    // Set the date we're counting down to
    var countDownDate = new Date().getTime();
    durationInMinutes = .1;
    var MS_PER_MINUTE = 60000;
    var countDownDate = new Date(countDownDate + durationInMinutes * MS_PER_MINUTE);

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    document.getElementById("camButton2").style.display = "block";
    document.getElementById("camButton2").innerHTML = 'Next Campaign in: '
     + seconds + "s ";
        
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("camButton").style.display = "block";
        document.getElementById("camButton2").style.display = "none";
        return true;
    }
    }, 1000);
}
readyCampaign();

document.getElementById("camButton").addEventListener("click", () => {
    readyCampaign();
    player.campaign(enemiesInForest);
})


class Character {
    constructor(name){
        this.name = name;
        this.coins = 0;
        this.strength = 5;
        this.defenceBonus = 0;
        this.health = 10;
        this.level = 1;
        this.xp = 0;
        this.xpToLevel = this.level*100;
        this.inventory = []
        this.equipedWeapon = null;
        this.equipedArmor = null;
    }
    kill(target) {
        if (this.health <= 0) {
            return [null, null, "Campaign wasted.", "Go heal"]
        }
        // attack logic
        console.log(target);
        if (target == undefined) { // failed to find a target
            return [0,0, 'You were unsuccessful', 'and wasted an attempt'];
        } else if (this.strength >= target.health) { // easily kill
            if (this.defenceBonus > target.strength) { // able to kill
                return [target.coins, target.xp, 'Killed a', target.name];
            } else { // damage taken
                this.health -= 2;
                return [target.coins, target.xp, 'Killed a', target.name];
            }
        }
        else if ((this.strength*2)>= target.health) { // wound enemy
            if (this.defenceBonus > target.strength) {
                // unscathed
                return [target.coins, target.xp, 'Wounded a', target.name];
                }
            else {
                this.health -= 2;
                return [target.coins, target.xp, 'Wounded a', target.name];
            }
        } else { // humiliated
            this.health -= 4;
            return [0, 0, "Humiliated by", target.name];
        }
    }
}


class Player extends Character {
    constructor(name) {
        super(name);
        this.location = "Deep Forest";
    }
    campaign(enemiesArray) {
        let randomInt = Math.round(Math.random() * enemiesArray.length);
        var reward = this.kill(enemiesArray[randomInt]);
        this.coins += reward[0];
        this.xp += reward[1];
        console.log(reward);
        this.didLevel();


        // add to log list
        // This is way too much code for the log system
        // Will need to be reworked.
        // Logs stored in json, then create logs from json
        var logLI1 = document.createElement("LI");
        var logLI2 = document.createElement("LI");
        var logMsg = reward[2]+' '+reward[3]+'.';
        var t = document.createTextNode(logMsg);
        var t2 = document.createTextNode(logMsg);
        logLI1.appendChild(t);
        logLI2.appendChild(t2);
        document.getElementById("logUL").prepend(logLI1);
        var recentEvents = document.getElementById('recentEventsUL');
        recentEvents.removeChild(recentEvents.childNodes[3])
        recentEvents.prepend(logLI2);
        
        // now to update html
        document.getElementById('level').innerHTML = this.level;
        document.getElementById('xp').innerHTML = this.xp;
        document.getElementById("gold").innerHTML = this.coins;
        document.getElementById("health").innerHTML = this.health;
    }
    didLevel() {
        // @ level 1 xp must be greater than 100 to level
        if (this.xp >= (this.level*100)){
            // if xp >= level * 100, increase level & update health
            this.level += 1;
            this.health = this.level + 10;
            document.getElementById("level").innerHTML = this.level;
            return true;
        } else return false;
    }
    // Handle HEAL BUTTON CLICK
    heal() {
        healButton.addEventListener("click", () => {
        // player health below max health
            if (player.health < (player.level*10)) {
                player.coins -= 10;
                player.health = (player.level * 10);
                // update Camp Stats
                document.getElementById("gold").innerHTML = this.coins;
                document.getElementById("health").innerHTML = this.health;
            }
        })
        let l = document.createElement("LI");
        var t = document.createTextNode('You feel ready to take on the world.');
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
    } 
    updateLocation() {
        var locationSection = document.getElementById("locationTips");
        var locationSpan = document.getElementById("locationSpan");
        locationSpan.innerHTML = this.location;
        if (self.location === "Deep Forest") {
            return true;
        }
    }
}

class Enemy extends Character {
    constructor(id,name,health, strength,coins,xp) {
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

const player = new Player("Unknown");
player.heal();
const enemiesInForest = [];
const goblinE = new Enemy(1, "goblin", 1, 0, 3, 10);
const goblinE1 = new Enemy(2, "goblin", 2, 0, 5, 20);
const goblinE2 = new Enemy(3, "goblin", 4, 0, 10, 20);
const goblinM = new Enemy(4, "goblin", 6, 1, 12, 25);
const goblinH = new Enemy(5, "goblin", 14, 2, 20, 25);
const mugger = new Enemy(25, "mugger", 9, 1, 30, 20);
const anarchist = new Enemy(7, "anarchist", 10, 1, 45, 40);
const blackBear = new Enemy(8, 'black bear', 6, 2, 0, 30);
const brownBear = new Enemy(9, "brown bear", 9, 3, 0, 40);
const grizleyBear = new Enemy(10, "grizzley bear", 14, 5, 0, 50);
enemiesInForest.push(goblinE, goblinE1, goblinE2, goblinM, goblinH, mugger, anarchist, blackBear, brownBear, grizleyBear);


function test() {
    player.campaign(enemiesInForest);
} 
