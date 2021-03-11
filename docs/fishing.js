function GenerateCatch() {
    GoFish();
}

function GoFish() {
    // Get your input value;
    var rslt = document.getElementById("resultInput").value;
    
    // Call the GetRandomResultByLevel function and give it the rslt variable
    var fishingOutcome = GetRandomResultByLevel(rslt);
    
    // Call the AddToCatch function and give it the fishingOutcome variable
    AddToCatch(fishingOutcome);
}

function AddToCatch(text) {
    // Add the random outcome to the result on the webpage
    document.getElementById("catcWrapper").innerHTML = text;
}

function GetRandomResultByLevel(level) {
    // positionInTable is the row in fishTable variable below. This var is an array. we take away 1 because in programming arrays start at 0 not 1 so everything is 1 less.
    var positionInTable = level - 1;
    
    // We get the length of the array at this position, the length is how many items are in it.
    var rowSize = fishTable[positionInTable].length;
    
    // We pick a ranodom number between 0 and the length of the array
    var random = Math.floor(Math.random() * rowSize);
    
    // We return the value at the correct level and the random position
    return fishTable[positionInTable][random]
}


// This bit is confusing the next part is an array of arrays (a list of lists) also known as a Jagged Array if you want to google it.

var fishTable = [
//Things that happen with a roll of 1
["You caught a shoe... Just go home.", "you caught an undead fish... Call a cleric", "you break your line, time to go home"],

//Things that happen with a roll of 2 
["Congratulations you caught a normal trout", "you caught a stingray", "you caught a Grey Mullet"],

//Things that happen with a roll of 3
["Oh wow... You caught a merrowfolk bra... Something fishy is going on!", "Too bad you caught nothing, i guess you couldn't sea ? Get it ?", "you caught a seabass!"],

//Things that happen with a roll of 4
["Wait... You caught a sahuagin! Roll for initiative", "A giant octopus get caugth on your line!", "you caught a Red drum!"],

//Things that happen with a roll of 5 
["Oh this one pretended to be something else... I guess you caught a catfish!", "En Garde! This is a swordfish challenge to a duel for their honor!", "You caught a blue fish!"],

//Things that happen with a roll of 6
["What the... huh.. A Two headed trout! You can eat it.. i think", "This octopus looks like an illithid... just put it back"],

//Things that happen with a roll of 7
["Congratulations you caught a small bass", "Oh the line snaped! Roll again"],

//Things that happen with a roll of 8
["Make a STR check 10 and catch a large bass", "You caught... a boot! Looks nice but useless without the other one... Might as well try to fish it now!"],

//Things that happen with a roll of 9
["Make a STR check 15 and catch a big Salmon", "You catch nothing but see floating on the surface a bottle, it seems a piece of paper is in there!"],

//Things that happen with a roll of 0
["A sea monster take the bait", "Oh wait! That's a fish.. You caught a small chest, nice!", ] 
];
