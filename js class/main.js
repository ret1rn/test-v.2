let a = prompt("Число?")

if (a % 2 == 0) {
    console.log("Четное");
} else {
    console.log("Не четное");
}

let name = prompt("What is your name?").toLowerCase().length
let age = prompt("How old are you?")

if (name % 2 == 0 && age >= 18) {
    console.log("Welcome");
} else console.log("Fuck you");

let quests = "Mirziyoyev Putin Obama Biden Zelenskiy Trump"

let namePresident = prompt("Name President?")

namePresident = namePresident[0].toUpperCase() + namePresident.slice(1)

quests = quests.split(" ")

if (namePresident === quests[0] || namePresident === quests[1] || namePresident === quests[2] || namePresident === quests[3] || namePresident === quests[4] || namePresident === quests[5]) {
    console.log("welcome to the conference");
} else {
    console.log("Bye bye Mr.President");
}