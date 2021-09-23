// Iteration 1: Names and Input

let hacker1 = "Priscilla";
let hacker2 = "Marc";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `it seems that the navigator has the longest name, il has ${hacker2.length} characters`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow you both have equally long names,${hacker1.length}`);
}

// Iteration 3: Loops

let nameToUpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
  nameToUpperCase += hacker1[i].toUpperCase() + " ";
}
console.log(nameToUpperCase);

let reverseName = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseName += hacker1[i];
}
console.log(reverseName);

if (hacker2.localeCompare(hacker1)) {
  console.log(`${hacker2} goes first`);
} else if (hacker2.localeCompare(hacker1)) {
  console.log(`Yo ${hacker1} goes first`);
} else {
  console.log("What?! You both have the same name");
}

// Bonus 1

let lorem = "lorem ipsum dolor sit amet";

function countWords(word) {
  let space = 0;

  for (let i = 0; i < lorem.length; i++) {
    if (lorem[i] === " ") {
      space++;
    }
  }
  return space + 1;
}
console.log(countWords(lorem));

// Bonus 2
// Palindrome
let phraseToCheck = "Amor, Roma";
let newPhrase = [];
let isPalindrome = [];
for (let i = 0; i < phraseToCheck.length; i++) {
    if(phraseToCheck[i].toLowerCase() !== phraseToCheck[i].toUpperCase() && phraseToCheck[i] !== " "){
        newPhrase.push(phraseToCheck[i]);
    }
}
for (let i=phraseToCheck.length-1; i>=0; i--) {
    if (phraseToCheck[i].toLowerCase() !== phraseToCheck[i].toUpperCase() && phraseToCheck[i] !== " ") {
        isPalindrome.push(phraseToCheck[i]);
    };
}
    console.log(isPalindrome.join("").toLowerCase());
    console.log(newPhrase.join("").toLowerCase());
if (newPhrase.join("").toLocaleLowerCase() === isPalindrome.join("").toLocaleLowerCase()){
    console.log(`${phraseToCheck} is a Palindrome !!!!`)

} else {
    console.log(`${phraseToCheck} is a not a Palindrome :(`)
}