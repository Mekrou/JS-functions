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

// methods

const math = {
    multiply : function(x, y) {
        return x * y;
    },
    divide : function(x, y) {
        return x / y;
    },
    square : function(x) {
        return x * x;
    }
};

// shorthand

const pillBox = {
    pills : ['strattera', 'solgar'],
    sortMeds(arrayOfPills) {
        // logic
    },
};

const cat = {
    name: 'Stephen',
    color: 'morange',
    meow() {
        console.log("MEOW MEOW MEOW");
        console.log(`${this.name} meowed`);
    }
}

// cat.meow(); // 'this' refers to cat object
	// > "MEOW MEOW MEOW"
	// > "Stephen meowed"

// const meow2 = cat.meow;
// meow2(); // 'this referes to the window object.
	// > "MEOW MEOW MEOW"
	// > " meowed"

// Try catch statements
try {
    hello.toUpperCase();
} catch {
    console.log("error");
}

console.log("this code still runs!");