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
    let theHighscore = (localStorage.getItem('highscores'));
    highscoreArr.push(theHighscore);
    console.log(JSON.stringify(theHighscore));
    console.log(highscoreArr);
    

    
if(theHighscore){
    for (var i = 0; i < highscoreArr.length; i++){
    // let highscoreObj = JSON.parse(highscoreArr[i]);
    let newLi = document.createElement("li");
    // let highscoreText = 'Name: ' + highscoreObj.name + '    Points Scored: ' + highscoreObj.pointsScored;
    // console.log(JSON.stringify(theHighscore));
    
    // newLi.appendChild = (highscoreText);
    console.log(highscoreArr[i]);

    newLi.textContent += highscoreArr[i];
    console.log(newLi);
    highScoreAdd.appendChild(newLi);
    highscoreCount++;
    }
    // localStorage.setItem("highscores", '');
}else{
    console.log('No highscores yet');
}
    
}