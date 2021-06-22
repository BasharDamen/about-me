'use strict';


let userName = prompt('What is your name?');
alert('You Are Welcom ' + userName)
//console.log(userName)

alert("take a few second to awnser the following questions with yes(y) or no(n)")


let ques1 = prompt("Are you more than 18 years old?");

switch (ques1.toLocaleLowerCase()) {
    case 'yes':
    case 'y':
        alert('you are allowed to get in')
        //console.log(ques1)
        break;

    case 'no':
    case 'n':
        alert('you are not allowed to get in');
        //console.log(ques1)
        break;

    default:
        alert('wrong answer');
}


let ques2 = prompt('Are you an Accountant or a Web-Developer');

switch (ques2.toLocaleUpperCase()){

    case 'YES':
    case 'Y':
        alert('Hello mate');
        //console.log(ques2);
        break;

    case 'NO':
    case 'N':
        alert('Unlucky')
        //console.log(ques2);
        break;

     default:
        alert('wrong answer');
}

let ques3 = prompt('you feel GOOD today?');

switch (ques3.toLocaleUpperCase()){

    case 'YES':
    case 'Y':
        alert('GREAT')
        //console.log(ques3);
        break;

    case 'NO':
    case 'N':
        alert('hope it get better')
        //console.log(ques3);
        break;

     default:
            alert('wrong answer');
}

let ques4 = prompt('is it your first time visiting my WEBSITE?');

switch (ques4.toLocaleLowerCase()) {
    case 'yes':
    case 'y':
        alert('welcome again')
        //console.log(ques4);
        break;

    case 'no':
    case 'n':
        alert('Hope you enjoy')
        //console.log(ques4)
        break;

    default:
            alert('wrong answer');
}

let ques5 = prompt('will you share my website with your friends?')

switch (ques5.toLocaleLowerCase()) {
    case 'yes':
    case 'y':
        alert('Thank you')
        //console.log(ques5);
        break;

    case 'no':
    case 'n':
        alert('wrong answer')
        //console.log(ques5);
        break;

    default:
            alert('wrong answer');
}

alert(userName);


let score = 0
let guessNum = prompt('Guess how old am I?' , 'hint: less than 35 and more than 15');
for(let i=0 ; i < 4 ; i++){
        if ( guessNum < 24){
            prompt('too low, try again');
            console.log(i);
        }
        if (guessNum > 24){
            prompt('too high, try again')
            console.log(i);
        }
        if(guessNum == 24){
            alert('correct answer');
            score++
            break;
        }
        if ( i == 3 ){
            alert("the correct answer is 24");
        }
}



let js = [' for ' , ' if..else ' , ' text-align ' , ' <p></p> ' , ' var ' , 'padding' , 'switch' , 'alert' , 'prompt' , 'let']
let guessQues = prompt('which of the following is related a Javascript statement ' + js , 'you have 7 attempt' );


for(let i=0 ; i < 7 ; i++){
        if ( guessQues == "for" || guessQues == "if..else" || guessQues == "var" || guessQues == 'switch' || guessQues == 'alert' , guessQues == 'prompt' , 'let'){
            guessQues = prompt( 'correct answer', js );
            //alert('correct')
            console.log(i + guessQues);
            score++;
        } 
        if ( guessQues == "text-align" || guessQues == "<p></p>" || guessQues == "padding" ){
            guessQues = prompt('Wrong awnser', js );
            //alert('wrong')
            console.log(i + guessQues);
        }
        if ( i == 6 ){
            alert("the correct answers are 'for','if..else','var','switch',  'alert' , 'prompt' , 'let'");
            alert('your score is ' + score)
            break;
        }
}
