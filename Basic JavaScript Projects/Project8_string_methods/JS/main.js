function full_Sentence() {
    var part_1 = "This is ";
    var part_2 = "how to make ";
    var part_3 = "a complete sentence.";
    var whole_sentence = part_1.concat(part_2, part_3); //this method concatenates the strings values of the variables
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //this method returns the index of the given values in the function bracets
    var Sentence = "All work and no means your lunch break is coming soon.";
    var Section = Sentence.slice(0, 4); //here we call the function to return whatever is between index 0-4 of the string
    document.getElementById("Slice").innerHTML = Section;
}

function upperCase() { //this function capitalizes the the letters in a string
    var String = "This is uppercase."; //this is the chosen string we will make all caps
    var reply = String.toUpperCase(); //calling the function to capitalize the string variable
    document.getElementById("uppercase").innerHTML = reply;
}

function search_Method() { //this method returns the index of the first match
    var text = "Thank You Mrs. Green!";
    var position = text.search("Green"); //We chose 'Green' in the search method to get its index
    document.getElementById("Search").innerHTML = position;
}

function string_Method() { //turns values into string
    var X = 45; //integar 45 will be turned into a string with this method
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() { //this method gives you a more percise value to floats
    var X = 24391.24980393213;
    document.getElementById("Precision").innerHTML = X.toPrecision(8);
}

function fixed_Method() { //this method returns the the nearst integar of a float
    var Y = 8.6345664; //since the number behind the decimal is 5 => it will round up
    let n = Y.toFixed(); //caling the function
    document.getElementById("Fixed").innerHTML = n;
}

function value_Of() { //this method returns the primitive value of a string.
    let text = "This is JavaScript."; //herer the string will be 'This is JavaScript'
    let result = text.valueOf(); //executing the function
    document.getElementById("Value").innerHTML = result; //pulling ID from HTML to print the result of function
}