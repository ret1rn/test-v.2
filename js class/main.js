// let a = prompt("Число?")

// if (a % 2 == 0) {
//     console.log("Четное");
// } else {
//     console.log("Не четное");
// }

// let name = prompt("What is your name?").toLowerCase().length
// let age = prompt("How old are you?")

// if (name % 2 == 0 && age >= 18) {
//     console.log("Welcome");
// } else console.log("Fuck you");

let quests = "Mirziyoyev Putin Obama Biden Zelenskiy Trump"

let namePrezident = prompt("Name Prezinent?")

namePrezident = namePrezident[0].toUpperCase() + namePrezident.slice(1)

quests = quests.split(" ")

if (namePrezident === quests[0] || namePrezident === quests[1] || namePrezident === quests[2] || namePrezident === quests[3] || namePrezident === quests[4] || namePrezident === quests[5]) {
    console.log("welcome");
} else {
    console.log("Bye bye");
}