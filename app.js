// function sing() {
//     console.log("Laughing on the outside...");
//     console.log("crying on the inside");
//     console.log("cuz I'm so in love.. with youuuuuu!!!");
// }

// sing();

// function greet(name) {
//     console.log(`HI ${name}`);
// }

// greet('Endo');

function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs);
}


// lexical scope
function bankRobbery() {
	const hereos = ['Spiderman', 'Superman', 'Batwomen'];
	function cryForHelp() {
		for (let hero of hereos) {
			console.log(`please help us ${hero}`);
        }
    }
    cryForHelp();
}

bankRobbery();
