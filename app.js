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

// function collectEggs() {
//     let totalEggs = 6;
//     console.log(totalEggs);
// }


// lexical scope
// function bankRobbery() {
// 	const hereos = ['Spiderman', 'Superman', 'Batwomen'];
// 	function cryForHelp() {
// 		for (let hero of hereos) {
// 			console.log(`please help us ${hero}`);
//         }
//     }
//     cryForHelp();
// }

// bankRobbery();

// function callTwice(func) {
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`You rolled: ${roll}`);
// }

// callTwice(rollDie);

// randomly return a 'fun' or 'annoying' function 
// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function() 
//         {
//             console.log("I AM FUN!");
//         }
//     } 
//     else return function() 
//     {
//         alert("I AM A VIRUS LOLLLLLL");
//         alert("YOU CANT GET RID OF MEEEE");
//     }
// }

// let myFunction = makeMysteryFunc();

// myFunction();


// returns true if num between range, else false
function isBetween(num) {
	return num >= 50 && num <= 100;
}

// what if we want between 1 and 10?
function isBetween(num) {
	return num >= 50 && num <= 100;
}

// a factory function sure would be helpful...

function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

let isBetween = makeBetweenFunc(1, 50);