//declare global variables
let score = 0,
    highscore = 0,
    time = 30;

let IsPlaying = false;
let timeBoard = document.getElementById('time'),
    scoreBoard = document.getElementById('score'),
    btnStart = document.getElementById('btn');

//make the provided element fall down
function fallDown(apple){
    if(!(IsPlaying && apple instanceof HTMLElement)){
        return
    }
    //store current position
    apple.setAttribute('data-top',apple.style.top);
    //change the top
    apple.style = "380px";
    //increase the score
    score = score +5;
    //show score on the scoreboard
    renderScore();
    //hide the apple after falling
    hideFallenApple(apple);
}

//hide falling apple
function hideFallenApple(apple){
    ///wait for the apple to fall first
    setTimeout(function(){
        apple.style.display = 'none';
        restoreFallen(apple)
    },501);
}

//restore apple after falling
function restoreFallen(apple)
{
    apple.style.top = apple.getAttribute('data-top');
    setTimeout(function(){
        apple.style.display = 'inline-block';
    },501);
}

//show scores
function renderScore(){
    scoreBoard.innerText = score;
    if(score>highscore)
    {
        highscore = score;
        document.getElementById('high').innerText = highscore;
    }
}

//detect if user is playing
function startGame(){
    btnStart.disabled = "disabled";
    IsPlaying =True;
    renderScore = true;
    timer = setInterval(countDown,1000);
}

//end game
function endGame(){
    IsPlaying = False;
    alert("Your score is"+score);
    score = 0;
    time = 30;
    btnStart.removeAttribute('disabled');
}