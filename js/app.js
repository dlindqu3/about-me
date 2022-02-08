'use strict'; 

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

if (answerOne === 'y'){
  alert('Answer 1 is correct.');
} else if (answerOne === 'n'){
  alert('Answer 1 is incorrect.');
};

let answerTwo = prompt("Has Dwight completed an MA? Enter 'y' for yes and 'n' for no.").toLowerCase(); 

// if (answerTwo === 'y'){
//   console.log('Answer 2 is correct.');
// } else if (answerTwo === 'n'){
//   console.log('Answer 2 is incorrect.'); 
// };

if (answerTwo === 'y'){
  alert('Answer 2 is correct.');
} else if (answerTwo === 'n'){
  alert('Answer 2 is incorrect.');
};

let answerThree = prompt("Can Dwight speak German? Enter 'y' for yes and 'n' for no.").toLowerCase(); 

// if (answerThree === 'n'){
//   console.log('Answer 3 is correct.');
// } else if (answerThree === 'y'){
//   console.log('Answer 3 is incorrect.'); 
// };

if (answerThree === 'n'){
  alert('Answer 3 is correct.');
} else if (answerThree === 'y'){
  alert('Answer 3 is incorrect.');
};

let answerFour = prompt("Does Dwight have experience working with Java? Enter 'y' for yes and 'n' for no.").toLowerCase(); 

// if (answerFour === 'n'){
//   console.log('Answer 4 is correct.');
// } else if (answerFour === 'y'){
//   console.log('Answer 4 is incorrect.'); 
// };

if (answerFour === 'n'){
  alert('Answer 4 is correct.');
} else if (answerFour === 'y'){
  alert('Answer 4 is incorrect.');
};

let answerFive = prompt("Is Dwight currently attending the Codefellows 201 course? Enter 'y' for yes and 'n' for no.").toLowerCase(); 

// if (answerFive === 'y'){
//   console.log('Answer 5 is correct.');
// } else if (answerFive === 'n'){
//   console.log('Answer 5 is incorrect.'); 
// };

if (answerFive === 'y'){
  alert('Answer 5 is correct.');
} else if (answerFive === 'n'){
  alert('Answer 5 is incorrect.');
};

alert(`Thank you for participating, ${userName}.`); 