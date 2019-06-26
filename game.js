$(document).ready(function () {
    var spcStn;
    var mndStn;
    var rltyStn;
    var pwrStn;
    var timStn;
    var solStn;
    var compNum;
    var bldgNum = 0;
    var wins = 0;
    var losses = 0;
    var guessesLeft;
    ////////////////////////////////global variables///////////////////////////////////////////////////////
    ////////////////////each comment line is an explaination of whats going on above it////////////////////

    reset();
    function reset() {
        compNum = Math.floor(Math.random() * 182) + 19;
        console.log(compNum);
        $("#matchNum").html(compNum);
        document.getElementById("gauntlet").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText = "display: none";
        document.getElementById("winner").style.cssText = "display: none";
        document.getElementById("loser").style.cssText = "display: none";
        //computer picks a number between 19 and 120, that number is sent to id=matchNum/////////////////////

        let arr = [];
        while (arr.length < 6) {
            var i = Math.floor(Math.random() * 19) + 1;
            if (arr.indexOf(i) === -1) arr.push(i);
        }
        console.log(arr);
        //the users random generated number values for the infinity stones, passed into an array/////////////
        spcStn = arr[0];
        console.log(spcStn);
        //stones pulling their values from the array on a certain index, generated values from the while loop
        mndStn = arr[1];
        console.log(mndStn);
        //stones pulling their values from the array on a certain index, generated values from the while loop
        rltyStn = arr[2];
        console.log(rltyStn);
        //stones pulling their values from the array on a certain index, generated values from the while loop
        pwrStn = arr[3];
        console.log(pwrStn);
        //stones pulling their values from the array on a certain index, generated values from the while loop
        timStn = arr[4];
        console.log(timStn);
        //stones pulling their values from the array on a certain index, generated values from the while loop
        solStn = arr[5];
        console.log(solStn);
        //stones pulling their values from the array on a certain index, generated values from the while loop
        bldgNum = 0;
        $("#bldgNum").html(bldgNum);
        //the users number/building number, used to match the computers random generated number//////////////
        guessesLeft = 15;
        $("#guessesLeft").html(guessesLeft);
    }
    //the amount of guesses the user has left to match the computers random generated number/////////////////

    function win() {
        wins++;
        $("#wins").html(wins);
        yay();
        var w = confirm("You Beat Thanos! You're Now An Official Avenger. Press OK, To Play Again.");
        if (w == true) {
            yay();
            reset();
        } if (w !== true) {
            yay();
            alert("Press The Space Bar To Try Again.")
        }
    }
    function lose() {
        losses++;
        $("#losses").html(losses);
        womp();
        var l = confirm("Sorry... You're Just Not Avenger Material. Press OK, To Play Again.");
        if (l == true) {
            womp();
            reset();
        } if (l !== true) {
            womp();
            alert("Press The Space Bar To Try Again.")
        }
    }
    //the win and lose functions, reset the game and link to the yay and womp function for images/////////////
    
    $("#spcStn").on("mousedown", function () {
        bldgNum += spcStn;
        guessesLeft--;
        $("#guessesLeft").html(guessesLeft);
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            win();
        } else if (bldgNum > compNum) {
            lose();
        } else if (guessesLeft <= 0) {
            lose();
        }
    })
    //space stone has a value assigned from the while loop in the blank array, it will add to the bldgNum//////

    $("#mndStn").on("mousedown", function () {
        bldgNum += mndStn;
        guessesLeft--;
        $("#guessesLeft").html(guessesLeft);
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            win();
        } else if (bldgNum > compNum) {
            lose();
        } else if (guessesLeft <= 0) {
            lose();
        }
    })
    //mind stone has a value assigned from the while loop in the blank array, it will add to the bldgNum////////

    $("#rltyStn").on("mousedown", function () {
        bldgNum += rltyStn;
        guessesLeft--;
        $("#guessesLeft").html(guessesLeft);
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            win();
        } else if (bldgNum > compNum) {
            lose();
        } else if (guessesLeft <= 0) {
            lose();
        }
    })
    //reality stone has a value assigned from the while loop in the blank array, it will add to the bldgNum//////

    $("#pwrStn").on("mousedown", function () {
        bldgNum += pwrStn;
        guessesLeft--;
        $("#guessesLeft").html(guessesLeft);
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            win();
        } else if (bldgNum > compNum) {
            lose();
        } else if (guessesLeft <= 0) {
            lose();
        }
    })
    //power stone has a value assigned from the while loop in the blank array, it will add to the bldgNum///////

    $("#timStn").on("mousedown", function () {
        bldgNum += timStn;
        guessesLeft--;
        $("#guessesLeft").html(guessesLeft);
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            win();
        } else if (bldgNum > compNum) {
            lose();
        } else if (guessesLeft <= 0) {
            lose();
        }
    })
    //time stone has a value assigned from the while loop in the blank array, it will add to the bldgNum////////

    $("#solStn").on("mousedown", function () {
        bldgNum += solStn;
        guessesLeft--;
        $("#guessesLeft").html(guessesLeft);
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            win();
        } else if (bldgNum > compNum) {
            lose();
        } else if (guessesLeft <= 0) {
            lose();
        }
    })
    //soul stone has a value assigned from the while loop in the blank array, it will add to the bldgNum///////

    function womp() {
        var womp = document.getElementById("gauntlet").style.cssText = "display: none";
        document.getElementById("winner").style.cssText = "display: none";
        document.getElementById("loser").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText = "display: block";
    }
    function yay() {
        var yay = document.getElementById("gauntlet").style.cssText = "display: none";
        document.getElementById("winner").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText = "display: block";
        document.getElementById("loser").style.cssText = "display: none";
    }
    // the 2 functions that control when the images pop up on the screen for a win or loss
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    document.body.onkeyup = function (e) {
        if (e.keyCode == 32) {
            document.getElementById("gauntlet").style.cssText = "display: block";
            document.getElementById("tryAgain").style.cssText = "display: block";
            document.getElementById("winner").style.cssText = "display: none";
            document.getElementById("loser").style.cssText = "display: none";
            reset();
        }
    }
})
// the function for a user controlled reset
////////////////////////////////////////////////////////////////////////////////////////////////////////