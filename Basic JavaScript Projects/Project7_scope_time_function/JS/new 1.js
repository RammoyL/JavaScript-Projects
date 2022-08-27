function Name_Function() {
    Pets = document.getElementById("Enter").value;
    if (Pets >= 1) {
        Say = "Is it a cat or dog?";
    }
    else {
        Say = "You dont own any pets?";
    }
    document.getElementsById("How_many_pets?").innerHTML = Say;
}