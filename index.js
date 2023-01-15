let current = 0;
let score = 0;
let answer = null;
let questions = [
    ["Solve 2x + 3 > 13.", "x>5", "$N"],
    ["Solve |3x-5| = 3 for either value.","x=8/3", "x=2/3"],
    ["Write 5 < x+2 < 7 in set-builder form. Simplify.","{x|3<x<5}", "$N"],
    ["Write 3 < x < 5 in interval notation.", "(3,5)", "$N"],
    ["Is 3x^2 + 3(x-5) = 2x^2 -17 + x^2 - x/217 nonlinear? Y/N", "N", "$N"],
    ["Solve -3x - 5<10", "x>-3", "$N"],
    ["There is correlation between forest fires and fortnite players. Is there likely causation? Y/N", "N","$N"],
    ["If you put $6000 into a bank account with 5% interest for 25 years, how much do you have now?", "8250", "$N"],
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
    } else {
        $("#i1").show();
        $("#check").show();
    }
}

function scoreUpdate() {
    $("#score").html(score);
    if (current * 5 === score) {
        $("#score").css("color", "#8EFADA");
    } else {
        $("#score").css("color", "#FFFFFF")
    }
}

function wrongUpdate() {
    $("#i1").show();
    $("#check").show();
    $("#i1").val("");
    $("#o1").html("");
}

// function that checks if the answer corrects
function check() {
    answer = $("#i1").val();
    answer = answer.replace(/\s/g, "");
    console.log(answer);
    if ((answer == questions[current][1]) || (answer == questions[current][2] && questions[current][2] != "$N")) {
        // CORRECT!
        $("#o1").html("<h2 id='correct'>Correct!</h2>");
        score += 5;
        console.log("correct");
        current += 1;
        // makes it so you don't see the button, text value
        $("#i1").hide();
        $("#check").hide();
        scoreUpdate()
        setTimeout(update, 2000);
    } else if (answer == "$N") {
        // Cheat detector, no you
        $("#o1").html("<h2 id='wrong'>nice try buddy.</h2>");
        score -= 100000;
    } else {
        // WRONG :(
        $("#o1").html("<h2 id='wrong'>Wrong, try again!</h2>")
        score -= 2;
        console.log("no correct");
        $("#i1").hide();
        $("#check").hide();
        scoreUpdate()
        setTimeout(wrongUpdate, 2000);
    }
}

function ifEnterCheck(key) {
    if (key.code === "Enter" && questions[current][1] != "$D") {
        check();
    }
}

$("#i1").hide();
$("#check").hide();
setTimeout(update, 500);

document.addEventListener("keydown", ifEnterCheck);
