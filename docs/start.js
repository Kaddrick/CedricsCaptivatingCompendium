//Const
const cantripInput = document.querySelector('.cantripInput');
const cantripBtn = document.querySelector('.cantrip-button');
const cantripList = document.querySelector('.cantripList');

const firstLevelInput = document.querySelector('.firstLevelInput');
const FirstLevelBtn = document.querySelector('.FirstLevel-button');
const FirstLevelList = document.querySelector('.FirstLevelList');

const secondLevelInput = document.querySelector('.secondLevelInput');
const secondLevelBtn = document.querySelector('.secondLevel-button');
const secondLevelList = document.querySelector('.secondLevelList');

const thirdLevelInput = document.querySelector('.thirdLevelInput');
const thirdLevelBtn = document.querySelector('.thirdLevel-button');
const thirdLevelList = document.querySelector('.thirdLevelList');

const fourthLevelInput = document.querySelector('.fourthLevelInput');
const fourthLevelBtn = document.querySelector('.fourthLevel-button');
const fourthLevelList = document.querySelector('.fourthLevelList');

const fifthLevelInput = document.querySelector('.fifthLevelInput');
const fifthLevelBtn = document.querySelector('.fifthLevel-button');
const fifthLevelList = document.querySelector('.fifthLevelList');

const sixthLevelInput = document.querySelector('.sixthLevelInput');
const sixthLevelBtn = document.querySelector('.sixthLevel-button');
const sixthLevelList = document.querySelector('.sixthLevelList');

const seventhLevelInput = document.querySelector('.seventhLevelInput');
const seventhLevelBtn = document.querySelector('.seventhLevel-button');
const seventhLevelList = document.querySelector('.seventhLevelList');

const eighthLevelInput = document.querySelector('.eighthLevelInput');
const eighthLevelBtn = document.querySelector('.eighthLevel-button');
const eighthLevelList = document.querySelector('.eighthLevelList');

const ninethLevelInput = document.querySelector('.ninethLevelInput');
const ninethLevelBtn = document.querySelector('.ninethLevel-button');
const ninethLevelList = document.querySelector('.ninethLevelList');

const cancelbtn = document.querySelector('.cancelbtn');
const submitbtn = document.querySelector('.submitbtn');

const Casttbn1 = document.querySelector('.Casttbn1');
const Casttbn2 = document.querySelector('.Casttbn2');
const Casttbn3 = document.querySelector('.Casttbn3');
const Casttbn4 = document.querySelector('.Casttbn4');
const Casttbn5 = document.querySelector('.Casttbn5');
const Casttbn6 = document.querySelector('.Casttbn6');
const Casttbn7 = document.querySelector('.Casttbn7');
const Casttbn8 = document.querySelector('.Casttbn8');
const Casttbn9 = document.querySelector('.Casttbn9');


const CLevel = document.querySelector('.CLevel');
const CAMod = document.querySelector('.CAMod');



// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




//EventListeners
cantripBtn.addEventListener("click", addCantrip);
FirstLevelBtn.addEventListener("click", addFirstLevel);
secondLevelBtn.addEventListener("click", addSecondLevel);
thirdLevelBtn.addEventListener("click", addThirdLevel);
fourthLevelBtn.addEventListener("click", addFourthLevel);
fifthLevelBtn.addEventListener("click", addFifthLevel);
sixthLevelBtn.addEventListener("click", addSixthLevel);
seventhLevelBtn.addEventListener("click", addSeventhLevel);
eighthLevelBtn.addEventListener("click", addEighthLevel);
ninethLevelBtn.addEventListener("click", addNinethLevel);
cancelbtn.addEventListener("click", clseM);
submitbtn.addEventListener("click", SpellAttack);
submitbtn.addEventListener("click", SpellDC);
submitbtn.addEventListener("click", clseM);
Casttbn1.addEventListener("click", CastSpell1);
Casttbn2.addEventListener("click", CastSpell2);
Casttbn3.addEventListener("click", CastSpell3);
Casttbn4.addEventListener("click", CastSpell4);
Casttbn5.addEventListener("click", CastSpell5);
Casttbn6.addEventListener("click", CastSpell6);
Casttbn7.addEventListener("click", CastSpell7);
Casttbn8.addEventListener("click", CastSpell8);
Casttbn9.addEventListener("click", CastSpell9);


//Functions

function clseM() {
    document.getElementById('id01').style.display='none'
}

function SpellAttack() {   
    var profBns = CLevel.value
    if (CLevel.value <= 4){
        profBns = 2;
    }
    else if (CLevel.value <= 8){
        profBns = 3;
    }
    else if (CLevel.value <= 12){
        profBns = 4;
    }
    else if (CLevel.value <= 16){
        profBns = 5;
    }
    else if (CLevel.value <= 20){
        profBns = 6;
    }
    
    var x = CAMod.value
    var spellAtck = +x + +profBns;
    document.getElementById("spellattack").innerHTML = spellAtck;
}

function SpellDC() {
    var profBns = CLevel.value
    if (CLevel.value <= 4){
        profBns = 2;
    }
    else if (CLevel.value <= 8){
        profBns = 3;
    }
    else if (CLevel.value <= 12){
        profBns = 4;
    }
    else if (CLevel.value <= 16){
        profBns = 5;
    }
    else if (CLevel.value <= 20){
        profBns = 6;
    }

    var x = CAMod.value;
    var DC = 8 + +x + +profBns;
    document.getElementById("DC").innerHTML = DC;
}

function DeleteSpell(spellID) {
    var element = document.getElementById(spellID)
    element.remove();
}

function addCantrip() {
    const newCantrip = document.createElement('li');
    newCantrip.innerText = cantripInput.value;
    newCantrip.classList.add('cantrip');
    newCantrip.id = cantripInput.value;
    cantripList.appendChild(newCantrip);
    
    const deltButton = document.createElement('button');
    deltButton.innerText = "Del";
    deltButton.classList.add("DltSpell");
    deltButton.dataset.spellId = cantripInput.value;
    deltButton.addEventListener("click", function() {DeleteSpell(this.dataset.spellId)});
    newCantrip.appendChild(deltButton);

    cantripInput.value = ""
}

function addFirstLevel() {
    const newFirstLevel = document.createElement('li');
    newFirstLevel.innerText = firstLevelInput.value;
    newFirstLevel.classList.add('FirstLevel');
    // I am giving the spell a unique ID
    newFirstLevel.id = firstLevelInput.value;
    FirstLevelList.appendChild(newFirstLevel);
    //Prepared spell
    const prepared = document.createElement('input');
    prepared.setAttribute('type', 'checkbox')
    prepared.classList.add("checkSpell")
    newFirstLevel.appendChild(prepared);
    //Delete button
    const deltButton = document.createElement('button');
    deltButton.innerText = "Del";
    deltButton.classList.add("DltSpell");
    // I am adding the spell id to the dataset of the button
    deltButton.dataset.spellId = firstLevelInput.value;
    // When the button is called, I am passing the spell id stored in the dataset to the function
    deltButton.addEventListener("click", function() {DeleteSpell(this.dataset.spellId)});
    newFirstLevel.appendChild(deltButton);

    firstLevelInput.value = ""
    
}

function addSecondLevel() {
    const newSecondLevel = document.createElement('li');
    newSecondLevel.innerText = secondLevelInput.value;
    newSecondLevel.classList.add('SecondLevel');
    // I am giving the spell a unique ID
    newSecondLevel.id = secondLevelInput.value;
    secondLevelList.appendChild(newSecondLevel);
    //Prepared spell
    const prepared = document.createElement('input');
    prepared.setAttribute('type', 'checkbox')
    prepared.classList.add("checkSpell")
    newSecondLevel.appendChild(prepared);
    //Delete button
    const deltButton = document.createElement('button');
    deltButton.innerText = "Del";
    deltButton.classList.add("DltSpell");
    // I am adding the spell id to the dataset of the button
    deltButton.dataset.spellId = secondLevelInput.value;
    // When the button is called, I am passing the spell id stored in the dataset to the function
    deltButton.addEventListener("click", function() {DeleteSpell(this.dataset.spellId)});
    newSecondLevel.appendChild(deltButton);

    secondLevelInput.value = ""
}

function addThirdLevel() {
    const newThirdLevel = document.createElement('li');
    newThirdLevel.innerText = thirdLevelInput.value;
    newThirdLevel.classList.add('ThirdLevel');
    // I am giving the spell a unique ID
    newThirdLevel.id = thirdLevelInput.value;
    thirdLevelList.appendChild(newThirdLevel);
    //Prepared spell
    const prepared = document.createElement('input');
    prepared.setAttribute('type', 'checkbox')
    prepared.classList.add("checkSpell")
    newThirdLevel.appendChild(prepared);
    //Delete button
    const deltButton = document.createElement('button');
    deltButton.innerText = "Del";
    deltButton.classList.add("DltSpell");
    // I am adding the spell id to the dataset of the button
    deltButton.dataset.spellId = thirdLevelInput.value;
    // When the button is called, I am passing the spell id stored in the dataset to the function
    deltButton.addEventListener("click", function() {DeleteSpell(this.dataset.spellId)});
    newThirdLevel.appendChild(deltButton);

    thirdLevelInput.value = ""
}

function addFourthLevel() {
    const newFourthLevel = document.createElement('li');
    newFourthLevel.innerText = fourthLevelInput.value;
    newFourthLevel.classList.add('FourthLevel');
    // I am giving the spell a unique ID
    newFourthLevel.id = fourthLevelInput.value;
    fourthLevelList.appendChild(newFourthLevel);
    //Prepared spell
    const prepared = document.createElement('input');
    prepared.setAttribute('type', 'checkbox')
    prepared.classList.add("checkSpell")
    newFourthLevel.appendChild(prepared);
    //Delete button
    const deltButton = document.createElement('button');
    deltButton.innerText = "Del";
    deltButton.classList.add("DltSpell");
    // I am adding the spell id to the dataset of the button
    deltButton.dataset.spellId = fourthLevelInput.value;
    // When the button is called, I am passing the spell id stored in the dataset to the function
    deltButton.addEventListener("click", function() {DeleteSpell(this.dataset.spellId)});
    newFourthLevel.appendChild(deltButton);

    fourthLevelInput.value = ""
}

function addFifthLevel() {
    const newFifthLevel = document.createElement('li');
    newFifthLevel.innerText = fifthLevelInput.value;
    newFifthLevel.classList.add('FourthLevel');
    // I am giving the spell a unique ID
    newFifthLevel.id = fifthLevelInput.value;
    fifthLevelList.appendChild(newFifthLevel);
    //Prepared spell
    const prepared = document.createElement('input');
    prepared.setAttribute('type', 'checkbox')
    prepared.classList.add("checkSpell")
    newFifthLevel.appendChild(prepared);
    //Delete button
    const deltButton = document.createElement('button');
    deltButton.innerText = "Del";
    deltButton.classList.add("DltSpell");
    // I am adding the spell id to the dataset of the button
    deltButton.dataset.spellId = fifthLevelInput.value;
    // When the button is called, I am passing the spell id stored in the dataset to the function
    deltButton.addEventListener("click", function() {DeleteSpell(this.dataset.spellId)});
    newFifthLevel.appendChild(deltButton);

    fifthLevelInput.value = ""
}

function addSixthLevel() {
    const newSixthLevel = document.createElement('li');
    newSixthLevel.innerText = sixthLevelInput.value;
    newSixthLevel.classList.add('SixtthLevel');
    // I am giving the spell a unique ID
    newSixthLevel.id = sixthLevelInput.value;
    sixthLevelList.appendChild(newSixthLevel);
    //Prepared spell
    const prepared = document.createElement('input');
    prepared.setAttribute('type', 'checkbox')
    prepared.classList.add("checkSpell")
    newSixthLevel.appendChild(prepared);
    //Delete button
    const deltButton = document.createElement('button');
    deltButton.innerText = "Del";
    deltButton.classList.add("DltSpell");
    // I am adding the spell id to the dataset of the button
    deltButton.dataset.spellId = sixthLevelInput.value;
    // When the button is called, I am passing the spell id stored in the dataset to the function
    deltButton.addEventListener("click", function() {DeleteSpell(this.dataset.spellId)});
    newSixthLevel.appendChild(deltButton);

    sixthLevelInput.value = ""
}

function addSeventhLevel() {
    const newSeventhLevel = document.createElement('li');
    newSeventhLevel.innerText = seventhLevelInput.value;
    newSeventhLevel.classList.add('SixtthLevel');
    // I am giving the spell a unique ID
    newSeventhLevel.id = seventhLevelInput.value;
    seventhLevelList.appendChild(newSeventhLevel);
    //Prepared spell
    const prepared = document.createElement('input');
    prepared.setAttribute('type', 'checkbox')
    prepared.classList.add("checkSpell")
    newSeventhLevel.appendChild(prepared);
    //Delete button
    const deltButton = document.createElement('button');
    deltButton.innerText = "Del";
    deltButton.classList.add("DltSpell");
    // I am adding the spell id to the dataset of the button
    deltButton.dataset.spellId = seventhLevelInput.value;
    // When the button is called, I am passing the spell id stored in the dataset to the function
    deltButton.addEventListener("click", function() {DeleteSpell(this.dataset.spellId)});
    newSeventhLevel.appendChild(deltButton);

    seventhLevelInput.value = ""
}

function addEighthLevel() {
    const newEighthLevel = document.createElement('li');
    newEighthLevel.innerText = eighthLevelInput.value;
    newEighthLevel.classList.add('SixtthLevel');
    // I am giving the spell a unique ID
    newEighthLevel.id = eighthLevelInput.value;
    eighthLevelList.appendChild(newEighthLevel);
    //Prepared spell
    const prepared = document.createElement('input');
    prepared.setAttribute('type', 'checkbox')
    prepared.classList.add("checkSpell")
    newEighthLevel.appendChild(prepared);
    //Delete button
    const deltButton = document.createElement('button');
    deltButton.innerText = "Del";
    deltButton.classList.add("DltSpell");
    // I am adding the spell id to the dataset of the button
    deltButton.dataset.spellId = eighthLevelInput.value;
    // When the button is called, I am passing the spell id stored in the dataset to the function
    deltButton.addEventListener("click", function() {DeleteSpell(this.dataset.spellId)});
    newEighthLevel.appendChild(deltButton);

    eighthLevelInput.value = ""
}

function addNinethLevel() {
    const newninethLevel = document.createElement('li');
    newninethLevel.innerText = ninethLevelInput.value;
    newninethLevel.classList.add('SixtthLevel');
    // I am giving the spell a unique ID
    newninethLevel.id = ninethLevelInput.value;
    ninethLevelList.appendChild(newninethLevel);
    //Prepared spell
    const prepared = document.createElement('input');
    prepared.setAttribute('type', 'checkbox')
    prepared.classList.add("checkSpell")
    newninethLevel.appendChild(prepared);
    //Delete button
    const deltButton = document.createElement('button');
    deltButton.innerText = "Del";
    deltButton.classList.add("DltSpell");
    // I am adding the spell id to the dataset of the button
    deltButton.dataset.spellId = ninethLevelInput.value;
    // When the button is called, I am passing the spell id stored in the dataset to the function
    deltButton.addEventListener("click", function() {DeleteSpell(this.dataset.spellId)});
    newninethLevel.appendChild(deltButton);

    ninethLevelInput.value = ""
}

function CastSpell1() {
    var slot = document.querySelector('.Slot1');
    slot.value = Number(slot.value) - 1;
    
}

function CastSpell2() {
    var slot = document.querySelector('.Slot2');
    slot.value = Number(slot.value) - 1;
    
}

function CastSpell3() {
    var slot = document.querySelector('.Slot3');
    slot.value = Number(slot.value) - 1;
    
}

function CastSpell4() {
    var slot = document.querySelector('.Slot4');
    slot.value = Number(slot.value) - 1;
    
}

function CastSpell5() {
    var slot = document.querySelector('.Slot5');
    slot.value = Number(slot.value) - 1;
    
}

function CastSpell6() {
    var slot = document.querySelector('.Slot6');
    slot.value = Number(slot.value) - 1;
    
}

function CastSpell7() {
    var slot = document.querySelector('.Slot7');
    slot.value = Number(slot.value) - 1;
    
}

function CastSpell8() {
    var slot = document.querySelector('.Slot8');
    slot.value = Number(slot.value) - 1;
    
}

function CastSpell9() {
    var slot = document.querySelector('.Slot9');
    slot.value = Number(slot.value) - 1;
    
}