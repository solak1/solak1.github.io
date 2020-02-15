export {
  LogUI,
  sellUI,
  equipUI,
  initNavSection,
  initTravelButtons,
  readyCampaign,
  initCampaignButtons
};

const smallSpearBuyButton = document.getElementById("buySmallSpearButton");
const simpleBowBuyButton = document.getElementById("buySimpleBowButton");
const shortSwordBuyButton = document.getElementById("buyShortSwordButton");
const standardSpearBuyButton = document.getElementById(
  "buyStandardSpearButton"
);
const craftedBowBuyButton = document.getElementById("buyCraftedBowButton");
const standardSwordBuyButton = document.getElementById(
  "buyStandardSwordButton"
);
const longSpearBuyButton = document.getElementById("buyLongSpearButton");
const engineeredBowBuyButton = document.getElementById(
  "buyEngineeredBowButton"
);
const longSwordBuyButton = document.getElementById("buyLongSwordButton");
const steelSpearBuyButton = document.getElementById("buySteelSpearButton");
const sculptedBowBuyButton = document.getElementById("buySculptedBowButton");
const steelSwordBuyButton = document.getElementById("buySteelSwordButton");

const clothTunicBuyButton = document.getElementById("buyClothTunicButton");
const studdedTunicBuyButton = document.getElementById("buyStuddedTunicButton");
const leatherCuirassBuyButton = document.getElementById(
  "buyLeatherCuirassButton"
);
const ironChainmailBuyButton = document.getElementById(
  "buyIronChainmailButton"
);

const smallSpearEquipButton = document.getElementById("equipSmallSpearButton");
const simpleBowEquipButton = document.getElementById("equipSimpleBowButton");
const shortSwordEquipButton = document.getElementById("equipShortSwordButton");
const standardSpearEquipButton = document.getElementById(
  "equipStandardSpearButton"
);
const craftedBowEquipButton = document.getElementById("equipCraftedBowButton");
const standardSwordEquipButton = document.getElementById(
  "equipStandardSwordButton"
);
const longSpearEquipButton = document.getElementById("equipLongSpearButton");
const engineeredBowEquipButton = document.getElementById(
  "equipEngineeredBowButton"
);
const longSwordEquipButton = document.getElementById("equipLongSwordButton");
const steelSpearEquipButton = document.getElementById("equipSteelSpearButton");
const sculptedBowEquipButton = document.getElementById(
  "equipSculptedBowButton"
);
const steelSwordEquipButton = document.getElementById("equipSteelSwordButton");
const clothTunicEquipButton = document.getElementById("equipClothTunicButton");
const studdedTunicEquipButton = document.getElementById(
  "equipStuddedTunicButton"
);
const leatherCuirassEquipButton = document.getElementById(
  "equipLeatherCuirassButton"
);
const ironChainmailEquipButton = document.getElementById(
  "equipIronChainmailButton"
);

const weaponImg = document.getElementById("weaponImg");

// legion header
var header = document.getElementById("legionHeader");

/*
All Buttons
*/
// Next Campaign Buttons
const campaignButtonRest = document.getElementById("camButton2");
const campaignButton1 = document.getElementById("camButton");
const campaignButton2 = document.getElementById("camButton3");
const campaignButton3 = document.getElementById("camButton4");
const campaignButton4 = document.getElementById("camButton5");

// Top UI Bottons
const imgButton = document.getElementById("imgButton");
const locationButton = document.getElementById("locButton");
// Heal Buttons
const healButton = document.getElementById("healButton");
// Travel Buttons
const goToShopButton = document.getElementById("goToShopButton");
const goToForestButton = document.getElementById("goToForestButton");
const goToMountainsButton = document.getElementById("goToMountainsButton");
const goToDesertButton = document.getElementById("goToDesertButton");
const goToOasisButton = document.getElementById("goToOasisButton");
const goToTownButton = document.getElementById("goToTownButton");
const leaveTownButton = document.getElementById("leaveTownButton");
// travel button array
const travelButtons = Array.from(
  document.getElementsByClassName("travelButton")
);
const shopButtons = Array.from(document.getElementsByClassName("shopButton"));
const outsideTownButtons = Array.from(
  document.getElementsByClassName("outsideTownButton")
);
// travel sections
const shopSection = document.getElementById("townShop");
// Array of Elements (navigate & sections)
const navButtons = Array.from(document.getElementsByClassName("navBlock"));
const fiveSections = Array.from(document.getElementsByClassName("moreInfo"));

const logUI = new LogUI();

// Prototype function :D
function LogUI() {
  this.locationSection = document.getElementById("locationTips");
  this.locationSpan = document.getElementById("locationSpan");
  this.updateLocation = player => {
    /**
     * Update Location Span and Location Information
     */
    this.locationSpan.innerHTML = player.location;
    if (player.location === "Forest") {
      return true;
    }
  };
  this.updateProgressBar = player => {
    /**
     * Update progress bar.
     *
     * Future Feature: Add multiple progress bars.
     */
    let xpBase = 100 + (player.level - 1) * 100; // divide by zero work around
    let width = ((player.xp - player.nextLevelXp) / xpBase) * 100;
    width += 100;
    // console.log(`New width: ${width}`);
    const progressBar = document.getElementById("myBar");
    progressBar.style.width = width + "%";
  };
  this.updateHealthBar = player => {
    /**
     * Update progress bar.
     *
     * Future Feature: Add multiple progress bars.
     */
    let maxHP = 10 + player.level - 1; // divide by zero work around
    let dim = (player.health / maxHP) * 100;

    // console.log(`New width: ${width}`);
    const progressBar = document.getElementById("hpSpanCur");
    // progressBar.style.height = dim + "%";
    progressBar.style.width = dim + "%";
  };
  this.logEncounter = reward => {
    /**
     * Creates log based on an attempted kill.
     *
     * @param {array} reward Array passed in from Player.kill containing coins, xp, and 2 phrases.
     *  */

    // Name data in reward array
    let coins = reward[0],
      xp = reward[1],
      phrase1 = reward[2].toLowerCase(),
      phrase2 = reward[3];

    // create strings
    let logMsg = `You earned ${coins} coins and ${xp} xp when you ${phrase1} ${phrase2}. `,
      eventMsg = "You " + reward[2] + " " + reward[3] + ".";

    // strings to text nodes
    let logText = document.createTextNode(logMsg),
      eventText = document.createTextNode(eventMsg);

    // create list items
    let logLI = document.createElement("LI"),
      eventLI = document.createElement("LI");

    // Put text nodes in list items
    logLI.appendChild(logText);
    eventLI.appendChild(eventText);

    // prepend log
    document.getElementById("logUL").prepend(logLI);
    // delete recent event (only maintain 3 items)
    var recentEvents = document.getElementById("recentEventsUL");
    recentEvents.removeChild(recentEvents.childNodes[2]);
    // prepend recent event
    recentEvents.prepend(eventLI);
  };
  this.logTravelUI = player => {
    // console.log("logging in UI.")
    var logLI1 = document.createElement("LI");
    var logLI2 = document.createElement("LI");
    var logMSG = `You traveled to the ${player.location}`;
    var t1 = document.createTextNode(logMSG);
    var t2 = document.createTextNode(logMSG);
    logLI1.appendChild(t1);
    logLI2.appendChild(t2);
    document.getElementById("logUL").prepend(logLI1);
    var recentEvents = document.getElementById("recentEventsUL");
    recentEvents.removeChild(recentEvents.childNodes[2]);
    recentEvents.prepend(logLI2);
  };
  this.showCamp = sections => {
    sections[0].style.display = "block";
    sections[1].style.display = "none";
    sections[2].style.display = "none";
    sections[3].style.display = "none";
    sections[4].style.display = "none";
  };
}

function sellUI(player) {
  // Weapon Buy and Equip buttons
  smallSpearBuyButton.addEventListener(
    "click",
    () => {
      if (player.buySmallSpear()) {
        smallSpearBuyButton.style.display = "none";
        smallSpearEquipButton.style.display = "inline-block";
        weaponImg.src = "/assets/img/legion/spear.png";
        player.weaponStrength = 7;
        document.getElementById(
          "totalStrengthSpan"
        ).innerHTML = player.totalStr();
        document.getElementById("strengthSpan").innerHTML = 7;
        document.getElementById("weaponSpan").innerHTML = "Small Spear";
        let l = document.createElement("LI");
        var t = document.createTextNode(
          "You bought a small spear for 50 coins."
        );
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
      }
    },
    player
  );

  simpleBowBuyButton.addEventListener(
    "click",
    () => {
      if (player.buySimpleBow()) {
        simpleBowBuyButton.style.display = "none";
        simpleBowEquipButton.style.display = "inline-block";
        weaponImg.src = "/assets/img/legion/bow2.png";
        player.weaponStrength = 10;
        document.getElementById(
          "totalStrengthSpan"
        ).innerHTML = player.totalStr();
        document.getElementById("strengthSpan").innerHTML = 10;
        document.getElementById("weaponSpan").innerHTML = "Simple Bow";
        let l = document.createElement("LI");
        var t = document.createTextNode(
          "You bought a simple bow for 400 coins"
        );
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
      }
    },
    player
  );
  shortSwordBuyButton.addEventListener(
    "click",
    () => {
      if (player.buyShortSword()) {
        shortSwordBuyButton.style.display = "none";
        shortSwordEquipButton.style.display = "inline-block";
        weaponImg.src = "/assets/img/legion/sword.png";
        player.weaponStrength = 15;
        document.getElementById(
          "totalStrengthSpan"
        ).innerHTML = player.totalStr();
        document.getElementById("strengthSpan").innerHTML = 10;
        document.getElementById("weaponSpan").innerHTML = "Short Sword";
        let l = document.createElement("LI");
        var t = document.createTextNode(
          "You bought a short sword for 1,500 coins."
        );
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
      }
    },
    player
  );
  // location 2 gear

  standardSpearBuyButton.addEventListener(
    "click",
    () => {
      if (player.buyStandardSpear()) {
        standardSpearBuyButton.style.display = "none";
        standardSpearEquipButton.style.display = "inline-block";
        weaponImg.src = "/assets/img/legion/spear.png";
        player.weaponStrength = 17;
        document.getElementById(
          "totalStrengthSpan"
        ).innerHTML = player.totalStr();
        document.getElementById("strengthSpan").innerHTML = 17;
        document.getElementById("weaponSpan").innerHTML = "Long Spear";
        let l = document.createElement("LI");
        var t = document.createTextNode(
          "You bought a standard spear for 2000 coins."
        );
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
      }
    },
    player
  );

  craftedBowBuyButton.addEventListener(
    "click",
    () => {
      if (player.buyCraftedBow()) {
        craftedBowBuyButton.style.display = "none";
        craftedBowEquipButton.style.display = "inline-block";
        weaponImg.src = "/assets/img/legion/bow2.png";
        player.weaponStrength = 20;
        document.getElementById(
          "totalStrengthSpan"
        ).innerHTML = player.totalStr();
        document.getElementById("strengthSpan").innerHTML = 20;
        document.getElementById("weaponSpan").innerHTML = "Crafted Bow";
        let l = document.createElement("LI");
        var t = document.createTextNode(
          "You bought a simple bow for 3400 coins"
        );
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
      }
    },
    player
  );
  standardSwordBuyButton.addEventListener(
    "click",
    () => {
      if (player.buyShortSword()) {
        standardSwordBuyButton.style.display = "none";
        standardSwordEquipButton.style.display = "inline-block";
        weaponImg.src = "/assets/img/legion/sword.png";
        player.weaponStrength = 25;
        document.getElementById(
          "totalStrengthSpan"
        ).innerHTML = player.totalStr();
        document.getElementById("strengthSpan").innerHTML = 10;
        document.getElementById("weaponSpan").innerHTML = "Standard Sword";
        let l = document.createElement("LI");
        var t = document.createTextNode(
          "You bought a short sword for 7,200 coins."
        );
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
      }
    },
    player
  );

  longSpearBuyButton.addEventListener(
    "click",
    () => {
      if (player.buyLongSpear()) {
        longSpearBuyButton.style.display = "none";
        longSpearEquipButton.style.display = "inline-block";
        weaponImg.src = "/assets/img/legion/spear.png";
        player.weaponStrength = 27;
        document.getElementById(
          "totalStrengthSpan"
        ).innerHTML = player.totalStr();
        document.getElementById("strengthSpan").innerHTML = 27;
        document.getElementById("weaponSpan").innerHTML = "Long Spear";
        let l = document.createElement("LI");
        var t = document.createTextNode(
          "You bought a long spear for 12,000 coins."
        );
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
      }
    },
    player
  );

  engineeredBowBuyButton.addEventListener(
    "click",
    () => {
      if (player.buySimpleBow()) {
        engineeredBowBuyButton.style.display = "none";
        engineeredBowEquipButton.style.display = "inline-block";
        weaponImg.src = "/assets/img/legion/bow2.png";
        player.weaponStrength = 30;
        document.getElementById(
          "totalStrengthSpan"
        ).innerHTML = player.totalStr();
        document.getElementById("strengthSpan").innerHTML = 30;
        document.getElementById("weaponSpan").innerHTML = "Simple Bow";
        let l = document.createElement("LI");
        var t = document.createTextNode(
          "You bought a engineered bow for 15,500 coins"
        );
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
      }
    },
    player
  );
  longSwordBuyButton.addEventListener(
    "click",
    () => {
      if (player.buyLongSword()) {
        longSwordBuyButton.style.display = "none";
        longSwordEquipButton.style.display = "inline-block";
        weaponImg.src = "/assets/img/legion/sword.png";
        player.weaponStrength = 35;
        document.getElementById(
          "totalStrengthSpan"
        ).innerHTML = player.totalStr();
        document.getElementById("strengthSpan").innerHTML = 35;
        document.getElementById("weaponSpan").innerHTML = "Long Sword";
        let l = document.createElement("LI");
        var t = document.createTextNode(
          "You bought a long sword for 24,000 coins."
        );
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
      }
    },
    player
  );

  steelSpearBuyButton.addEventListener(
    "click",
    () => {
      if (player.buySteelSpear()) {
        steelSpearBuyButton.style.display = "none";
        steelSpearEquipButton.style.display = "inline-block";
        weaponImg.src = "/assets/img/legion/spear.png";
        player.weaponStrength = 37;
        document.getElementById(
          "totalStrengthSpan"
        ).innerHTML = player.totalStr();
        document.getElementById("strengthSpan").innerHTML = 37;
        document.getElementById("weaponSpan").innerHTML = "Steel Spear";
        let l = document.createElement("LI");
        var t = document.createTextNode(
          "You bought a steel spear for 32,000 coins."
        );
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
      }
    },
    player
  );

  sculptedBowBuyButton.addEventListener(
    "click",
    () => {
      if (player.buySculptedBow()) {
        sculptedBowBuyButton.style.display = "none";
        sculptedBowEquipButton.style.display = "inline-block";
        weaponImg.src = "/assets/img/legion/bow2.png";
        player.weaponStrength = 40;
        document.getElementById(
          "totalStrengthSpan"
        ).innerHTML = player.totalStr();
        document.getElementById("strengthSpan").innerHTML = 40;
        document.getElementById("weaponSpan").innerHTML = "Sculpted Bow";
        let l = document.createElement("LI");
        var t = document.createTextNode(
          "You bought a sculpted bow for 40,000 coins"
        );
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
      }
    },
    player
  );
  steelSwordBuyButton.addEventListener(
    "click",
    () => {
      if (player.buySteelSword()) {
        steelSwordBuyButton.style.display = "none";
        steelSwordEquipButton.style.display = "inline-block";
        weaponImg.src = "/assets/img/legion/sword.png";
        player.weaponStrength = 45;
        document.getElementById(
          "totalStrengthSpan"
        ).innerHTML = player.totalStr();
        document.getElementById("strengthSpan").innerHTML = 45;
        document.getElementById("weaponSpan").innerHTML = "Steel Sword";
        let l = document.createElement("LI");
        var t = document.createTextNode(
          "You bought a steel sword for 50,000 coins."
        );
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
      }
    },
    player
  );

  clothTunicBuyButton.addEventListener(
    "click",
    () => {
      if (player.buyClothTunic()) {
        clothTunicBuyButton.style.display = "none";
        clothTunicEquipButton.style.display = "inline-block";
        document.getElementById("defenceBonusSpan").innerHTML = 2;
        document.getElementById("armorSpan").innerHTML = "Cloth Tunic";
        player.defenceBonus = 2;
        let l = document.createElement("LI");
        var t = document.createTextNode(
          "You bought a cloth tunic for 700 coins."
        );
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
      }
    },
    player
  );

  studdedTunicBuyButton.addEventListener(
    "click",
    () => {
      if (player.buyStuddedTunic()) {
        studdedTunicBuyButton.style.display = "none";
        studdedTunicEquipButton.style.display = "inline-block";
        document.getElementById("defenceBonusSpan").innerHTML = 4;
        document.getElementById("armorSpan").innerHTML = "Studded Tunic";
        player.defenceBonus = 4;
        let l = document.createElement("LI");
        var t = document.createTextNode(
          "You bought a studded tunic for 4,800 coins"
        );
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
      }
    },
    player
  );
  leatherCuirassBuyButton.addEventListener(
    "click",
    () => {
      if (player.buyLeatherCuirass()) {
        leatherCuirassBuyButton.style.display = "none";
        leatherCuirassEquipButton.style.display = "inline-block";
        // weaponImg.src = "/assets/img/legion/sword.png";
        player.defenceBonus = 6;
        document.getElementById("armorSpan").innerHTML = "Leather Cuirass";
        document.getElementById("defenceBonusSpan").innerHTML = 6;
        // document.getElementById("weaponSpan").innerHTML = "Long Sword";
        let l = document.createElement("LI");
        var t = document.createTextNode(
          "You bought a leather cuirass for 18,000 coins."
        );
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
      }
    },
    player
  );
  ironChainmailBuyButton.addEventListener(
    "click",
    () => {
      if (player.buyIronChainmail()) {
        ironChainmailBuyButton.style.display = "none";
        ironChainmailEquipButton.style.display = "inline-block";
        // weaponImg.src = "/assets/img/legion/sword.png";
        player.defenceBonus = 8;
        // document.getElementById('totalStrengthSpan').innerHTML = player.totalStr();
        document.getElementById("defenceBonusSpan").innerHTML = 8;
        document.getElementById("armorSpan").innerHTML = "Iron Chainmail";
        let l = document.createElement("LI");
        var t = document.createTextNode(
          "You bought a iron chainmail for 42,000 coins."
        );
        l.appendChild(t);
        document.getElementById("logUL").prepend(l);
      }
    },
    player
  );
}

function equipUI(player) {
  smallSpearEquipButton.addEventListener(
    "click",
    () => {
      player.weaponStrength = 7;
      document.getElementById(
        "totalStrengthSpan"
      ).innerHTML = player.totalStr();
      document.getElementById("strengthSpan").innerHTML = 7;
      document.getElementById("weaponSpan").innerHTML = "Small Spear";
      weaponImg.src = "/assets/img/legion/spear.png";
    },
    player
  );

  simpleBowEquipButton.addEventListener(
    "click",
    () => {
      player.weaponStrength = 10;
      document.getElementById(
        "totalStrengthSpan"
      ).innerHTML = player.totalStr();
      document.getElementById("strengthSpan").innerHTML = 10;
      document.getElementById("weaponSpan").innerHTML = "Simple Bow";
      weaponImg.src = "/assets/img/legion/bow2.png";
    },
    player
  );

  shortSwordEquipButton.addEventListener(
    "click",
    () => {
      player.weaponStrength = 15;
      document.getElementById(
        "totalStrengthSpan"
      ).innerHTML = player.totalStr();
      document.getElementById("strengthSpan").innerHTML = 15;
      document.getElementById("weaponSpan").innerHTML = "Short Sword";
      weaponImg.src = "/assets/img/legion/sword.png";
    },
    player
  );

  standardSpearEquipButton.addEventListener(
    "click",
    () => {
      player.weaponStrength = 17;
      document.getElementById(
        "totalStrengthSpan"
      ).innerHTML = player.totalStr();
      document.getElementById("strengthSpan").innerHTML = 17;
      document.getElementById("weaponSpan").innerHTML = "Long Spear";
      weaponImg.src = "/assets/img/legion/spear.png";
    },
    player
  );

  craftedBowEquipButton.addEventListener(
    "click",
    () => {
      player.weaponStrength = 20;
      document.getElementById(
        "totalStrengthSpan"
      ).innerHTML = player.totalStr();
      document.getElementById("strengthSpan").innerHTML = 20;
      document.getElementById("weaponSpan").innerHTML = "Crafted Bow";
      weaponImg.src = "/assets/img/legion/bow2.png";
    },
    player
  );

  standardSwordEquipButton.addEventListener(
    "click",
    () => {
      player.weaponStrength = 25;
      document.getElementById(
        "totalStrengthSpan"
      ).innerHTML = player.totalStr();
      document.getElementById("strengthSpan").innerHTML = 25;
      document.getElementById("weaponSpan").innerHTML = "Standard Sword";
      weaponImg.src = "/assets/img/legion/sword.png";
    },
    player
  );

  longSpearEquipButton.addEventListener(
    "click",
    () => {
      player.weaponStrength = 27;
      document.getElementById(
        "totalStrengthSpan"
      ).innerHTML = player.totalStr();
      document.getElementById("strengthSpan").innerHTML = 27;
      document.getElementById("weaponSpan").innerHTML = "Long Spear";
      weaponImg.src = "/assets/img/legion/spear.png";
    },
    player
  );

  engineeredBowEquipButton.addEventListener(
    "click",
    () => {
      player.weaponStrength = 30;
      document.getElementById(
        "totalStrengthSpan"
      ).innerHTML = player.totalStr();
      document.getElementById("strengthSpan").innerHTML = 30;
      document.getElementById("weaponSpan").innerHTML = "Engineered Bow";
      weaponImg.src = "/assets/img/legion/bow2.png";
    },
    player
  );

  longSwordEquipButton.addEventListener(
    "click",
    () => {
      player.weaponStrength = 35;
      document.getElementById(
        "totalStrengthSpan"
      ).innerHTML = player.totalStr();
      document.getElementById("strengthSpan").innerHTML = 35;
      document.getElementById("weaponSpan").innerHTML = "Long Sword";
      weaponImg.src = "/assets/img/legion/sword.png";
    },
    player
  );

  steelSpearEquipButton.addEventListener(
    "click",
    () => {
      player.weaponStrength = 37;
      document.getElementById(
        "totalStrengthSpan"
      ).innerHTML = player.totalStr();
      document.getElementById("strengthSpan").innerHTML = 37;
      document.getElementById("weaponSpan").innerHTML = "Steel Spear";
      weaponImg.src = "/assets/img/legion/spear.png";
    },
    player
  );

  sculptedBowEquipButton.addEventListener(
    "click",
    () => {
      player.weaponStrength = 40;
      document.getElementById(
        "totalStrengthSpan"
      ).innerHTML = player.totalStr();
      document.getElementById("strengthSpan").innerHTML = 40;
      document.getElementById("weaponSpan").innerHTML = "Sculpted Bow";
      weaponImg.src = "/assets/img/legion/bow2.png";
    },
    player
  );

  steelSwordEquipButton.addEventListener(
    "click",
    () => {
      player.weaponStrength = 45;
      document.getElementById(
        "totalStrengthSpan"
      ).innerHTML = player.totalStr();
      document.getElementById("strengthSpan").innerHTML = 45;
      document.getElementById("weaponSpan").innerHTML = "Steel Sword";
      weaponImg.src = "/assets/img/legion/sword.png";
    },
    player
  );

  clothTunicEquipButton.addEventListener(
    "click",
    () => {
      player.defenceBonus = 2;
      document.getElementById("defenceBonusSpan").innerHTML =
        player.defenceBonus;
      document.getElementById("armorSpan").innerHTML = "Cloth Tunic";
    },
    player
  );

  studdedTunicEquipButton.addEventListener(
    "click",
    () => {
      player.defenceBonus = 4;
      document.getElementById("defenceBonusSpan").innerHTML =
        player.defenceBonus;
      document.getElementById("armorSpan").innerHTML = "Studded Tunic";
    },
    player
  );

  leatherCuirassEquipButton.addEventListener(
    "click",
    () => {
      player.defenceBonus = 6;
      document.getElementById("defenceBonusSpan").innerHTML =
        player.defenceBonus;
      document.getElementById("armorSpan").innerHTML = "Leather Cuirass";
    },
    player
  );
  ironChainmailEquipButton.addEventListener(
    "click",
    () => {
      player.defenceBonus = 8;
      document.getElementById("defenceBonusSpan").innerHTML =
        player.defenceBonus;
      document.getElementById("armorSpan").innerHTML = "Iron Chainmail";
    },
    player
  );
}

function initNavSection() {
  // Nav section buttons
  navButtons[0].addEventListener("click", () => {
    fiveSections[0].style.display = "block";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "none";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
  });

  navButtons[1].addEventListener("click", () => {
    fiveSections[0].style.display = "none";
    fiveSections[1].style.display = "block";
    fiveSections[2].style.display = "none";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
  });

  navButtons[2].addEventListener("click", () => {
    fiveSections[0].style.display = "none";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "block";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
  });

  navButtons[3].addEventListener("click", () => {
    fiveSections[0].style.display = "none";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "none";
    fiveSections[3].style.display = "block";
    fiveSections[4].style.display = "none";
  });

  // Header Buttons
  locationButton.addEventListener("click", () => {
    fiveSections[0].style.display = "none";
    fiveSections[1].style.display = "none";
    fiveSections[2].style.display = "block";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
  });

  imgButton.addEventListener("click", () => {
    fiveSections[0].style.display = "none";
    fiveSections[1].style.display = "block";
    fiveSections[2].style.display = "none";
    fiveSections[3].style.display = "none";
    fiveSections[4].style.display = "none";
  });
}

function initTravelButtons(player) {
  goToShopButton.addEventListener("click", () => {
    player.location = "Shoppe";
    campaignButtonRest.innerHTML = "Shoppe";
    locationButton.innerHTML = `Location: ${player.location}`;
    fiveSections[4].style.display = "block";
    // readyCampaign(null, null, null, null);
    header.style.backgroundImage =
      "url('/assets/img/legion/shoppe-background10.jpg";
    header.style.backgroundPosition = "right center";
  });

  goToForestButton.addEventListener(
    "click",
    () => {
      // console.log("Going to Forest");
      let readyCampaignIn = "Forest";
      player.location = readyCampaignIn;
      locationButton.innerHTML = `Location: ${player.location}`;
      logUI.showCamp(fiveSections);
      logUI.logTravelUI(player);
      readyCampaign(campaignButton1, readyCampaignIn, goToForestButton, player);
      header.style.backgroundImage =
        "url('/assets/img/legion/forest-background2.jpg";
      header.style.backgroundPosition = "left top";
    },
    player
  );

  goToMountainsButton.addEventListener(
    "click",
    () => {
      // console.log("Going to Mountains");
      let readyCampaignIn = "Mountains";
      player.location = "Mountains";
      locationButton.innerHTML = `Location: ${player.location}`;
      logUI.showCamp(fiveSections);
      logUI.logTravelUI(player);
      readyCampaign(
        campaignButton2,
        readyCampaignIn,
        goToMountainsButton,
        player
      );
      header.style.backgroundImage =
        "url('/assets/img/legion/mountains-background6.jpg";
      header.style.backgroundPosition = "right center";
    },
    player
  );

  goToDesertButton.addEventListener(
    "click",
    () => {
      // console.log("Going to Desert");
      let readyCampaignIn = "Desert";
      player.location = readyCampaignIn;
      locationButton.innerHTML = `Location: ${player.location}`;
      logUI.showCamp(fiveSections);
      logUI.logTravelUI(player);
      readyCampaign(campaignButton3, readyCampaignIn, goToDesertButton, player);
      header.style.backgroundImage =
        "url('/assets/img/legion/desert-background6.jpg";
      header.style.backgroundPosition = "center center";
    },
    player
  );

  goToOasisButton.addEventListener(
    "click",
    () => {
      // console.log("Going to Oasis");
      let readyCampaignIn = "Oasis";
      player.location = readyCampaignIn;
      locationButton.innerHTML = `Location: ${player.location}`;
      logUI.showCamp(fiveSections);
      logUI.logTravelUI(player);
      readyCampaign(campaignButton4, readyCampaignIn, goToDesertButton, player);
      header.style.backgroundImage =
        "url('/assets/img/legion/oasis-background.png";
      header.style.backgroundPosition = "center center";
    },
    player
  );

  goToTownButton.addEventListener(
    "click",
    () => {
      // console.log("Going to Town");
      player.location = "Town";
      // clearInterval(readyCampaign);
      campaignButton1.style.display = "none";
      campaignButton2.style.display = "none";
      campaignButton3.style.display = "none";
      campaignButtonRest.style.display = "inline-block";
      campaignButtonRest.innerHTML = "In Town";
      locationButton.innerHTML = `Location: ${player.location}`;
      logUI.logTravelUI(player);
      for (let ele of travelButtons) {
        ele.style.display = "none";
      }
      for (let ele of shopButtons) {
        ele.style.display = "inline-block";
      }
      header.style.backgroundImage =
        "url('/assets/img/legion/town-background.jpg";
      header.style.backgroundPosition = "right center";
    },
    player
  );

  leaveTownButton.addEventListener(
    "click",
    () => {
      // console.log("Leaving");
      player.location = "Town Limits";
      clearInterval(readyCampaign);
      campaignButton1.style.display = "none";
      campaignButton2.style.display = "none";
      campaignButton3.style.display = "none";
      campaignButtonRest.innerHTML = "Town Limits";
      locationButton.innerHTML = `Location: ${player.location}`;
      logUI.logTravelUI(player);
      for (let ele of travelButtons) {
        ele.style.display = "none";
      }
      for (let ele of outsideTownButtons) {
        ele.style.display = "inline-block";
      }
      shopSection.style.display = "none";
      header.style.backgroundImage =
        "url('/assets/img/legion/town-background.jpg";
      header.style.backgroundPosition = "left center";
    },
    player
  );
}

function readyCampaign(campaignButton, readyCampaignIn, goToButton, player) {
  // console.log(campaignButton);
  // console.log(readyCampaignIn);
  // console.log(goToButton);
  // console.log(player);

  campaignButton1.style.display = "none";
  campaignButton2.style.display = "none";
  campaignButton3.style.display = "none";
  campaignButton4.style.display = "none";

  goToButton.style.display = "none";
  // Set the date we're counting down to
  var countDownDate = new Date().getTime();
  var durationInMinutes = 0.01;
  var MS_PER_MINUTE = 60000;
  countDownDate = new Date(countDownDate + durationInMinutes * MS_PER_MINUTE);
  // console.log(countDownDate);

  // Update the count down every 1 second
  let x = setInterval(function() {
    // console.log('timing..');
    // if player moved
    // console.log(player);
    if (player.location === "Town") {
      clearInterval(x);
      campaignButtonRest.innerHTML = "In Town";
      return null;
    } else if (player.location !== readyCampaignIn) {
      campaignButton1.style.display = "none";
      campaignButton2.style.display = "none";
      campaignButton3.style.display = "none";
      campaignButton4.style.display = "none";
      // console.log(player.location, readyCampaignIn);
      // console.log("player left area.")
      clearInterval(x);
    }
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    seconds++; //
    // Output the result in an element with id="demo"
    campaignButtonRest.style.display = "block";
    campaignButtonRest.innerHTML = "Resting for: " + seconds + "s ";
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
  campaignButton1.addEventListener(
    "click",
    () => {
      readyCampaign(campaignButton1, "Forest", goToForestButton, player);
      player.campaign();
      logUI.updateProgressBar(player);
      rotateWeapon(imgButton);
    },
    player
  );
  // Go to Mountain
  campaignButton2.addEventListener(
    "click",
    () => {
      readyCampaign(campaignButton2, "Mountains", goToMountainsButton, player);
      player.location = "Mountains";
      player.campaign();
      logUI.updateProgressBar(player);
      rotateWeapon(imgButton);
    },
    player
  );

  // Go to Desert
  campaignButton3.addEventListener(
    "click",
    () => {
      readyCampaign(campaignButton3, "Desert", goToDesertButton, player);
      player.location = "Desert";
      player.campaign();
      logUI.updateProgressBar(player);
      rotateWeapon(imgButton);
    },
    player
  );
  campaignButton4.addEventListener(
    "click",
    () => {
      readyCampaign(campaignButton4, "Oasis", goToOasisButton, player);
      player.location = "Oasis";
      player.campaign();
      logUI.updateProgressBar(player);
      rotateWeapon(imgButton);
    },
    player
  );
}

function rotateWeapon(img) {
  img.style.transform = "rotate(70deg)";
  setTimeout(() => {
    img.style.transform = "rotate(0deg)";
  }, 125);
}
