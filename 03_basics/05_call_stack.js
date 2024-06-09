function one() {
    console.log("One");
    two();
}

function two() {
    console.log("Two");
    three();
}

function three() {
    console.log("Three");
}

one();//One Two Three
two();//Two Three
three();//Three