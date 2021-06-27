class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
      background("yellow");
      fill(0);
      textSize(30);
      text("Result of the quiz",340,50);
      text("-..............................",320,65);
          //write code to show a heading for showing the result of Quiz
        Contestant.getPlayerInfo();
        if(allContestants !== undefined){
            debugger;
            var dispaly_Answer=230;
            fill("blue");
            textSize(20);
            text("*NOTE: Contestants who answered correct are in green color !",130,230);
            for(var plr in allContestants){
              debugger;
              var correctAns="2";
              if(correctAns ===allContestants[plr].answer){
                  fill("green");
              }
              else{
                fill("red");
              }
              dispaly_Answer+=30;
              textSize(20);
              text(allContestants[plr].name+ ":"+ allContestants[plr].answer,250,dispaly_Answer)
            }
        }
   
    
  }

}
