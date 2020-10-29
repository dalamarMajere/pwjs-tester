function stringRotate(a, b) {
    len = a.length;
    return check(a, b) ? (len < b ? a.substring(b % len) + a.substring(0, b % len) : a.substring(b) + a.substring(0, b)) : "";
}

function check(a, b) {
    return typeof b == "number" && b >= 0 && typeof a == "string";
}