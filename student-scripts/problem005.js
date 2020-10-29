function strangeSum(a, b) {
    let ans = null;
    if (check(a, b)) {
        if (a == b) ans = 6 * a;
        else ans = a + b;
    }
    return ans;
}

function check(a, b) {
    return !isNaN(a) && !isNaN(b) && a == parseInt(a) && b == parseInt(b);
}