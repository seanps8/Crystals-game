$(document).ready(function() {

    var randomNumber = Math.floor(Math.random() * 101 + 19);
    
    var blueNum = Math.floor(Math.random() * 11 + 1);
    var redNum = Math.floor(Math.random() * 11 + 1);
    var greenNum = Math.floor(Math.random() * 11 + 1);
    var yellowNum = Math.floor(Math.random() * 11 + 1);

    var userScore = 0;
    var wins = 0;
    var losses = 0;

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);
    $("#randomNumber").text(randomNumber);

    function Initialize () {
        randomNumber = Math.floor(Math.random() * 101 + 19);
        console.log(randomNumber);

        blueNum = Math.floor(Math.random() * 11 + 1);
        redNum = Math.floor(Math.random() * 11 + 1);
        greenNum = Math.floor(Math.random() * 11 + 1);
        yellowNum = Math.floor(Math.random() * 11 + 1);

        userScore = 0;
        $("#randomNumber").text(randomNumber);
        $("#finalTotal").text(userScore);
    };

    function winner() {
        alert("You won!");
        wins++;
        $("#numberWins").text(wins);
        Initialize();
    };

    function loser() {
        alert("You lose");
        losses++;
        $("#numberLosses").text(losses);
        Initialize();
    };

    $("#one").on("click", function() {
        userScore += blueNum;
        console.log(userScore);
        $("#finalTotal").text(userScore);
        if (userScore === randomNumber) {
            winner();
        }
        else if (userScore > randomNumber) {
            loser();
        }
    });

    $("#two").on("click", function() {
        userScore += greenNum;
        console.log(userScore);
        $("#finalTotal").text(userScore);
        if (userScore === randomNumber) {
            winner();
        }
        else if (userScore > randomNumber) {
            loser();
        }
    });

    $("#three").on("click", function() {
        userScore += redNum;
        console.log(userScore);
        $("#finalTotal").text(userScore);
        if (userScore === randomNumber) {
            winner();
        }
        else if (userScore > randomNumber) {
            loser();
        }
    });

    $("#four").on("click", function() {
        userScore += yellowNum;
        console.log(userScore);
        $("#finalTotal").text(userScore);
        if (userScore === randomNumber) {
            winner();
        }
        else if (userScore > randomNumber) {
            loser();
        }
    });




});