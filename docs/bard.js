function GenerateLine () {
    var bardOutcome = GetRandomResult()
    AddToLine(bardOutcome)
}

function AddToLine (text) {
    document.getElementById("BardWrapper").innerHTML = text;
}


function GetRandomResult(random) {
    return bardTable[Math.floor(Math.random() * bardTable.length)]
    }

var bardTable = [ 
    "tasha's laughter is hideous and so is your face!", "yo mama so big she doesn't fit in Leomund's tiny hut!", "Yo mama so big you can only cast fly on her by casting reverse gravity!", 
    "Why the sailor gets numerous accident ? Because he never sea", "Why the paladin doesn't think left ? He always think he is right!", "How do rogues make a sword ? They steel it",
    "Why nobody bothers the cleric ? No one wants to mass with him", "How does the necromancer makes money ? With crypt-ocurrency", "Why air elemental love rock music ? Because they rock you like a hurricane!",
    "Why barbarians don't like warforged ? Because they Rage Against the Machine", "The necromancer tried to get a job as undertaker but couldn't dig it", "Why did halfling never finish their jokes ? They always come short"
]