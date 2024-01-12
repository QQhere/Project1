function listSequencOfInteger(input) {
    let n = parseInt(input);
    const arr = [];
    let i = 100;
    while (i < 1000) {
        if ( i%n === 0 ) {
            arr.push(i);
        }
        i++;
    }
    return arr.join(" ");
}