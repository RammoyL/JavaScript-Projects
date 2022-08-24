window.alert(Math.random() * 50); //window alert generating a random number between 1 & 50

function addition_Function() { //defining the type of function
    var addition = 2 + 2; //giving the function parameters
    document.getElementById("Add").innerHTML = "2 + 2 = " + addition; //calling the function to return the value
}

function subtraction_Function() {
    var Subtraction = 12 - 6;
    document.getElementById("Sub").innerHTML = "12 - 6 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 54 * 6;
    document.getElementById("Multi").innerHTML = "54 * 6 = " + simple_Math;
}

function division() {
    var simple_Math = 27 / 3;
    document.getElementById("dividing").innerHTML = "27 / 3 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (4 + 7) * 6 / 9 - 2;
    document.getElementById("More").innerHTML = "4 plus 7, multiplied by 6, divided by 9 and then subtracted by 2 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 62 % 8;  //This operator returns the remainder of 62 /8
    document.getElementById("Mod").innerHTML = "When you divide 62 by 8 you have remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 7.8;
    document.getElementById("negate").innerHTML = Math.round(-x); //Math.round rounds number to an integar instead of float 
}

var X = 12
X++;
document.write(X);

var X = 14.55;
X--;
document.write(X);