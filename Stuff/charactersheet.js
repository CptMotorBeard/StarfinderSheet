$(document).on('change', 'input[type=checkbox]', function(e) {autofill(e);});

window.addEventListener('input', function(e) {autofill(e);}, false);

function autofill(e) {
  switch(e.target.className) {
    // Automatic inputs
    // Energy Armor Class
    case "EACarmor" :
      if (isNaN($('.EACarmor').val())){$('.EACarmor').val(0);}
    case "EACmisc" :
      if (isNaN($('.EACmisc').val())){$('.EACmisc').val(0);}
      updateEAC();
      break;
    // Kinetic Armor Class and AC vs. combat maneuvers
    case "KACarmor":
      if (isNaN($('.KACarmor').val())){$('.KACarmor').val(0);}
    case "KACmisc":
      if (isNaN($('.KACmisc').val())){$('.KACmisc').val(0);}
      updateKAC();
      updateCMD();
      break;
    // Saving throws
    // Fortitude
    case "fortbase":
      if (isNaN($('.fortbase').val())){$('.fortbase').val(0);}
    case "fortmisc" :
      if (isNaN($('.fortmisc').val())){$('.fortmisc').val(0);}
      updateFort();
      break;
    // Reflex
    case "refbase" :
      if (isNaN($('.refbase').val())){$('.refbase').val(0);}
    case "refmisc" :
      if (isNaN($('.refmisc').val())){$('.refmisc').val(0);}
      updateRef();
      break;
    // Will
    case "willbase" :
      if (isNaN($('.willbase').val())){$('.willbase').val(0);}
    case "willmisc" :
      if (isNaN($('.willmisc').val())){$('.willmisc').val(0);}
      updateWill();
      break;
    // Attack Bonuses
    // Melee
    case "BABmelee" :
      if (isNaN($('.BABmelee').val())){$('.BABmelee').val(0);}
      updateBAB($('.BABmelee').val());
    case "meleemisc" :
      if (isNaN($('.meleemisc').val())){$('.meleemisc').val(0);}
      updateMelee();
      break;
    // Ranged
    case "BABrange" :
      if (isNaN($('.BABrange').val())){$('.BABrange').val(0);}
      updateBAB($('.BABrange').val());
    case "rangemisc" :
      if (isNaN($('.rangemisc').val())){$('.rangemisc').val(0);}
      updateRange();
      break;
    // Thrown
    case "BABthrown" :
      if (isNaN($('.BABthrown').val())){$('.BABthrown').val(0);}
      updateBAB($('.BABthrown').val());
    case "thrownmisc" :
      if (isNaN($('.thrownmisc').val())){$('.thrownmisc').val(0);}
      updateThrown();
      break;
    // Initiative
    case "initmiscmod" :
      if (isNaN($('.initmiscmod').val())){$('.initmiscmod').val(0);}
      updateInitiative();
      break;
    // Ability Scores
    // Strength
    case "str" :
      if (isNaN($('.str').val())){$('.str').val(0);}
      updateStrMod();
      updateAthletics();
      updateMelee();
      updateThrown();
      break;
    case "strmod" :
      if (isNaN($('.strmod').val())){$('.strmod').val(0);}
      updateUStrMod();
      break;
    // Dexterity
    case "dex" :
      if (isNaN($('.dex').val())){$('.dex').val(0);}
      updateDexMod();
      updateInitiative();
      updateEAC();
      updateKAC();
      updateCMD();
      updateRef();
      updateRange();
      updateAcrobatics();
      updatePiloting();
      updateSleightOfHand();
      updateStealth();
      break;
    case "dexmod" :
      if (isNaN($('.dexmod').val())){$('.dexmod').val(0);}
      updateUDexMod();
      break;
    // Constitution
    case "con" :
      if (isNaN($('.con').val())){$('.con').val(0);}
      updateConMod();
      updateFort();
      break;
    case "conmod" :
      if (isNaN($('.conmod').val())){$('.conmod').val(0);}
      updateUConMod();
      break;
    // Intelligence
    case "int" :
      if (isNaN($('.int').val())){$('.int').val(0);}
      updateIntMod();
      updateComputers();
      updateCulture();
      updateEngineering();
      updateLifeScience();
      updateMedicine();
      updatePhysicalScience();
      break;
    case "intmod" :
      if (isNaN($('.intmod').val())){$('.intmod').val(0);}
      updateUIntMod();
      break;
    // Wisdom
    case "wis" :
      if (isNaN($('.wis').val())){$('.wis').val(0);}
      updateWisMod();
      updateWill();
      updateMysticism();
      updatePerception();
      updateSenseMotive();
      updateSurvival();
      break;
    case "wismod" :
      if (isNaN($('.wismod').val())){$('.wismod').val(0);}
      updateUWisMod();
      break;
    // Charisma
    case "cha" :
      if (isNaN($('.cha').val())){$('.cha').val(0);}
      updateChaMod();
      updateBluff();
      updateDiplomacy();
      updateDisguise();
      updateIntimidate();
      break;
    case "chamod" :
      if (isNaN($('.chamod').val())){$('.chamod').val(0);}
      updateUChaMod();
      break;
    // Skills
    // Acrobatics
    case "acrobaticsCS" :
      if (isNaN($('.acrobaticsCS').val())){$('.acrobaticsCS').val(0);}
    case "acrobaticsranks" :
      if (isNaN($('.acrobaticsranks').val())){$('.acrobaticsranks').val(0);}
    case "acrobaticsclassbonus" :
      if (isNaN($('.acrobaticsclassbonus').val())){$('.acrobaticsclassbonus').val(0);}
    case "acrobaticsmiscmod" :
      if (isNaN($('.acrobaticsmiscmod').val())){$('.acrobaticsmiscmod').val(0);}
      updateAcrobatics();
      break;
    // Athletics
    case "athleticsCS" :
      if (isNaN($('.athleticsCS').val())){$('.athleticsCS').val(0);}
    case "athleticsranks" :
      if (isNaN($('.athleticsranks').val())){$('.athleticsranks').val(0);}
    case "athleticsclassbonus" :
      if (isNaN($('.athleticsclassbonus').val())){$('.athleticsclassbonus').val(0);}
    case "athleticsmiscmod" :
      if (isNaN($('.athleticsmiscmod').val())){$('.athleticsmiscmod').val(0);}
      updateAthletics();
      break;
    // Bluff
    case "bluffCS" :
      if (isNaN($('.bluffCS').val())){$('.bluffCS').val(0);}
    case "bluffranks" :
      if (isNaN($('.bluffranks').val())){$('.bluffranks').val(0);}
    case "bluffclassbonus" :
      if (isNaN($('.bluffclassbonus').val())){$('.bluffclassbonus').val(0);}
    case "bluffmiscmod" :
      if (isNaN($('.bluffmiscmod').val())){$('.bluffmiscmod').val(0);}
      updateBluff();
      break;
    // Computers
    case "computersCS" :
      if (isNaN($('.computersCS').val())){$('.computersCS').val(0);}
    case "computersranks" :
      if (isNaN($('.computersranks').val())){$('.computersranks').val(0);}
    case "computersclassbonus" :
      if (isNaN($('.computersclassbonus').val())){$('.computersclassbonus').val(0);}
    case "computersmiscmod" :
      if (isNaN($('.computersmiscmod').val())){$('.computersmiscmod').val(0);}
      updateComputers();
			break;
    // Culture
    case "cultureCS" :
      if (isNaN($('.cultureCS').val())){$('.cultureCS').val(0);}
    case "cultureranks" :
      if (isNaN($('.cultureranks').val())){$('.cultureranks').val(0);}
    case "cultureclassbonus" :
      if (isNaN($('.cultureclassbonus').val())){$('.cultureclassbonus').val(0);}
    case "culturemiscmod" :
      if (isNaN($('.culturemiscmod').val())){$('.culturemiscmod').val(0);}
      updateCulture();
			break;
    // Diplomacy
    case "diplomacyCS" :
      if (isNaN($('.diplomacyCS').val())){$('.diplomacyCS').val(0);}
    case "diplomacyranks" :
      if (isNaN($('.diplomacyranks').val())){$('.diplomacyranks').val(0);}
    case "diplomacyclassbonus" :
      if (isNaN($('.diplomacyclassbonus').val())){$('.diplomacyclassbonus').val(0);}
    case "diplomacymiscmod" :
      if (isNaN($('.diplomacymiscmod').val())){$('.diplomacymiscmod').val(0);}
      updateDiplomacy();
			break;
    // Disguise
    case "disguiseCS" :
      if (isNaN($('.disguiseCS').val())){$('.disguiseCS').val(0);}
    case "disguiseranks" :
      if (isNaN($('.disguiseranks').val())){$('.disguiseranks').val(0);}
    case "disguiseclassbonus" :
      if (isNaN($('.disguiseclassbonus').val())){$('.disguiseclassbonus').val(0);}
    case "disguisemiscmod" :
      if (isNaN($('.disguisemiscmod').val())){$('.disguisemiscmod').val(0);}
      updateDisguise();
			break;
    // Engineering
    case "engineeringCS" :
      if (isNaN($('.engineeringCS').val())){$('.engineeringCS').val(0);}
    case "engineeringranks" :
      if (isNaN($('.engineeringranks').val())){$('.engineeringranks').val(0);}
    case "engineeringclassbonus" :
      if (isNaN($('.engineeringclassbonus').val())){$('.engineeringclassbonus').val(0);}
    case "engineeringmiscmod" :
      if (isNaN($('.engineeringmiscmod').val())){$('.engineeringmiscmod').val(0);}
      updateEngineering();
			break;
    // Intimidate
    case "intimidateCS" :
      if (isNaN($('.intimidateCS').val())){$('.intimidateCS').val(0);}
    case "intimidateranks" :
      if (isNaN($('.intimidateranks').val())){$('.intimidateranks').val(0);}
    case "intimidateclassbonus" :
      if (isNaN($('.intimidateclassbonus').val())){$('.intimidateclassbonus').val(0);}
    case "intimidatemiscmod" :
      if (isNaN($('.intimidatemiscmod').val())){$('.intimidatemiscmod').val(0);}
      updateIntimidate();
			break;
    // Life Science
    case "lifescienceCS" :
      if (isNaN($('.lifescienceCS').val())){$('.lifescienceCS').val(0);}
    case "lifescienceranks" :
      if (isNaN($('.lifescienceranks').val())){$('.lifescienceranks').val(0);}
    case "lifescienceclassbonus" :
      if (isNaN($('.lifescienceclassbonus').val())){$('.lifescienceclassbonus').val(0);}
    case "lifesciencemiscmod" :
      if (isNaN($('.lifesciencemiscmod').val())){$('.lifesciencemiscmod').val(0);}
      updateLifeScience();
			break;
    // Medicine
    case "medicineCS" :
      if (isNaN($('.medicineCS').val())){$('.medicineCS').val(0);}
    case "medicineranks" :
      if (isNaN($('.medicineranks').val())){$('.medicineranks').val(0);}
    case "medicineclassbonus" :
      if (isNaN($('.medicineclassbonus').val())){$('.medicineclassbonus').val(0);}
    case "medicinemiscmod" :
      if (isNaN($('.medicinemiscmod').val())){$('.medicinemiscmod').val(0);}
      updateMedicine();
			break;
    // Mysticism
    case "mysticismCS" :
      if (isNaN($('.mysticismCS').val())){$('.mysticismCS').val(0);}
    case "mysticismranks" :
      if (isNaN($('.mysticismranks').val())){$('.mysticismranks').val(0);}
    case "mysticismclassbonus" :
      if (isNaN($('.mysticismclassbonus').val())){$('.mysticismclassbonus').val(0);}
    case "mysticismmiscmod" :
      if (isNaN($('.mysticismmiscmod').val())){$('.mysticismmiscmod').val(0);}
      updateMysticism();
			break;
    // Perception
    case "perceptionCS" :
      if (isNaN($('.perceptionCS').val())){$('.perceptionCS').val(0);}
    case "perceptionranks" :
      if (isNaN($('.perceptionranks').val())){$('.perceptionranks').val(0);}
    case "perceptionclassbonus" :
      if (isNaN($('.perceptionclassbonus').val())){$('.perceptionclassbonus').val(0);}
    case "perceptionmiscmod" :
      if (isNaN($('.perceptionmiscmod').val())){$('.perceptionmiscmod').val(0);}
      updatePerception();
			break;
    // Physical Science
    case "physicalscienceCS" :
      if (isNaN($('.physicalscienceCS').val())){$('.physicalscienceCS').val(0);}
    case "physicalscienceranks" :
      if (isNaN($('.physicalscienceranks').val())){$('.physicalscienceranks').val(0);}
    case "physicalscienceclassbonus" :
      if (isNaN($('.physicalscienceclassbonus').val())){$('.physicalscienceclassbonus').val(0);}
    case "physicalsciencemiscmod" :
      if (isNaN($('.physicalsciencemiscmod').val())){$('.physicalsciencemiscmod').val(0);}
      updatePhysicalScience();
			break;
    // Piloting
    case "pilotingCS" :
      if (isNaN($('.pilotingCS').val())){$('.pilotingCS').val(0);}
    case "pilotingranks" :
      if (isNaN($('.pilotingranks').val())){$('.pilotingranks').val(0);}
    case "pilotingclassbonus" :
      if (isNaN($('.pilotingclassbonus').val())){$('.pilotingclassbonus').val(0);}
    case "pilotingmiscmod" :
      if (isNaN($('.pilotingmiscmod').val())){$('.pilotingmiscmod').val(0);}
      updatePiloting();
			break;
    // Profession 0
    case "profession0CS" :
      if (isNaN($('.profession0CS').val())){$('.profession0CS').val(0);}
    case "profession0ranks" :
      if (isNaN($('.profession0ranks').val())){$('.profession0ranks').val(0);}
    case "profession0classbonus" :
      if (isNaN($('.profession0classbonus').val())){$('.profession0classbonus').val(0);}
    case "profession0miscmod" :
      if (isNaN($('.profession0miscmod').val())){$('.profession0miscmod').val(0);}
      updateProfession0();
			break;
    // Profession 1
    case "profession1CS" :
      if (isNaN($('.profession1CS').val())){$('.profession1CS').val(0);}
    case "profession1ranks" :
      if (isNaN($('.profession1ranks').val())){$('.profession1ranks').val(0);}
    case "profession1classbonus" :
      if (isNaN($('.profession1classbonus').val())){$('.profession1classbonus').val(0);}
    case "profession1miscmod" :
      if (isNaN($('.profession1miscmod').val())){$('.profession1miscmod').val(0);}
      updateProfession1();
			break;
    // Sense Motive
    case "sensemotiveCS" :
      if (isNaN($('.sensemotiveCS').val())){$('.sensemotiveCS').val(0);}
    case "sensemotiveranks" :
      if (isNaN($('.sensemotiveranks').val())){$('.sensemotiveranks').val(0);}
    case "sensemotiveclassbonus" :
      if (isNaN($('.sensemotiveclassbonus').val())){$('.sensemotiveclassbonus').val(0);}
    case "sensemotivemiscmod" :
      if (isNaN($('.sensemotivemiscmod').val())){$('.sensemotivemiscmod').val(0);}
      updateSenseMotive();
			break;
    // Sleight of Hand
    case "sleightofhandCS" :
      if (isNaN($('.sleightofhandCS').val())){$('.sleightofhandCS').val(0);}
    case "sleightofhandranks" :
      if (isNaN($('.sleightofhandranks').val())){$('.sleightofhandranks').val(0);}
    case "sleightofhandclassbonus" :
      if (isNaN($('.sleightofhandclassbonus').val())){$('.sleightofhandclassbonus').val(0);}
    case "sleightofhandmiscmod" :
      if (isNaN($('.sleightofhandmiscmod').val())){$('.sleightofhandmiscmod').val(0);}
      updateSleightOfHand();
			break;
    // Stealth
    case "stealthCS" :
      if (isNaN($('.stealthCS').val())){$('.stealthCS').val(0);}
    case "stealthranks" :
      if (isNaN($('.stealthranks').val())){$('.stealthranks').val(0);}
    case "stealthclassbonus" :
      if (isNaN($('.stealthclassbonus').val())){$('.stealthclassbonus').val(0);}
    case "stealthmiscmod" :
      if (isNaN($('.stealthmiscmod').val())){$('.stealthmiscmod').val(0);}
      updateStealth();
			break;
    // Survival
    case "survivalCS" :
      if (isNaN($('.survivalCS').val())){$('.survivalCS').val(0);}
    case "survivalranks" :
      if (isNaN($('.survivalranks').val())){$('.survivalranks').val(0);}
    case "survivalclassbonus" :
      if (isNaN($('.survivalclassbonus').val())){$('.survivalclassbonus').val(0);}
    case "survivalmiscmod" :
      if (isNaN($('.survivalmiscmod').val())){$('.survivalmiscmod').val(0);}
      updateSurvival();
			break;
  }
}

function updateBAB(value){
  $('.BABmelee').val(value);
  $('.BABrange').val(value);
  $('.BABthrown').val(value);
  updateMelee();
  updateRange();
  updateThrown();
}

function parseint(value) {
  if (value == '') {
    return 0;
  } else {
    return parseInt(value);
  }
}

function updateEAC() {$('.EACtotal').val(10 + parseint($('.dexm').val()) + parseint($('.EACarmor').val()) + parseint($('.EACmisc').val()));}
function updateKAC() {$('.KACtotal').val(10 + parseint($('.dexm').val()) + parseint($('.KACarmor').val()) + parseint($('.KACmisc').val()));}
function updateCMD() {$('.CMDtotal').val(8 + parseint($('.KACtotal').val()));}
function updateFort() {$('.forttotal').val(parseint($('.conm').val()) + parseint($('.fortbase').val()) + parseint($('.fortmisc').val()));}
function updateRef() {$('.reftotal').val(parseint($('.dexm').val()) + parseint($('.refbase').val()) + parseint($('.refmisc').val()));}
function updateWill() {$('.willtotal').val(parseint($('.wism').val()) + parseint($('.willbase').val()) + parseint($('.willmisc').val()));}
function updateMelee() {$('.meleetotal').val(parseint($('.strm').val()) + parseint($('.BABmelee').val()) + parseint($('.meleemisc').val()));}
function updateRange() {$('.rangetotal').val(parseint($('.dexm').val()) + parseint($('.BABrange').val()) + parseint($('.rangemisc').val()));}
function updateThrown() {$('.throwntotal').val(parseint($('.strm').val()) + parseint($('.BABthrown').val()) + parseint($('.thrownmisc').val()));}
function updateInitiative() {$('.inittotal').val(parseint($('.dexm').val()) + parseint($('.initmiscmod').val()));}
function updateStrMod() {$('.strm').val(Math.floor((parseint($('.str').val()) - 10) / 2));}
function updateDexMod() {$('.dexm').val(Math.floor((parseint($('.dex').val()) - 10) / 2));}
function updateConMod() {$('.conm').val(Math.floor((parseint($('.con').val()) - 10) / 2));}
function updateIntMod() {$('.intm').val(Math.floor((parseint($('.int').val()) - 10) / 2));}
function updateWisMod() {$('.wism').val(Math.floor((parseint($('.wis').val()) - 10) / 2));}
function updateChaMod() {$('.cham').val(Math.floor((parseint($('.cha').val()) - 10) / 2));}
function updateUStrMod() {$('.strmodm').val(Math.floor((parseint($('.strmod').val()) - 10) / 2));}
function updateUDexMod() {$('.dexmodm').val(Math.floor((parseint($('.dexmod').val()) - 10) / 2));}
function updateUConMod() {$('.conmodm').val(Math.floor((parseint($('.conmod').val()) - 10) / 2));}
function updateUIntMod() {$('.intmodm').val(Math.floor((parseint($('.intmod').val()) - 10) / 2));}
function updateUWisMod() {$('.wismodm').val(Math.floor((parseint($('.wismod').val()) - 10) / 2));}
function updateUChaMod() {$('.chamodm').val(Math.floor((parseint($('.chamod').val()) - 10) / 2));}
function updateAcrobatics() {$('.acrobaticstotal').val(parseint($('.acrobaticsranks').val()) + parseint($('.acrobaticsclassbonus').val()) + parseint($('.acrobaticsmiscmod').val()) + parseint($('.dexm').val()) + (3 * $('.acrobaticsCS:checked').is(':checked')));}
function updateAthletics() {$('.athleticstotal').val(parseint($('.athleticsranks').val()) + parseint($('.athleticsclassbonus').val()) + parseint($('.athleticsmiscmod').val()) + parseint($('.strm').val()) + (3 * $('.athleticsCS:checked').is(':checked')));}
function updateBluff() {$('.blufftotal').val(parseint($('.bluffranks').val()) + parseint($('.bluffclassbonus').val()) + parseint($('.bluffmiscmod').val()) + parseint($('.cham').val()) + (3 * $('.bluffCS:checked').is(':checked')));}
function updateComputers() {$('.computerstotal').val(parseint($('.computersranks').val()) + parseint($('.computersclassbonus').val()) + parseint($('.computersmiscmod').val()) + parseint($('.intm').val()) + (3 * $('.computersCS:checked').is(':checked')));}
function updateCulture() {$('.culturetotal').val(parseint($('.cultureranks').val()) + parseint($('.cultureclassbonus').val()) + parseint($('.culturemiscmod').val()) + parseint($('.intm').val()) + (3 * $('.cultureCS:checked').is(':checked')));}
function updateDiplomacy() {$('.diplomacytotal').val(parseint($('.diplomacyranks').val()) + parseint($('.diplomacyclassbonus').val()) + parseint($('.diplomacymiscmod').val()) + parseint($('.cham').val()) + (3 * $('.diplomacyCS:checked').is(':checked')));}
function updateDisguise() {$('.disguisetotal').val(parseint($('.disguiseranks').val()) + parseint($('.disguiseclassbonus').val()) + parseint($('.disguisemiscmod').val()) + parseint($('.cham').val()) + (3 * $('.disguiseCS:checked').is(':checked')));}
function updateEngineering() {$('.engineeringtotal').val(parseint($('.engineeringranks').val()) + parseint($('.engineeringclassbonus').val()) + parseint($('.engineeringmiscmod').val()) + parseint($('.intm').val()) + (3 * $('.engineeringCS:checked').is(':checked')));}
function updateIntimidate() {$('.intimidatetotal').val(parseint($('.intimidateranks').val()) + parseint($('.intimidateclassbonus').val()) + parseint($('.intimidatemiscmod').val()) + parseint($('.cham').val()) + (3 * $('.intimidateCS:checked').is(':checked')));}
function updateLifeScience() {$('.lifesciencetotal').val(parseint($('.lifescienceranks').val()) + parseint($('.lifescienceclassbonus').val()) + parseint($('.lifesciencemiscmod').val()) + parseint($('.intm').val()) + (3 * $('.lifescienceCS:checked').is(':checked')));}
function updateMedicine() {$('.medicinetotal').val(parseint($('.medicineranks').val()) + parseint($('.medicineclassbonus').val()) + parseint($('.medicinemiscmod').val()) + parseint($('.intm').val()) + (3 * $('.medicineCS:checked').is(':checked')));}
function updateMysticism() {$('.mysticismtotal').val(parseint($('.mysticismranks').val()) + parseint($('.mysticismclassbonus').val()) + parseint($('.mysticismmiscmod').val()) + parseint($('.wism').val()) + (3 * $('.mysticismCS:checked').is(':checked')));}
function updatePerception() {$('.perceptiontotal').val(parseint($('.perceptionranks').val()) + parseint($('.perceptionclassbonus').val()) + parseint($('.perceptionmiscmod').val()) + parseint($('.wism').val()) + (3 * $('.perceptionCS:checked').is(':checked')));}
function updatePhysicalScience() {$('.physicalsciencetotal').val(parseint($('.physicalscienceranks').val()) + parseint($('.physicalscienceclassbonus').val()) + parseint($('.physicalsciencemiscmod').val()) + parseint($('.intm').val()) + (3 * $('.physicalscienceCS:checked').is(':checked')));}
function updatePiloting() {$('.pilotingtotal').val(parseint($('.pilotingranks').val()) + parseint($('.pilotingclassbonus').val()) + parseint($('.pilotingmiscmod').val()) + parseint($('.dexm').val()) + (3 * $('.pilotingCS:checked').is(':checked')));}
function updateProfession0() {$('.profession0total').val(parseint($('.profession0ranks').val()) + parseint($('.profession0classbonus').val()) + parseint($('.profession0miscmod').val()) + parseint($('.profession0mod').val()) + (3 * $('.profession0CS:checked').is(':checked')));}
function updateProfession1() {$('.profession1total').val(parseint($('.profession1ranks').val()) + parseint($('.profession1classbonus').val()) + parseint($('.profession1miscmod').val()) + parseint($('.profession1mod').val()) + (3 * $('.profession1CS:checked').is(':checked')));}
function updateSenseMotive() {$('.sensemotivetotal').val(parseint($('.sensemotiveranks').val()) + parseint($('.sensemotiveclassbonus').val()) + parseint($('.sensemotivemiscmod').val()) + parseint($('.wism').val()) + (3 * $('.sensemotiveCS:checked').is(':checked')));}
function updateSleightOfHand() {$('.sleightofhandtotal').val(parseint($('.sleightofhandranks').val()) + parseint($('.sleightofhandclassbonus').val()) + parseint($('.sleightofhandmiscmod').val()) + parseint($('.dexm').val()) + (3 * $('.sleightofhandCS:checked').is(':checked')));}
function updateStealth() {$('.stealthtotal').val(parseint($('.stealthranks').val()) + parseint($('.stealthclassbonus').val()) + parseint($('.stealthmiscmod').val()) + parseint($('.dexm').val()) + (3 * $('.stealthCS:checked').is(':checked')));}
function updateSurvival() {$('.survivaltotal').val(parseint($('.survivalranks').val()) + parseint($('.survivalclassbonus').val()) + parseint($('.survivalmiscmod').val()) + parseint($('.wism').val()) + (3 * $('.survivalCS:checked').is(':checked')));}
