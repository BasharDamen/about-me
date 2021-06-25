'use strict';

let userName = prompt('What is your name?');
function welcome (){

    alert('You Are Welcom ' + userName)
    
}
welcome();



 alert("take a few second to awnser the following questions with yes(y) or no(n)")

function theAge (){

    let ques1 = prompt("Are you more than 18 years old?");
    
    switch (ques1.toLocaleLowerCase()) {
        case 'yes':
            case 'y':
                alert('you are allowed to get in')
                break;
                
                case 'no':
                    case 'n':
                        alert('you are not allowed to get in');
                        break;
                        
                        default:
                            alert('wrong answer');
                        }
 }
 theAge();

                        
function jop(){

    let ques2 = prompt('Are you an Accountant or a Web-Developer');
    
    switch (ques2.toLocaleUpperCase()){
        
        case 'YES':
            case 'Y':
                alert('Hello mate');
        break;
        
        case 'NO':
            case 'N':
                alert('Unlucky')
                break;
                
                default:
                    alert('wrong answer');
                }
 }
 jop();

function feelGood (){

    let ques3 = prompt('you feel GOOD today?');
    
switch (ques3.toLocaleUpperCase()){
    
    case 'YES':
        case 'Y':
            alert('GREAT')
            break;
            
            case 'NO':
                case 'N':
                    alert('hope it get better')
                    break;
                    
                    default:
                        alert('wrong answer');
                    }
                }
feelGood();

function visitWebsite(){

    let ques4 = prompt('is it your first time visiting my WEBSITE?');
    
    switch (ques4.toLocaleLowerCase()) {
        case 'yes':
            case 'y':
                alert('welcome again')
                break;
                
                case 'no':
                    case 'n':
                        alert('Hope you enjoy')
                        break;
                        
                        default:
                            alert('wrong answer');
                        }
                    }
    visitWebsite();

function shareWebsite (){

    let ques5 = prompt('will you share my website with your friends?')
    
    switch (ques5.toLocaleLowerCase()) {
        case 'yes':
            case 'y':
                alert('Thank you')
                break;
                
                case 'no':
                    case 'n':
                        alert('wrong answer')
                        break;
                        
                        default:
                            alert('wrong answer');
                        }
                    }   
                    shareWebsite();
    alert(userName);
                    
                        

    let score = 0
function myAge(){

    for(let i=0 ; i < 4 ; i++){

        let guessNum = prompt('Guess how old am I?' , 'hint: less than 35 and more than 15');

        for(let j=0 ; j<4 ; j++ ){

            if (guessNum == 24){
                alert('Correct');
                score++;
                i=4;
                break;
            } 
        }
        
        if (guessNum < 24) {
            alert('too low')
        }
        if (guessNum > 24 ){
            alert('too high')
        }
        if (i == 3) {
            alert('the answer is 24')
        }
    } 
    
}
myAge();

    



let $choices = [' for ' , ' if..else ' , ' text-align ' , ' <p></p> ' , ' var ' , 'padding' , 'switch' , 'alert' , 'prompt' , 'let']                    
let js = ['for' , 'if..else' , 'var' , 'switch' , 'alert' , 'prompt' , 'let']

function $choose(){

    let correct = false;
    // // first for loop for thr number of guessing time 
    for (let i = 0; i < 7; i++) {
    //     // 6 time looping [# of attempts]
        let question7 = prompt('which of the following is related a Javascript statement ' + $choices);
    //     // the inner loop for the correct answer
        for (let j = 0; j < js.length; j++) {
            if (question7 == js[j]) {
    
                alert('Correct Answer');
                score++;
                correct = true;
                i = 9;
                break;
            }
    
        }
        
        if (correct) {
            break;
        }
        if(i == 6){
            alert('the correct answer is: ' + js)
        }
    
    }
}$choose();