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
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    reset();
    function reset() {
        compNum = Math.floor(Math.random() * 182) + 19;
        console.log(compNum);
        $("#matchNum").html(compNum);
        document.getElementById("gauntlet").style.cssText = "display: block";
        document.getElementById("winner").style.cssText = "display: none";
        document.getElementById("loser").style.cssText = "display: none";
        //computer picks a number between 19 and 120, that number is sent to id=matchNum
        /////////////////////////////////////////////////////////////////////////////////////////////////////
        let arr = [];
        while (arr.length < 6) {
            var i = Math.floor(Math.random() * 19) + 1;
            if (arr.indexOf(i) === -1) arr.push(i);
        }
        console.log(arr);
        ///////////////////////////////////////////////////////////////////////////////////////////////////////
        spcStn = arr[0];
        console.log(spcStn);
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        mndStn = arr[1];
        console.log(mndStn);
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        rltyStn = arr[2];
        console.log(rltyStn);
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        pwrStn = arr[3];
        console.log(pwrStn);
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        timStn = arr[4];
        console.log(timStn);
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        solStn = arr[5];
        console.log(solStn);
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        bldgNum = 0;
        $("#bldgNum").html(bldgNum);

        guessesLeft = 15;
        $("#guessesLeft").html(guessesLeft);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    function win() {
        document.getElementById("gauntlet").style.cssText = "display: none";
        document.getElementById("winner").style.cssText = "display: block";
        document.getElementById("loser").style.cssText = "display: none";
        wins++;
        $("#wins").html(wins);
        var w = confirm("You Beat Thanos! You're Now An Official Avenger. Press OK, To Play Again.");
        document.getElementById("gauntlet").style.cssText = "display: none";
        document.getElementById("winner").style.cssText = "display: block";
        document.getElementById("loser").style.cssText = "display: none";
        if (w == true) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: block";
            document.getElementById("loser").style.cssText = "display: none";
        } else {
            alert("If You Change Your Mind, Just Hit The Space Bar");
        }
        reset();
    }
    function lose() {
        document.getElementById("gauntlet").style.cssText = "display: none";
        document.getElementById("winner").style.cssText = "display: none";
        document.getElementById("loser").style.cssText = "display: block";
        losses++;
        $("#losses").html(losses);
        var l = confirm("Sorry... You're Just Not Avenger Material. Press OK, To Play Again.");
        document.getElementById("gauntlet").style.cssText = "display: none";
        document.getElementById("winner").style.cssText = "display: none";
        document.getElementById("loser").style.cssText = "display: block";
        if (l == true) {
            reset();
        } else {
            alert("Snap!!! Half Of The Universe Has Vanished!");
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: none";
            document.getElementById("loser").style.cssText = "display: block";
        }
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    $("#spcStn").on("mousedown", function () {
        bldgNum += spcStn;
        guessesLeft--;
        $("#guessesLeft").html(guessesLeft);
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: block";
            document.getElementById("loser").style.cssText = "display: none";
            win();
        } else if (bldgNum > compNum) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: none";
            document.getElementById("loser").style.cssText = "display: block";
            lose();
        } else if (guessesLeft <= 0) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: none";
            document.getElementById("loser").style.cssText = "display: block";
            lose();
        }
    })
    //space stone has a value assigned from the while loop in the blank array, it will add to the bldgNum
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    $("#mndStn").on("mousedown", function () {
        bldgNum += mndStn;
        guessesLeft--;
        $("#guessesLeft").html(guessesLeft);
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: block";
            document.getElementById("loser").style.cssText = "display: none";
            win();
        } else if (bldgNum > compNum) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: none";
            document.getElementById("loser").style.cssText = "display: block";
            lose();
        } else if (guessesLeft <= 0) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: none";
            document.getElementById("loser").style.cssText = "display: block";
            lose();
        }
    })
    //mind stone has a value assigned from the while loop in the blank array, it will add to the bldgNum
    ////////////////////////////////////////////////////////////////////////////////////////////////

    $("#rltyStn").on("mousedown", function () {
        bldgNum += rltyStn;
        guessesLeft--;
        $("#guessesLeft").html(guessesLeft);
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: block";
            document.getElementById("loser").style.cssText = "display: none";
            win();
        } else if (bldgNum > compNum) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: none";
            document.getElementById("loser").style.cssText = "display: block";
            lose();
        } else if (guessesLeft <= 0) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: none";
            document.getElementById("loser").style.cssText = "display: block";
            lose();
        }
    })
    //reality stone has a value assigned from the while loop in the blank array, it will add to the bldgNum
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    $("#pwrStn").on("mousedown", function () {
        bldgNum += pwrStn;
        guessesLeft--;
        $("#guessesLeft").html(guessesLeft);
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: block";
            document.getElementById("loser").style.cssText = "display: none";
            win();
        } else if (bldgNum > compNum) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: none";
            document.getElementById("loser").style.cssText = "display: block";
            lose();
        } else if (guessesLeft <= 0) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: none";
            document.getElementById("loser").style.cssText = "display: block";
            lose();
        }
    })
    //power stone has a value assigned from the while loop in the blank array, it will add to the bldgNum
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    $("#timStn").on("mousedown", function () {
        bldgNum += timStn;
        guessesLeft--;
        $("#guessesLeft").html(guessesLeft);
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: block";
            document.getElementById("loser").style.cssText = "display: none";
            win();
        } else if (bldgNum > compNum) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: none";
            document.getElementById("loser").style.cssText = "display: block";
            lose();
        } else if (guessesLeft <= 0) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: none";
            document.getElementById("loser").style.cssText = "display: block";
            lose();
        }
    })
    //time stone has a value assigned from the while loop in the blank array, it will add to the bldgNum
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    $("#solStn").on("mousedown", function () {
        bldgNum += solStn;
        guessesLeft--;
        $("#guessesLeft").html(guessesLeft);
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: block";
            document.getElementById("loser").style.cssText = "display: none";
            win();
        } else if (bldgNum > compNum) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: none";
            document.getElementById("loser").style.cssText = "display: block";
            lose();
        } else if (guessesLeft <= 0) {
            document.getElementById("gauntlet").style.cssText = "display: none";
            document.getElementById("winner").style.cssText = "display: none";
            document.getElementById("loser").style.cssText = "display: block";
            lose();
        }
    })
    //soul stone has a value assigned from the while loop in the blank array, it will add to the bldgNum
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    document.body.onkeyup = function (e) {
        if (e.keyCode == 32) {
            reset();
        }
    }
})
