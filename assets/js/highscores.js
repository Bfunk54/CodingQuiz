var highScoreAdd = document.getElementById('highScoresList');


window.onload = function() {
    loadHighscores();
  };

let highscoreArr = [];

function loadHighscores() {
    // var newUl = document.createElement("ul");
    // newUl.id = "highScoresList";
    // document.body.appendChild(newUl);
    // var highScores = document.getElementById('highScoresList');
    highscoreCount = 0
    highscoreLocal = 'highscores' + highscoreCount;
    let theHighscore = (localStorage.getItem(highscoreLocal));
   
    console.log(theHighscore);
    console.log(JSON.parse(theHighscore));
    let highscoreObj = JSON.parse(theHighscore);
if(theHighscore){
    let newLi = document.createElement("li");
    let highscoreText = 'Name: ' + highscoreObj.name + '    Points Scored: ' + highscoreObj.pointsScored;
    console.log(JSON.stringify(highscoreText));
    highscoreArr.push(JSON.stringify(highscoreText));
    // newLi.appendChild = (highscoreText);
    console.log(highscoreArr);
    newLi.textContent += highscoreArr[highscoreCount];
    console.log(newLi);
    highScoreAdd.appendChild(newLi);
    highscoreCount++;
    
    // localStorage.setItem("highscores", '');
}else{
    console.log('No highscores yet');
}
    
}