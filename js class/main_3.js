console.log("Задание №3");

let quests = "Mirziyoyev Putin Obama Biden Zelenskiy Trump"
let namePresident = prompt("Name President?")
namePresident = namePresident[0].toUpperCase() + namePresident.slice(1)

quests = quests.split(" ")

// for (let item in quests) {
//     if (namePresident == quests[item]) {
//         console.log("welcome");
//     } else {
//         console.log("Fuck off");
//     }
// }


if (namePresident === quests[0] || namePresident === quests[1] || namePresident === quests[2] || namePresident === quests[3] || namePresident === quests[4] || namePresident === quests[5]) {
    console.log("welcome to the conference");
} else {
    console.log("Bye bye Mr.President");
}