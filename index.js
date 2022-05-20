function play(){
  var audio = new Audio('audio/Squid-Game-Echo.mp3');
  audio.play();

}

function hide(){
document.querySelector("#pbtn").style.visibility = "hidden";
}



var diceP1=[];
    diceP1[0] ='images/dice-six-faces-one.png';
    diceP1[1] ='images/dice-six-faces-two.png';
    diceP1[2] ='images/dice-six-faces-three.png';
    diceP1[3] ='images/dice-six-faces-four.png';
    diceP1[4] ='images/dice-six-faces-five.png';
    diceP1[5] ='images/dice-six-faces-six.png';

var diceP2 = [];
    diceP2[0] ='images/dice-six-faces-one.png';
    diceP2[1] ='images/dice-six-faces-two.png';
    diceP2[2] ='images/dice-six-faces-three.png';
    diceP2[3] ='images/dice-six-faces-four.png';
    diceP2[4] ='images/dice-six-faces-five.png';
    diceP2[5] ='images/dice-six-faces-six.png';

    var x;
    var y;

function boardSet(){

      x=Math.random();
      x= x*6;
      x= Math.floor(x);

      y=Math.random();
      y= y*6;
      y= Math.floor(y);


      if(x===0){
        document.querySelector("img.p1dice").setAttribute("src","images/dice-six-faces-one.png");
      }else if(x===1){
        document.querySelector("img.p1dice").setAttribute("src","images/dice-six-faces-two.png");
      }else if(x===2){
        document.querySelector("img.p1dice").setAttribute("src","images/dice-six-faces-three.png");
      }else if(x===3){
        document.querySelector("img.p1dice").setAttribute("src","images/dice-six-faces-four.png");
      }else if(x===4){
        document.querySelector("img.p1dice").setAttribute("src","images/dice-six-faces-five.png");
      }else if(x===5){
        document.querySelector("img.p1dice").setAttribute("src","images/dice-six-faces-six.png");
      }

      if(y===0){
        document.querySelector("img.p2dice").setAttribute("src","images/dice-six-faces-one.png");
      }else if(y===1){
        document.querySelector("img.p2dice").setAttribute("src","images/dice-six-faces-two.png");
      }else if(y===2){
        document.querySelector("img.p2dice").setAttribute("src","images/dice-six-faces-three.png");
      }else if(y===3){
        document.querySelector("img.p2dice").setAttribute("src","images/dice-six-faces-four.png");
      }else if(y===4){
        document.querySelector("img.p2dice").setAttribute("src","images/dice-six-faces-five.png");
      }else if(y===5){
        document.querySelector("img.p2dice").setAttribute("src","images/dice-six-faces-six.png");
      }

      if(x>y){
        document.querySelector("h3.winnertext").textContent = "Player 1 Winns, Player 2 is dead";
      }else if(x<y){
        document.querySelector("h3.winnertext").textContent = "Player 2 Winns, Player 1 is dead";
      }else if(x===y){
        document.querySelector("h3.winnertext").textContent = "Its a tie, throw again or die both";
      }

  }
