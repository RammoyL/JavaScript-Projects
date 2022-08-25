function my_Dictionary() { //function name
    var Car = { //Here is the class and the KVP's are below
        Maker: "Honda", //maker of the class
        Color: "Steel Gray", //color os the class
        Year: "2019", //model year of the class
        Model: "Civic"

    };
    delete Car.Model; //deleting the car model
    document.getElementById("Dictionary").innerHTML = Car.Model;
}