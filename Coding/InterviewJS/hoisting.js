const hoisting = () => {
    console.log(a);

    var a = 10
}

hoisting();


const hoistingThree = () => {
    console.log(a, b, c);

    const a = 10;
    let b = 20;
    var c = 30
}