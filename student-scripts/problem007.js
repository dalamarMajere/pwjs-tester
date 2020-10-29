function findMax() {
    let max = arguments[0];
    for (let i of arguments)
        max = Math.max(max, i);
    return max; 
}