let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function newGame(){
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
    homeScoreEl.style.background = "rgba(0,0,0, 0.8)";
    guestScoreEl.style.background = "rgba(0,0,0,0.8)";
}

function winningTeam(){
    if(homeScore > guestScore){
        homeScoreEl.style.background = "rgba(0,255,0, 0.5)";
        guestScoreEl.style.background = "rgba(255,0,0,0.5)";
    }else{
        guestScoreEl.style.background = "rgba(0,255,0, 0.5)";
        homeScoreEl.style.background = "rgba(255,0,0,0.5)";
    }
}

function home1(){
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    winningTeam();
}

function home2(){
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    winningTeam();
}
function home3(){
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    winningTeam();
}
function guest1(){
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
    winningTeam();
}

function guest2(){
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    winningTeam();
}
function guest3(){
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
    winningTeam();
}