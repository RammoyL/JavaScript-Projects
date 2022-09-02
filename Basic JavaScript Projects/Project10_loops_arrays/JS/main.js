function Call_Loop() { //function that calls the loop
    var Digit = "";
    var X = 1; //calling variable X to equal 1
    while (X < 11) {
        Digit += "<br>" + X;
        X++; //this part of the function increments X by 1
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function length_Function() { //string length function
    let text = "What is the length of this string?";
    let length = text.length; //
    document.getElementById("string_length").innerHTML = length; //this calls to return the length of the chosen string
}

var Instruments = ["Oboe", "Guitar", "Piano", "Drums", "Violin", "Saxophone", "Tuba"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function Goku_techniques() {
    var Goku_Moves = [];
    Goku_Moves[0] = "Kamehameha";
    Goku_Moves[1] = "Kaio Ken";
    Goku_Moves[2] = "Spirit Bomb";
    Goku_Moves[3] = "Dragon Fist";
    Goku_Moves[4] = "Instant Teleportation";
    document.getElementById("Goku").innerHTML = "The technique Goku will use is " + Goku_Moves[4] + ".";
}

function constant_function() {
    const Musical_Instrument = { type: "guitar", brand: "Fender", color: "blue" };
    Musical_Instrument.color = "white";
    Musical_Instrument.price = "$925";
    Musical_Instrument.brand = "Fender";
    document.getElementById("Constant").innerHTML = "The cost of this " + Musical_Instrument.type +
        " is " + Musical_Instrument.price + ", and is manufacture by " + Musical_Instrument.brand;
}
function Cars() {
    let car = {
        make: "Aston Martin ",
        model: " DBS Coupe",
        year: "2021 ",
        color: "Matte Black ",
        description: function () {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description();
}
