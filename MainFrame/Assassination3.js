
function generateEncounter() {
    clearEncounter();
    checkAttack();
}
    
function checkAttack() {
    var atck = document.getElementById("atckInput").value;
    var dif = difficulty();
    if (Number(atck) >= Number(dif)) {
        AddToEncounter('Slice and dice, they should know better than join a cult. Practice safe sect kids.');
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

