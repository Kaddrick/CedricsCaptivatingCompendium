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
["You caught a shoe... Just go home.", "you caught an undead fish... Call a cleric", "you break your"],

//Things that happen with a roll of 2 
["Congratulations you caught a normal trout", "you caught a level2fish2", "you caught a level2fish3"],

//Things that happen with a roll of 3
["Oh wow... You caught a merrowfolk bra... Something fishy is going on!", "you caught a level3fish2", "you caught a level3fish3"],

//Things that happen with a roll of 4
["Wait... You caught a sahuagin! Roll for initiative", "you caught a level4fish2", "you caught a level4fish3"],

//Things that happen with a roll of 5 
["Oh this one pretended to be something else... I guess you caught a catfish", "you caught a level5fish2", "you caught a level5fish3"],

//Things that happen with a roll of 6
["What the... huh.. A Two headed trout! You can eat it.. i think", "you caught a level6fish2", "you caught a level6fish3"],

//Things that happen with a roll of 7
["Congratulations you caught a small bass", "you caught a level7fish2", "you caught a level7fish3"],

//Things that happen with a roll of 8
["Make a STR check 10 and catch a large bass", "you caught a level8fish2", "you caught a level8fish3"],

//Things that happen with a roll of 9
["Make a STR check 15 and catch a big Salmon", "you caught a level9fish2", "you caught a level9fish3"],

//Things that happen with a roll of 0
["A sea monster take the bait", "you caught a level10fish2", "you caught a level10fish3"] 
];
