function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition 
}

function subtraction_Function() {
    var addition = 12 - 6;
    document.getElementById("Math").innerHTML = "12 - 6 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 54 * 6;
    document.getElementById("Math").innerHTML = "54 * 6= " + simple_Math;
}

function division() {
    var division = 28 / 7;
    document.getElementById("Math").innerHTML = "28 / 7 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (4 + 7) * 6 / 9 - 2;
    document.getElementById("Math").innerHTML = "4 plus 7, multiplied by 6, divided by 9 and then subtracted by 2 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 62 % 8;
    document.getElementById("Math").innerHTML = "When you divide 62 by 8 you have remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 7;
    document.getElementById("Math").innerHTML = -x;
}

var X = 12
X++;
document.write(X);

var X = 14.55;
X--;
document.write(X);