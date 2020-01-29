// Business Logic
function Player1 (){
  this.numbers = [];
  this.totalRoundPoints = 0;
  this.finalPoints = [];
  this.totalFinalPoints = 0;
}

Player1.prototype.addRandomInput = function(random){
  this.numbers.push(random);
}

Player1.prototype.addTotalRoundPoints = function(random){

  if (random === 1){
    this.numbers.splice(0, this.numbers.length);
    this.totalRoundPoints = 0;
  } else{
    this.totalRoundPoints += random;
  }
}

Player1.prototype.addFinalPoints = function() {
  this.finalPoints.push(this.totalRoundPoints);
}

function generateRandomNumber(){
  return Math.floor(Math.random() * 6) + 1;
}

// User Interface Logic
var player1 = new Player1();

$(document).ready(function(){
  $("#player1roll").click(function(event){
    event.preventDefault();
    var random = generateRandomNumber();
    player1.addRandomInput(random);
    player1.addTotalRoundPoints(random);
    console.log(player1);
    $("#player1RandomInput").text(random);
    $("#player1roundPoints").text(player1.totalRoundPoints);
  });

  $("#player1hold").click(function(event){
    event.preventDefault();
    player1.addFinalPoints;
  });
})