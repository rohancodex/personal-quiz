var readlineSync = require('readline-sync');

var score=0;

var highscore = [
  {
    name: "Rohan",
    score: 3
  },
  {
    name: "Nishant",
    score: 2
  }
]
var questions = [
  {
  question:"What's my favourite hobby? ",
  answer: "Chess"
},
{
  question: "What is my age? ",
  answer: "20"
},
{
  question: "What am I studying currently? ",
  answer: "IT Engineering"
}
]


function welcome(){
  
  var userName = readlineSync.question('Can I know your name? ');
  console.log('Welcome ' +userName+ ' to "How well do you know Rohan"');
}

function quiz(){
  for(i=0;i<questions.length;i++){
    var response = readlineSync.question((i+1)+". "+questions[i].question);
    if(response.toUpperCase()===questions[i].answer.toUpperCase()){
      score++;
      console.log("You are correct!");
      console.log("Your score is "+score)
    }
    else{
      console.log("Your answer is unfortunately wrong");
      console.log("Your score is "+score);
    }
  }
}

function showScore(){
  console.log("You scored "+score);
  console.log("Check out the highscores: ");
  console.log("1."+ highscore[0].name+"  score: "+ highscore[0].score);
  console.log("2."+ highscore[1].name+"  score: "+ highscore[1].score);
  console.log("ping me if you beat the highscores to update!");
}
welcome();
quiz();
showScore();
