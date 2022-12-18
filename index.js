
let current = 0;
let score = 0;
let grade = 0;
let questions = [
    ["Solve 2x + 3 > 13.", "x>5", "$N"],
    ["Solve |3x-5| = 3","8/3", "x=8/3"],
    ["Write: 5 < x+2 < 7 in set-builder form.","{x|3<x<5}", "$N"],
    ["Write: 3 < x < 5 in interval notation.", "(3,5)", "$N"],
    ["Is 3x^2 + 3(x-5) = 2x^2 -17 + x^2 - x/217 nonlinear? Y/N", "N", "$N"],
    ["Solve -3x+5<10", "x>-5/3", "$N"],
    ["There is correlation between forest fires and fortnite players. Is there likely causation? Y/N", "N","$N"],
    ["If you put $6000 into a bank account with 5% interest for 25 years, how much do you have now?", "2250", "$N"],
    ["Done!", "$D", "$N"]
] // $D = done $N = no 2nd option

// update function:
function update() {
    $("#question").html(questions[current][0]);
    $("#o1").html("");
    $("#i1").val("");
    
    if (questions[current][1] === "$D") {
        $("#i1").remove();
        $("#check").remove();
        if ((Math.round((grade / questions.length)) * 100) == 100) {
            $("#score").css("color": "#5cb85c");
            $("#score").html("Grade: 100!!! Great Job! You mastered this concept! Hooray!");
        }
    } else {
        $("#i1").show();
        $("#check").show();
    }
}

function scoreUpdate() {
    $("#score").html("Grade: " + Math.round((grade / questions.length) * 100) + "% <br> Score: " + score);
}

function wrongUpdate() {
    $("#i1").show();
    $("#check").show();
    $("#i1").val("");
    $("#o1").html("");
    
}

// function that checks if the answer corrects
function check() {
    let answer = $("#i1").val();
    if ((answer == questions[current][1]) || (answer == questions[current][2] && questions[current][2] != "$N")) {
        // CORRECT!
        $("#o1").html("<h2 id='correct'>Correct</h2>");
        // add/check score and grade
        score += 5;
        grade += 1;
        console.log("correct");
        current += 1;
        // makes it so you don't see the button, text value
        $("#i1").hide();
        $("#check").hide();
        // update everything
        scoreUpdate()
        setTimeout(update, 2000);
    } else if (answer == "$N") {
        //  Cheat detector, no you
        $("#o1").html("<h2 id='wrong'>nice try buddy</h2>");
        score -= 100000;
    } else {
        // WRONG :(
        $("#o1").html("<h2 id='wrong'>Wrong, try again!</h2>")
        console.log("no correct");
        $("#i1").hide();
        $("#check").hide();
        score -= 2
        scoreUpdate()
        setTimeout(wrongUpdate, 2000);
    }
    console.log(questions[current][1]);
}

$("#i1").hide();
$("#check").hide();
setTimeout(update, 500)
