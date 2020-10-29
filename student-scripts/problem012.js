function objectsDiff(a, b){
    let firstArgs = Object.getOwnPropertyNames(a);
    let secondArgs = Object.getOwnPropertyNames(b);
    return firstArgs.filter(x => !secondArgs.includes(x)).concat(secondArgs.filter(x => !firstArgs.includes(x)));
}
