if (12 != 9) {
    document.write("12 does not equal 9");
}

function get_Date() {
    if (new Date().getHours() < 12) {
        document.getElementById("Greeting").innerHTML = "How's everything?";
    }
}

var X = 14
function add_numbers_1() {
    document.write(9 + X + "<br>");
}
function add_numbers_2() {
    document.write(X + 61);
}
add_numbers_1();
add_numbers_2();


function divide_numbers_1() {
    var Y = 10;
    console.log(20 / Y );
}
function divide_numbers_2() {
    console.log(Y / 6);
}
divide_numbers_1();
divide_numbers_2();

function Name_Function() {
    Pets = document.getElementById("Pets").value;
    if (Pets >= 1) {
        Say = "Do you own cats, dogs or both?";
    }
    else {
        Say = "You dont own any pets?";
    }
    document.getElementById("How_many_pets?").innerHTML = Say;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}