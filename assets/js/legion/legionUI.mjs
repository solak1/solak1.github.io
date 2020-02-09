export { LogUI, sellUI, equipUI, initNavSection, initTravelButtons, readyCampaign, initCampaignButtons};

const smallSpearBuyButton = document.getElementById("buySmallSpearButton");
const simpleBowBuyButton = document.getElementById("buySimpleBowButton");
const shortSwordBuyButton = document.getElementById("buyShortSwordButton");

const smallSpearEquipButton = document.getElementById("equipSmallSpearButton");
const simpleBowEquipButton = document.getElementById("equipSimpleBowButton");
const shortSwordEquipButton = document.getElementById("equipShortSwordButton");

// legion header
var header = document.getElementById('legionHeader');

/*
All Buttons
*/
// Next Campaign Buttons
const campaignButtonRest = document.getElementById("camButton2");
const campaignButton1 = document.getElementById("camButton");
const campaignButton2 = document.getElementById("camButton3");

// Top UI Bottons
const imgButton = document.getElementById("imgButton");
const locationButton = document.getElementById("locButton");
// Heal Buttons
const healButton = document.getElementById('healButton');
// Travel Buttons
const goToShopButton = document.getElementById('goToShopButton');
const goToMountainsButton = document.getElementById('goToMountainsButton');
const goToForestButton = document.getElementById('goToForestButton');
const goToTownButton = document.getElementById('goToTownButton');
const leaveTownButton = document.getElementById('leaveTownButton');
// travel button array
const travelButtons = Array.from(document.getElementsByClassName("travelButton"));
const shopButtons = Array.from(document.getElementsByClassName("shopButton"));
const outsideTownButtons = Array.from(document.getElementsByClassName("outsideTownButton"));
// travel sections
const shopSection = document.getElementById("townShop");
// Array of Elements (navigate & sections)
const navButtons = Array.from(document.getElementsByClassName("navBlock"));
const fiveSections = Array.from(document.getElementsByClassName("moreInfo"));




const logUI = new LogUI;

// Prototype function :D
function LogUI() {
    this.locationSection = document.getElementById("locationTips");
    this.locationSpan = document.getElementById("locationSpan");
    this.updateLocation = (player) => {
        /**
         * Update Location Span and Location Information
         */
        this.locationSpan.innerHTML = player.location;
        if (player.location === "Deep Forest") {
            return true;
        }
    }
    this.updateProgressBar = (player) => {
        /**
         * Update progress bar.
         * 
         * Future Feature: Add multiple progress bars.
         */
        let xpBase = 100 + ((player.level - 1) * 100); // divide by zero work around
        let width = ((player.xp - player.nextLevelXp) / xpBase) * 100;
        width += 100;
        // console.log(`New width: ${width}`);
        const progressBar = document.getElementById("myBar");
        progressBar.style.width = width + "%";
    }
    this.updateHealthBar = (player) => {
        /**
         * Update progress bar.
         * 
         * Future Feature: Add multiple progress bars.
         */
        let maxHP = (player.level*10 - 1); // divide by zero work around
        let dim = ((player.health/maxHP) * 100);
        
        // console.log(`New width: ${width}`);
        const progressBar = document.getElementById("hpSpanCur");
        // progressBar.style.height = dim + "%";
        progressBar.style.width = dim + "%";
    }
    this.logEncounter = (reward) => {
        /** 
         * Creates log based on an attempted kill.
         * 
         * @param {array} reward Array passed in from Player.kill containing coins, xp, and 2 phrases.
         *  */ 

        // Name data in reward array
        let coins   = reward[0],
            xp      = reward[1],
            phrase1 = reward[2].toLowerCase(),
            phrase2 = reward[3];
        
        // create strings
        let logMsg      = `You earned ${coins} coins and ${xp} when you ${phrase1} ${phrase2}. `,
            eventMsg    = 'You ' + reward[2] + ' ' + reward[3] + '.';

        // strings to text nodes
        let logText     = document.createTextNode(logMsg),
            eventText   = document.createTextNode(eventMsg);
        
        // create list items
        let logLI  = document.createElement("LI"),
            eventLI = document.createElement("LI");

        // Put text nodes in list items
        logLI.appendChild(logText);
        eventLI.appendChild(eventText);

        // prepend log
        document.getElementById("logUL").prepend(logLI);
        // delete recent event (only maintain 3 items)
        var recentEvents = document.getElementById('recentEventsUL');
        recentEvents.removeChild(recentEvents.childNodes[2])
        // prepend recent event
        recentEvents.prepend(eventLI);
    }
    this.logTravelUI = (player) => {
        // console.log("logging in UI.")
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
    this.showCamp = (sections) => {
        sections[0].style.display = "block";
        sections[1].style.display = "none";
        sections[2].style.display = "none";
        sections[3].style.display = "none";
        sections[4].style.display = "none";

    }
}


function sellUI(player) {
    // Weapon Buy and Equip buttons
    smallSpearBuyButton.addEventListener("click", () => {
        if (player.buySmallSpear()) {
            smallSpearBuyButton.style.display = "none";
            smallSpearEquipButton.style.display = "inline-block";
            document.getElementById("strengthSpan").innerHTML = 7;
            document.getElementById("weaponSpan").innerHTML = "Small Spear";
            let l = document.createElement("LI");
            var t = document.createTextNode('You bought a small spear for 50 coins.');
            l.appendChild(t);
            document.getElementById("logUL").prepend(l);
        }
    }, player);
    
    simpleBowBuyButton.addEventListener("click", () => {
        if (player.buySimpleBow()) {
            simpleBowBuyButton.style.display = "none";
            simpleBowEquipButton.style.display = "inline-block";
            document.getElementById("strengthSpan").innerHTML = 10;
            document.getElementById("weaponSpan").innerHTML = "Simple Bow";
            let l = document.createElement("LI");
            var t = document.createTextNode('You bought a simple bow for 400 coins');
            l.appendChild(t);
            document.getElementById("logUL").prepend(l);
        }
    }, player);
    shortSwordBuyButton.addEventListener("click", () => {
        if (player.buyShortSword()) {
            shortSwordBuyButton.style.display = "none";
            shortSwordEquipButton.style.display = "inline-block";
            document.getElementById("strengthSpan").innerHTML = 10;
            document.getElementById("weaponSpan").innerHTML = "Short Sword";
            let l = document.createElement("LI");
            var t = document.createTextNode('You bought a short sword for 1,500 coins.');
            l.appendChild(t);
            document.getElementById("logUL").prepend(l);
        }
    }, player);
}

function equipUI() {
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

}



function initNavSection() {
    // Nav section buttons
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
    
    // Header Buttons
    locationButton.addEventListener("click", () => {
        fiveSections[0].style.display = "none";
        fiveSections[1].style.display = "none";
        fiveSections[2].style.display = "block";
        fiveSections[3].style.display = "none";
        fiveSections[4].style.display = "none";
    })

    imgButton.addEventListener("click", () => {
        fiveSections[0].style.display = "none";
        fiveSections[1].style.display = "block";
        fiveSections[2].style.display = "none";
        fiveSections[3].style.display = "none";
        fiveSections[4].style.display = "none";
    })
}

function initTravelButtons(player) {
    goToShopButton.addEventListener("click", () => {
        // console.log("Going to Shop");
        // document.getElementById("travel").style.display = "none";
        fiveSections[4].style.display = "block";
        header.style.backgroundImage = "url('/assets/img/legion/shoppe-background9.jpg";
        header.style.backgroundPosition = "right center";
    });
    
    goToMountainsButton.addEventListener("click", () => {
        // console.log("Going to Mountains");
        let readyCampaignIn = "Mountains";
        player.location = "Mountains";
        locationButton.innerHTML = `Location: ${player.location}`;
        logUI.showCamp(fiveSections);
        logUI.logTravelUI(player);
        readyCampaign(campaignButton2, readyCampaignIn, goToMountainsButton, player);
        header.style.backgroundImage = "url('/assets/img/legion/mountains-background5.jpg";
        header.style.backgroundPosition = "right center";
    }, player);
    
    goToForestButton.addEventListener("click", () => {
        // console.log("Going to Forest");
        let readyCampaignIn = "Forest";
        player.location = readyCampaignIn;
        locationButton.innerHTML = `Location: ${player.location}`
        logUI.showCamp(fiveSections);
        logUI.logTravelUI(player);
        readyCampaign(campaignButton2, readyCampaignIn, goToForestButton, player);
        header.style.backgroundImage = "url('/assets/img/legion/forest-background.jpg";
        header.style.backgroundPosition = "left top";
    
    }, player);

    goToTownButton.addEventListener("click", () => {
        // console.log("Going to Town");
        player.location = 'Town'
        clearInterval(readyCampaign);
        campaignButtonRest.innerHTML = "In Town"
        locationButton.innerHTML = `Location: ${player.location}`
        logUI.logTravelUI(player);
        for (let ele of travelButtons) {
            ele.style.display = 'none';
        }
        for (let ele of shopButtons) {
            ele.style.display = 'inline-block'
        }
        header.style.backgroundImage = "url('/assets/img/legion/town-background.jpg";
        header.style.backgroundPosition = "right center";
    }, player);

    leaveTownButton.addEventListener("click", () => {
        // console.log("Leaving");
        player.location = 'Town Limits'
        campaignButtonRest.innerHTML = "Town Limits"
        locationButton.innerHTML = `Location: ${player.location}`
        logUI.logTravelUI(player);
        for (let ele of travelButtons) {
            ele.style.display = 'none';
        }
        for (let ele of outsideTownButtons) {
            ele.style.display = 'inline-block'
        }
        shopSection.style.display = "none";
        header.style.backgroundImage = "url('/assets/img/legion/town-background.jpg";
        header.style.backgroundPosition = "left center";
    }, player);

}



function readyCampaign(campaignButton, readyCampaignIn, goToButton, player) {
    // console.log(campaignButton);
    // console.log(readyCampaignIn);
    // console.log(goToButton);
    // console.log(player);

    campaignButton1.style.display = "none";
    campaignButton2.style.display = "none";
    goToButton.style.display = "none";
    // Set the date we're counting down to
    var countDownDate = new Date().getTime();
    var durationInMinutes = .1;
    var MS_PER_MINUTE = 60000;
    countDownDate = new Date(countDownDate + (durationInMinutes * MS_PER_MINUTE));
    // console.log(countDownDate);
    
    // Update the count down every 1 second
    let x = setInterval(function () {
        // console.log('timing..');
        // if player moved
        // console.log(player);
        if (player.location === 'Town') {
            clearInterval(x);
            campaignButtonRest.innerHTML = "In Town";
            return null;
        }
        else if (player.location !== readyCampaignIn) {
            goToButton.style.display = "inline-grid";
          // console.log(player.location, readyCampaignIn);
          // console.log("player left area.")
            clearInterval(x);
        }
        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;
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
            if (player.location === readyCampaignIn) {
                campaignButton.style.display = "block";
                campaignButtonRest.style.display = "none";
                return true;
            } else false;
        }
    }, 500);
}

function initCampaignButtons(player) {
    // Going to forest
    campaignButton1.addEventListener("click", () => {
        readyCampaign(campaignButton1, "Forest", goToForestButton, player);
        player.campaign();
        logUI.updateProgressBar(player);
        rotateWeapon(imgButton);
        

    }, player);
    // Go to Mountain
    campaignButton2.addEventListener("click", () => {
        readyCampaign(campaignButton2, "Mountains", goToMountainsButton, player);
        player.location = "Mountains"
        player.campaign();
        logUI.updateProgressBar(player);
        rotateWeapon(imgButton);
    }, player);
}


function rotateWeapon(img) {
    img.style.transform= "rotate(20deg)"
    setTimeout(() => { img.style.transform= "rotate(0deg)"; }, 500);
}

    