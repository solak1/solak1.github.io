// game logic

// UI

// player

// game update

// you can launch campaign every 30s
const campaignButton = document.getElementById("camButton");
const navButtons = document.getElementsByClassName("navBlock");
const fourSections = document.getElementsByClassName("moreInfo");
const imgButton = document.getElementById("imgButton");
const locationButton = document.getElementById("locButton");
console.log(navButtons);

navButtons[0].addEventListener("click", () => {
    console.log(fourSections);
    fourSections[0].style.display = "block";
    fourSections[1].style.display = "none";
    fourSections[2].style.display = "none";
    fourSections[3].style.display = "none";
})

navButtons[1].addEventListener("click", () => {
    console.log(fourSections);
    fourSections[0].style.display = "none";
    fourSections[1].style.display = "block";
    fourSections[2].style.display = "none";
    fourSections[3].style.display = "none";
})

navButtons[2].addEventListener("click", () => {
    console.log(fourSections);
    fourSections[0].style.display = "none";
    fourSections[1].style.display = "none";
    fourSections[2].style.display = "block";
    fourSections[3].style.display = "none";
})

navButtons[3].addEventListener("click", () => {
    console.log(fourSections);
    fourSections[0].style.display = "none";
    fourSections[1].style.display = "none";
    fourSections[2].style.display = "none";
    fourSections[3].style.display = "block";
})

locationButton.addEventListener("click", () => {
    console.log(fourSections);
    fourSections[0].style.display = "none";
    fourSections[1].style.display = "none";
    fourSections[2].style.display = "none";
    fourSections[3].style.display = "block";
})

imgButton.addEventListener("click", () => {
    console.log(fourSections);
    fourSections[0].style.display = "block";
    fourSections[1].style.display = "none";
    fourSections[2].style.display = "none";
    fourSections[3].style.display = "none";
})


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
    document.getElementById("camButton2").innerHTML = 'Time until Next Campaign: '
    + minutes + "m " + seconds + "s ";
        
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
    player.campaign(enemyArray);
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
        this.inventory = []
        this.equipedWeapon = null;
        this.equipedArmor = null;
    }
    kill(target) {
        console.log(target);
        // attack logic
        if (target == undefined) {
            return [0,0, 'You were Unsuccessful', 'and wasted attempt'];
        } else if (this.strength >= target.health) {
        // able to kill
            if (this.defenceBonus > target.strength) {
        // unscathed
                return [target.coins, target.xp, 'Killed a', target.name];
            } else {
        // damage taken
                var damage = 1
                this.health -= damage;
                return [target.coins, target.xp, 'Killed a', target.name];
            }
        }
        // wound enemy
        else if ((this.strength*2)>= target.health) {
            return [target.coins, target.xp, 'Wounded a', target.name];
            } 
        // humiliated
        else {
            return [0, 0, "Humiliated by", target.name];
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
        let randomInt = Math.round(Math.random() * enemyArray.length);
        var reward = this.kill(potentialEnemiesArray[randomInt]);
        this.coins += reward[0];
        this.xp += reward[1];
        console.log(reward);
        var y = document.createElement("LI");
        let logMsg = reward[2]+' '+reward[3]+'.';
        var t = document.createTextNode(logMsg);
        y.appendChild(t);
        document.getElementById("logUL").prepend(y);
    }
}

class Enemy extends Character {
    constructor(name,health, strength,coins,xp) {
        super(name)
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
const enemyArray = [];
const goblin0 = new Enemy("goblin",5,0,10,5);
const goblin1 = new Enemy("goblin",6,1,15,15);
enemyArray.push(goblin0);
enemyArray.push(goblin1);
// player.campaign(enemyArray);