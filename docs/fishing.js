function GenerateCatch() {
    GoFish();
}

function GoFish() {
    var rslt = document.getElementById("resultInput").value;
    var fishingOutcome = GetRandomResultByLevel(rslt);
    AddToCatch(fishingOutcome);
}

function AddToCatch(text) {
    document.getElementById("catcWrapper").innerHTML = text;
}

function GetRandomResultByLevel(level) {
    var positionInTable = level - 1;
    var rowSize = fishTable[positionInTable].length;
    var random = Math.floor(Math.random() * rowSize);
    return fishTable[positionInTable][random]
}

var fishTable = [
["You caught a shoe... Just go home.", "you caught an undead fish... Call a cleric", "you break your rode trying to pull a big one"],
["Congratulations you caught a normal trout", "you caught a barracuda", "you caught a Trumpetfish"],
["Oh wow... You caught a merrowfolk bra... Something fishy is going on!", "you caught a Sturgeon", "you caught.. not sure if it's an octopus or the head of an illithid"],
["Wait... You caught a sahuagin! Roll for initiative", "you caught a blue tang.. looks like she forgot something", "you caught a glass bottle and look! There is some paper inside!"],
["Oh this one pretended to be something else... I guess you caught a catfish", "Oh this one might tastes funny.. It's a clownfish", "you caught a level5fish3"],
["What the... huh.. A Two headed trout! You can eat it.. i think", "you caught a Giant Eel roll initiative!", "you caught a "],
["Congratulations you caught a small bass", "Quick this seahorse tries to scallop away!", "Oh a redlion fish! Looks like it's the mane fish here!"],
["Make a STR check 10 and catch a large bass", "you caught a bass! Oops a shark jumped and ate it. Go fish!", "Your line doesn't touch the water, try again!"],
["Make a STR check 15 and catch a big Salmon", "you caught a baby shark, so cute!", "you caught a sturgeon!"],
["A sea monster take the bait and swim away...", "A giant sea serpent takes the bait... Looks like you're next on the menu! Roll for initiative!"] 
];
