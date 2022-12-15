let current = 0;
let score = 0;
let questions = [
    ["Solve 2x + 3 > 13.", "x>5", "$N"],
    ["Solve for larger value: |3x-5| = 3","8/3", "$N"],
    ["Done!", "$D", "$N"],
] // $D = done $N = no 2nd option

// update function:
function update() {
    $("#question").html(questions[current][0]);
    $("#o1").html("")
    $("#i1").val("")
}

// function that checks if the answer corrects
function check() {
    let answer = $("#i1").val();
    if ((answer == questions[current][1]) || (answer == questions[current][2] && questions[current][2] != "$N")) {
        $("#o1").html("<h2 id='correct'>Correct</h2>");
        score += 5;
        console.log("correct");
    } else if (answer == "$N") {
        $("#o1").html("<h2 id='wrong'>nice try buddy</h2>");
        score -= 100000;
    } else {
        $("#o1").html("<h2 id='wrong'>Wrong, Try again!</h2>")
        score -= 2;
        console.log("no correct");
    }
    console.log(questions[current][1]);
    current += 1;
    setTimeout(update, 2000);
}

setTimeout(update, 1000)