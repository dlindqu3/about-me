'use strict'; 

let totalCorrect = 0; 

let correctAnswerOne = 'y'; 
let correctAnswerTwo = 'y'; 
let correctAnswerThree = 'n'; 
let correctAnswerFour = 'n'; 
let correctAnswerFive = 'y'; 

let userName = prompt('Welcome to our site. What is your name?');
alert(`Welcome to our site, ${userName}.`); 

let answerOne = prompt("Is Dwight from Atlanta, GA? Enter 'y' for yes and 'n' for no.").toLowerCase(); 

// if (answerOne === 'y'){
//   console.log('Answer 1 is correct.');
// } else if (answerOne === 'n'){
//   console.log('Answer 1 is incorrect.'); 
// };
function questionOneFunc(){
if (answerOne === 'y'){
  alert('Answer 1 is correct.');
  totalCorrect++;
} else if (answerOne === 'n'){
  alert('Answer 1 is incorrect.');
};
}
questionOneFunc();
console.log(totalCorrect); 

let answerTwo = prompt("Has Dwight completed an MA? Enter 'y' for yes and 'n' for no.").toLowerCase(); 

// if (answerTwo === 'y'){
//   console.log('Answer 2 is correct.');
// } else if (answerTwo === 'n'){
//   console.log('Answer 2 is incorrect.'); 
// };
function questionTwoFunc(){
if (answerTwo === 'y'){
  alert('Answer 2 is correct.');
  totalCorrect++; 
} else if (answerTwo === 'n'){
  alert('Answer 2 is incorrect.');
};
}
questionTwoFunc();
console.log(totalCorrect); 

let answerThree = prompt("Can Dwight speak German? Enter 'y' for yes and 'n' for no.").toLowerCase(); 

// if (answerThree === 'n'){
//   console.log('Answer 3 is correct.');
// } else if (answerThree === 'y'){
//   console.log('Answer 3 is incorrect.'); 
// };
function questionThreeFunc(){
if (answerThree === 'n'){
  alert('Answer 3 is correct.');
  totalCorrect++; 
} else if (answerThree === 'y'){
  alert('Answer 3 is incorrect.');
};
}
questionThreeFunc();
console.log(totalCorrect); 

let answerFour = prompt("Does Dwight have experience working with Java? Enter 'y' for yes and 'n' for no.").toLowerCase(); 

// if (answerFour === 'n'){
//   console.log('Answer 4 is correct.');
// } else if (answerFour === 'y'){
//   console.log('Answer 4 is incorrect.'); 
// };
function questionFourFunc(){
if (answerFour === 'n'){
  alert('Answer 4 is correct.');
  totalCorrect++;
} else if (answerFour === 'y'){
  alert('Answer 4 is incorrect.');
};
}
questionFourFunc();
console.log(totalCorrect); 

let answerFive = prompt("Is Dwight currently attending the Codefellows 201 course? Enter 'y' for yes and 'n' for no.").toLowerCase(); 

// if (answerFive === 'y'){
//   console.log('Answer 5 is correct.');
// } else if (answerFive === 'n'){
//   console.log('Answer 5 is incorrect.'); 
// };

if (answerFive === 'y'){
  alert('Answer 5 is correct.');
  totalCorrect++;
} else if (answerFive === 'n'){
  alert('Answer 5 is incorrect.');
};

console.log(totalCorrect); 

//Question 6

for (let i = 0; i < 4; i++){
  let correctNum = 5; 
  let currentGuess = prompt('Guess a number from 1 to 10. You have 4 chances. Good luck!'); 
  if (currentGuess == correctNum){
    alert('Great job, the number is indeed 5!'); 
    totalCorrect++; 
    break; 
  } else if (currentGuess > correctNum){
    alert('Your previous selection was too high.');
  }
    else if (currentGuess < correctNum){
    alert('Your previous selection was too low.'); 
  }
}

console.log(totalCorrect); 

alert(`Thank you for participating, ${userName}.`); 

//Question 7

let breakLoop = false; 

for (let i = 0; i < 6; i++){
  let correctCountries = ['china', 'england', 'ireland']; 
  let correctCountriesCaps = ['China', 'England', 'Ireland']; 
  let currentGuess = prompt('Dwight has studied abroad in 3 countries. Name one of them. You have 6 attempts to guess correctly.').toLowerCase();
  for (let j = 0; j < correctCountries.length; j++){
    if (currentGuess === correctCountries[j]){
      alert('Correct!'); 
      breakLoop = true; 
    } 
  }
  if (breakLoop === false && i < 5){
    alert('Incorrect, try again!'); 
  } else if (breakLoop === false && i >= 5){
    alert(`Your 6 guesses were all incorrect. Dwight has actually studied in ${correctCountriesCaps[0]}, ${correctCountriesCaps[1]}, and ${correctCountriesCaps[2]}.`);
  } else{
    totalCorrect++; 
    break; 
  }
}

console.log(totalCorrect); 

alert(`You answered ${totalCorrect} questions correctly, nice.`);