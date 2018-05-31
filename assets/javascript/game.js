// Crystal game psuedo code
// Generate a random number between 19 and 120
// Create 4 crystals that generate their own random numbers between 1 and 12
// Each Crystals number is hidden, when the player clicks on a crystal it adds to the players "total score"
// If the player matches his score to the random number a "win" is added to "win/loss" score
// If the players score goes over the random number a loss is counted
// The random numbers reset when the player wins/loses

$("#randomNumber").text(Math.floor((Math.random() * 120) + 19));

var crystalNumbers;
var win;
var loss;

// for(var i = 0; i < 4; i++){
//     var crystal = $("<div>");
//     $(".crystalsHolder").append(crystal);

// } 

$("#crystalHeart").click(function() {
    // alert("test")
    
})
$("#jade").click(function() {
    // alert("test")
    
})
$("#opal").click(function() {
    // alert("test")
    
})
$("#ruby").click(function() {
    // alert("test")
    
})


