'use strict';


let userName = prompt('What is your name?');
alert('You Are Welcom ' + userName)

alert("take a few second to awnser the following questions with yes(y) or no(n)")


let ques1 = prompt("Are you more than 18 years old?");

switch (ques1.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('you are allowed to get in')
        console.log(ques1)
        break;

    case 'no':
    case 'n':
        alert('you are not allowed to get in');
        console.log(ques1)
        break;

    default:
        alert('wrong answer');
}


let ques2 = prompt('Are you an Accountant or a Web-Developer');

switch (ques2.toUpperCase()){

    case 'YES':
    case 'Y':
        alert('Hello mate');
        console.log(ques2);
        break;

    case 'NO':
    case 'N':
        alert('Unlucky')
        console.log(ques2);
        break;

     default:
        alert('wrong answer');
}

let ques3 = prompt('you feel GOOD today?');

switch (ques3.toUpperCase()){

    case 'YES':
    case 'Y':
        alert('GREAT')
        console.log(ques3);
        break;

    case 'NO':
    case 'N':
        alert('hope it get better')
        console.log(ques3);
        break;

     default:
            alert('wrong answer');
}

let ques4 = prompt('is it your first time visiting my WEBSITE?');

switch (ques1.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('welcome again')
        console.log(ques4);
        break;

    case 'no':
    case 'n':
        alert('Hope you enjoy')
        console.log(ques4)
        break;

    default:
            alert('wrong answer');
}

let ques5 = prompt('will you share my website with your friends?')

switch (ques1.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('Thank you')
        console.log(ques5);
        break;

    case 'no':
    case 'n':
        alert('wrong answer')
        console.log(ques5);
        break;

    default:
            alert('wrong answer');
}