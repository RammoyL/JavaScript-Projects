function Vote_Function() { //This is the vote function
    var Age, Can_vote; //assigning the variable
    Age = document.getElementById("Age") .value; //grabs Vote Id from HTML
    Can_vote = (Age < 18) ? "You are too young":"You are old enough"; //output using TERNARY OPERATOR to meet voting requirement
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Phone(Make, Model, Color) {
    this.Phone_Make = Make;
    this.Phone_Model = Model;
    this.Phone_Color = Color;
}
var Charlie = new Phone("Google Pixel", "3rd Gen", "Black");
function my_Function() {
    document.getElementById("New_and_This").innerHTML = "Charlies owns a " + Charlie.Phone_Color + "-colored " + Charlie.Phone_Make +
        " it is a " + Charlie.Phone_Model;
}