'use strict';

// dom
const score = document.querySelector('.score');
const again = document.querySelector('.again')
//

let number =  Math.trunc(Math.random()*20)+1;
// document.querySelector('.number').textContent=number;
var initScore = 20
let highscore = 0;
score.textContent = initScore

document.querySelector('.btn.check').addEventListener('click',function(){
const guess = Number(document.querySelector('.guess').value);
if(!guess){
    document.querySelector('.message').textContent=
    '⛔ No Number' ;
}else if(guess===number){
    document.querySelector('.number').textContent=number;
    document.querySelector('.message').textContent=
    '🥳 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'
    if(initScore>highscore){
        highscore =  initScore;
        document.querySelector('.highscore').textContent = highscore;
    }
}else if(guess<number){
    if(initScore>1){
        document.querySelector('.message').textContent='⏬ Too Low';initScore--;
    }else{
        document.querySelector('.message').textContent= '😑 You lose the game';
        // score.textContent=initScore-1;
    }

}else if(guess>number){
    if(initScore>1){
        document.querySelector('.message').textContent='⏬ Too High';initScore--;
    }else{
        // score.textContent=initScore-1;
        document.querySelector('.message').textContent= '😑 You lose the game';
    }
}
score.textContent = initScore;
})

// document.querySelector('.message').textContent = 
// '🥳 Correct Number!';

document.querySelector('.again').addEventListener('click',function(){
    initScore = 20; 
    number =  Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = initScore;
    document.querySelector('.number').textContent = '?';
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
})


