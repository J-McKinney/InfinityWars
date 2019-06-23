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
    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    reset();
    function reset() {
        compNum = Math.floor(Math.random() * 182) + 19;
        console.log(compNum);
        $("#matchNum").html(compNum);
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
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    function win() {
        wins++;
        $("#wins").html(wins);
        document.getElementById("gauntlet").style.cssText = "display: none";
        document.getElementById("winner").style.cssText = "display: block";
        document.getElementById("loser").style.cssText = "display: none";
        reset();
    }
    function lose() {
        losses++;
        $("#losses").html(losses);
        document.getElementById("gauntlet").style.cssText = "display: none";
        document.getElementById("winner").style.cssText = "display: none";
        document.getElementById("loser").style.cssText = "display: block";
        reset();
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    $("#spcStn").on("click", function () {
        bldgNum += spcStn;
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            win();
        } else if (bldgNum > compNum) {
            lose();
        }
    })
    //space stone has a value assigned from the while loop in the blank array, it will add to the bldgNum
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    $("#mndStn").on("click", function () {
        bldgNum += mndStn;
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            win();
        } else if (bldgNum > compNum) {
            lose();
        }
    })
    //mind stone has a value assigned from the while loop in the blank array, it will add to the bldgNum
    ////////////////////////////////////////////////////////////////////////////////////////////////

    $("#rltyStn").on("click", function () {
        bldgNum += rltyStn;
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            win();
        } else if (bldgNum > compNum) {
            lose();
        }
    })
    //reality stone has a value assigned from the while loop in the blank array, it will add to the bldgNum
    /////////////////////////////////////////////////////////////////////////////////////////////////////

    $("#pwrStn").on("click", function () {
        bldgNum += pwrStn;
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            win();
        } else if (bldgNum > compNum) {
            lose();
        }
    })
    //power stone has a value assigned from the while loop in the blank array, it will add to the bldgNum
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    $("#timStn").on("click", function () {
        bldgNum += timStn;
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            win();
        } else if (bldgNum > compNum) {
            lose();
        }
    })
    //time stone has a value assigned from the while loop in the blank array, it will add to the bldgNum
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    $("#solStn").on("click", function () {
        bldgNum += solStn;
        $("#bldgNum").html(bldgNum);
        if (bldgNum == compNum) {
            win();
        } else if (bldgNum > compNum) {
            lose();
        }
    })
    //soul stone has a value assigned from the while loop in the blank array, it will add to the bldgNum
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    document.body.onkeyup = function(e){
        if(e.keyCode == 32){
            reset();
            bldgNum = 0;
        }
    }
})
