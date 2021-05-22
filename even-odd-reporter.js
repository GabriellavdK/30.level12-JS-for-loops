for (nr = 0; nr <= 20; nr++) {
    let evenNumber = nr % 2;
    if (evenNumber === 1) {
        console.log(nr + " is oneven");
    } else {
        console.log(nr + " is even");
    };
};

console.log("Nummer is boven de 20")