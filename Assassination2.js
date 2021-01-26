
function generateEncounter() {
    clearEncounter();
    checkStealth();
}
    
function checkStealth() {
    var stealth = document.getElementById("stealthInput").value;
    var dif = difficulty();
    if (Number(stealth) >= Number(dif)) {
        AddToEncounter('Awww they do not realise you are here. They are the cultest');
    } else {
        AddToEncounter('Your blades reflect the lights of the torches. Cultists manage to escape.');
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

