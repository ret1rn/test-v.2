console.log("Задание №2");

let name = prompt("What is your name?").toLowerCase().length

let age = prompt("How old are you?")

if (name % 2 == 0 && age >= 18) {
    console.log("Welcome");
} else {
    console.log("No entry!");
}