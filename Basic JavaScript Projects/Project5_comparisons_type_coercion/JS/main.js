document.write(typeof true);

function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0;
    document.getElementById("Test01").innerHTML = isNaN('This is a string');
    document.getElementById("Test02").innerHTML = isNaN('007');
}

document.write(2E310);
document.write(-3E310);
document.write(12 < 4);
document.write(17 > 6);
console.log(2 + 2);
document.write(12 == 12);
document.write(12 + 8 == 21);

X = 14;
Y = 14;
document.write(X === Y);

A = 33;
Z = "8";
document.write(A === Z);

D = 4;
E = "4";
document.write(D === E);

B = "Apples";
C = "Oranges";
document.write(B === C);

document.write(8 > 1 && 17 < 19);
document.write(8 > 1 && 17 > 19);
document.write(8 > 14 || 14 < 20);
document.write(9 > 10 || 10 > 12);

function not_Function() {
    document.getElementById("Not").innerHTML = !(11 > 9);
}

function notFunction() {
    document.getElementById("Not01").innerHTML = !(5 > 14);
}