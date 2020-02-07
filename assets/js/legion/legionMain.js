// you can launch campaign every 30s
const campaignButtonRest = document.getElementById("camButton2");
const campaignButton1 = document.getElementById("camButton");
const campaignButton2 = document.getElementById("camButton3");
const navButtons = document.getElementsByClassName("navBlock");
const fiveSections = document.getElementsByClassName("moreInfo");
const imgButton = document.getElementById("imgButton");
const locationButton = document.getElementById("locButton");
const healButton = document.getElementById('healButton');
const goToShopButton = document.getElementById('goToShopButton');
const goToMountainsButton = document.getElementById('goToMountainsButton');
const goToForestButton = document.getElementById('goToForestButton');


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
    kill(target) {
        if (this.health <= 0) {
            return [0, 0, "wasted a campaign.", "Go heal"]
        }
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
                    return [target.coins, (rewardXp - 5), 'wounded a', target.name];
                }
            } else { // humiliated
                this.health -= 4;
                return [0, 0, "were humiliated by a", target.name];
            }
        }
    }
    buyEquipment(equipment) {
        player.inventory.push(equipment);

    }
}


class Player extends Character {
    constructor(name) {
        super(name);
        this.location = "Forest";
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
        var logMsg = 'You earned ' + reward[0] + ' coins and ' + reward[1] + ' xp when you ' + reward[2].toLowerCase() + ' ' + reward[3] + '.';
        var logMsg2 = 'You ' + reward[2] + ' ' + reward[3] + '.';
        var t = document.createTextNode(logMsg);
        var t2 = document.createTextNode(logMsg2);
        logLI1.appendChild(t);
        logLI2.appendChild(t2);
        document.getElementById("logUL").prepend(logLI1);
        var recentEvents = document.getElementById('recentEventsUL');
        recentEvents.removeChild(recentEvents.childNodes[2])
        recentEvents.prepend(logLI2);

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
            if (player.health < (player.level * 10)) {
                player.coins -= 10;
                player.health = (player.level + 10 - 1);
                // update Camp Stats
                updateCoinUI(this);
                // document.getElementById("gold").innerHTML = this.coins;
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
    updateProgressBar() {
        var elem = document.getElementById("myBar");
        // 
        var xpBase = 100 + ((this.level - 1) * 100); // divide by zero work around
        var width = ((this.xp - this.nextLevelXp) / xpBase) * 100;
        width += 100;
        console.log(width);
        elem.style.width = width + "%";
    }
}

const player = new Player("Unknown");
player.heal();
/*
function buttonHideOthers(buttonArray, divArray) {
    Hides other elements that do no correspond to 
    the relative button.  Button[index] must equal
    section[index]
    
    for (var i = 0; i < buttonArray.length; i++) {
        console.log("add listening to", buttonArray[i]);
        buttonArray[i].addEventListener("click", () =>{
            console.log('clicked')
            console.log('index = ', i);
            sectionHideOthers(i, divArray);
        })
    }
}

function sectionHideOthers(i, divArray) {
    // 
    console.log('click');
    for (var index = 0; index < divArray.length; index++) {
        console.log("hiding", divArray[index]);
        divArray[index].style.display = "none";
    }
    console.log(i);
    console.log(divArray);
    console.log("showing", divArray[i]);
    divArray[i].style.display = "block";
    
}

buttonHideOthers(navButtons, fiveSections);
*/

navButtons[0].addEventListener("click", () => {
    fiveSections[0].style.display = "block";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "none";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
})

navButtons[1].addEventListener("click", () => {
    fiveSections[0].style.display = "none";
    fiveSections[1].style.display = "block";
    fiveSections[2].style.display = "none";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
})

navButtons[2].addEventListener("click", () => {
    fiveSections[0].style.display = "none";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "block";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
})

navButtons[3].addEventListener("click", () => {
    fiveSections[0].style.display = "none";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "none";
    fiveSections[3].style.display = "block";
    fiveSections[4].style.display = "none";
})

locationButton.addEventListener("click", () => {
    fiveSections[0].style.display = "none";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "block";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
})


imgButton.addEventListener("click", () => {
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

goToMountainsButton.addEventListener("click", () => {
    console.log("Going to Mountains");
    player.location = "Mountains"
    locationButton.innerHTML = `Location: ${player.location}`
    fiveSections[0].style.display = "block";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "none";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
    logTravelUI(player);
    readyCampaign(campaignButton2, player.location, goToMountainsButton);


});

goToForestButton.addEventListener("click", () => {
    console.log("Going to Forest");
    player.location = "Forest"
    locationButton.innerHTML = `Location: ${player.location}`
    fiveSections[0].style.display = "block";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "none";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
    logTravelUI(player);
    readyCampaign(campaignButton2, player.location, goToForestButton);

});


"buySimpleBow"



function readyCampaign(campaignButton,location, goToButton) {
    // console.log(campaignButton);
    campaignButton1.style.display = "none";
    campaignButton2.style.display = "none";
    goToButton.style.display = "none";
    // Set the date we're counting down to
    var countDownDate = new Date().getTime();
    durationInMinutes = .1;
    var MS_PER_MINUTE = 60000;
    var countDownDate = new Date(countDownDate + durationInMinutes * MS_PER_MINUTE);

    // Update the count down every 1 second
    var x = setInterval(function () {
        // if player moved
        if (player.location !== location) {
            goToButton.style.display = "inline-grid";
            clearInterval(x);
        }
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        campaignButtonRest.style.display = "block";
        campaignButtonRest.innerHTML = 'Resting for: '
            + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            goToButton.style.display = "inline-block";
            if (player.location === location) {
            campaignButton.style.display = "block";
            campaignButtonRest.style.display = "none";
            return true;
            } else return false;
            
        }
    }, 500);
}
readyCampaign(campaignButton1, player.location, goToForestButton);

// Going to forest
campaignButton1.addEventListener("click", () => {
    readyCampaign(campaignButton1,player.location, goToForestButton);
    player.campaign(enemiesInForest);
    player.updateProgressBar();
    

})
// Go to Mountain
campaignButton2.addEventListener("click", () => {
    readyCampaign(campaignButton2, player.location, goToMountainsButton);
    player.campaign(enemiesInForest);
    player.updateProgressBar();
})

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



function buyShortSword(player) {
    var cost = 1500;
    var str = 15
    if (player.coins >= cost) {
        player.coins -= cost;
        var shortSword = new Weapon("Short Sword", cost, str);
        player.inventory.push(shortSword);
        player.strength = str;
        console.log('returning true');
        updateCoinUI(this);
        return true;
    } else return false;
}

function buySimpleBow(player) {
    var cost = 400;
    var str = 10;
    if (player.coins >= cost) {
        player.coins -= cost;
        var simpleBow = new Weapon("Short Sword", cost, str);
        player.inventory.push(simpleBow);
        player.strength = str;
        console.log('returning true');
        updateCoinUI(this);
        return true;
    } else return false;

}

function buySmallSpear(player) {
    var cost = 50;
    var str = 7;
    if (player.coins >= cost) {
        player.coins -= cost
        var smallSpear = new Weapon("Small Spear", cost, str);
        console.log('buying ' + smallSpear.name);
        player.inventory.push(smallSpear);
        player.strength = str;
        updateCoinUI(this);
        return true;
    } else return false;
}

function test() {
    player.campaign(enemiesInForest);
    player.coins += 30;
    player.updateProgressBar();
}

function rich(){
    player.coins += 1000;
}
/*
*
WEAPON BUYING AND EQUIPING
*
*/

// Weapon Buy and Equip buttons
const smallSpearBuyButton = document.getElementById("buySmallSpear");
const simpleBowBuyButton = document.getElementById("buySimpleBow");
const shortSwordBuyButton = document.getElementById("buyShortSword");

const smallSpearEquipButton = document.getElementById("equipSmallSpear");
const simpleBowEquipButton = document.getElementById("equipSimpleBow");
const shortSwordEquipButton = document.getElementById("equipShortSword");


smallSpearBuyButton.addEventListener("click", () => {
    if (buySmallSpear(player)) {
        smallSpearBuyButton.style.display = "none";
        smallSpearEquipButton.style.display = "inline-block";
        document.getElementById("strengthSpan").innerHTML = 7;
        document.getElementById("weaponSpan").innerHTML = "Small Spear";
        let l = document.createElement("LI");
        var t = document.createTextNode('You bought a small spear for 50 coins.');
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
    }
});

simpleBowBuyButton.addEventListener("click", () => {
    if (buySimpleBow(player)) {
        simpleBowBuyButton.style.display = "none";
        simpleBowEquipButton.style.display = "inline-block";
        document.getElementById("strengthSpan").innerHTML = 10;
        document.getElementById("weaponSpan").innerHTML = "Simple Bow";
        let l = document.createElement("LI");
        var t = document.createTextNode('You bought a simple bow for 400 coins');
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
    }
});


shortSwordBuyButton.addEventListener("click", () => {
    if (buyShortSword(player)) {
        shortSwordBuyButton.style.display = "none";
        shortSwordEquipButton.style.display = "inline-block";
        document.getElementById("strengthSpan").innerHTML = 10;
        document.getElementById("weaponSpan").innerHTML = "Short Sword";
        let l = document.createElement("LI");
        var t = document.createTextNode('You bought a short sword for 1,500 coins.');
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
    }
});

smallSpearEquipButton.addEventListener("click", () => {
    document.getElementById("strengthSpan").innerHTML = 7;
    document.getElementById("weaponSpan").innerHTML = "Small Spear";
});

simpleBowEquipButton.addEventListener("click", () => {
    document.getElementById("strengthSpan").innerHTML = 10;
    document.getElementById("weaponSpan").innerHTML = "Simple Bow";
});

shortSwordEquipButton.addEventListener("click", () => {
    document.getElementById("strengthSpan").innerHTML = 15;
    document.getElementById("weaponSpan").innerHTML = "Short Sword";
});

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

function logTravelUI(player) {
    console.log("logging in UI.")
    var logLI1 = document.createElement("LI");
    var logLI2 = document.createElement("LI");
    var logMSG = `You traveled to the ${player.location}`
    var t1 = document.createTextNode(logMSG);
    var t2 = document.createTextNode(logMSG);
    logLI1.appendChild(t1);
    logLI2.appendChild(t2)
    document.getElementById("logUL").prepend(logLI1);
    var recentEvents = document.getElementById('recentEventsUL');
    recentEvents.removeChild(recentEvents.childNodes[2])
    recentEvents.prepend(logLI2);
}