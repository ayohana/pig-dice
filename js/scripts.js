// Business Logic
function Player (id){
  this.numbers = [];
  this.totalRoundPoints = 0;
  this.finalPoints = [];
  this.totalFinalPoints = 0;
  this.id = id;
  this.turn = true;
}

Player.prototype.addRandomInput = function(random){
  this.numbers.push(random);
}

Player.prototype.addTotalRoundPoints = function(random){
  if (random === 1){
    this.numbers.splice(0, this.numbers.length);
    this.totalRoundPoints = 0;
    // this.showRoll1();
    this.showPlayerTurn();
    Player.turn = false;
  } else{
    this.totalRoundPoints += random;
  }
}

Player.prototype.addFinalPoints = function() {
  this.finalPoints.push(this.totalRoundPoints);
}

function generateRandomNumber(){
  return Math.floor(Math.random() * 6) + 1;
}

Player.prototype.showPlayerTurn = function(){
  $('#exampleModalCenter').modal('show');
  if (this.totalRoundPoints = 0){
    $("#showRolled1").show();
  } else {
    $("#showRolled1").hide();
  }
  if (this.id === 1) {
    $('#player2turn').show();
    $('#player1turn').hide();
    $("#player1").hide();
    $("#player2").show();
  }
  if (this.id === 2) {
    $('#player1turn').show();
    $('#player2turn').hide();
    $("#player2").hide();
    $("#player1").show();
  }
  this.turn = true;
}

// Player.prototype.showRoll1 = function(){
//   $("#showRolled1").toggle();
//   this.showPlayerTurn();
// }

// $(`#player${id}`).hide();


// User Interface Logic
var player1 = new Player(1);
var player2 = new Player(2);


console.log(player1)
console.log(player2)

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
    player1.addFinalPoints();
    player1.showPlayerTurn();
  });

  $("#player2roll").click(function(event){
    event.preventDefault();
    var random = generateRandomNumber();
    player2.addRandomInput(random);
    player2.addTotalRoundPoints(random);
    console.log(player2);
    $("#player1RandomInput").text(random);
    $("#player1roundPoints").text(player2.totalRoundPoints);
  });

  $("#player2hold").click(function(event){
    event.preventDefault();
    player2.addFinalPoints();
    player2.showPlayerTurn();
  });
})