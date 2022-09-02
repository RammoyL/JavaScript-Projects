function Animal_Function() {
    var Animal_Output;
    var Animal = document.getElementById("Animal_Input").value;
    var Animal_String = " is a cool animal!";
    switch (Animal) {
        case "Wolf":
            Animal_Output = "Wolf" + Animal_String;
            break;
        case "Giraffe":
            Animal_Output = "Giraffe" + Animal_String;
            break;
        case "Lion":
            Animal_Output = "Lion" + Animal_String;
            break;
        case "Tiger":
            Animal_Output = "Tiger" + Animal_String;
            break;
        case "Whale":
            Animal_Output = "Whale" + Animal_String;
            break;
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
            break;
        case "Dolphin":
            Animal_Output = "Dolphin" + Animal_String;
            break;
        case "Elephant":
            Animal_Output = "Elephant" + Animal_String;
            break;
        default:
            Animal_Output = "Please enter an animal exactly from the list above.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.font = "42px Times New Roman";
context.strokeText("Focus", 75, 125);

var canvas = document.getElementById("gradientCan");
var context = canvas.getContext("2d");
var my_gradient = context.createLinearGradient(0, 0, 170, 0);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(0.5, "blue");
my_gradient.addColorStop(1, "white");
context.fillStyle = my_gradient;
context.fillRect(0, 0, 200, 200);