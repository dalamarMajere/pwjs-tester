function divisible(a) {
    for (let i of arguments)
        if (a % i != 0) return false;
    return true;
}