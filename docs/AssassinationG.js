function generateEncounter() {
    clearEncounter();
        if (checkInvestigation()) {
            if (checkStealth()) {
                checkAttack();
        }
    }    
}

    
function checkInvestigation() {
    var inv = document.getElementById("invInput").value;
    var dif = difficulty();
    if (Number(inv) >= Number(dif)) {
        AddToEncounter('Cultist hideout found');
        return true
    } else {
        AddToEncounter('No cultist found in the area');
        return false
    }
}

function checkStealth() {
    var stealth = document.getElementById("stealthInput").value;
    var dif = difficulty();
    if (Number(stealth) >= Number(dif)) {
        AddToEncounter('Awww they do not realise you are here. They are the cultest');
        return true
    } else {
        AddToEncounter('Your blades reflect the lights of the torches. Cultists manage to escape.');
        return false
    }
}

function checkAttack() {
    var atck = document.getElementById("atckInput").value;
    var dif = difficulty();
    if (Number(atck) >= Number(dif)) {
        AddToEncounter('Slice and dice, they should know better than join a cult. Practice safe sect kids.');
        return true
    } else {
        AddToEncounter('You wound the cultists but they manage an escape through a secret passage.');
        return false
    }
}

function difficulty() {
   return document.getElementById("difInput").value;
}

function clearEncounter() {
    var encounterWrapper = document.getElementById("encounterWrapper");
    encounterWrapper.innerHTML = '';
}

function AddToEncounter(text) {
    var encounterWrapper = document.getElementById("encounterWrapper");
    var para = document.createElement("P");
    para.innerHTML = text
    encounterWrapper.appendChild(para);
}