function isLeapYear(a) {
    return typeof a == "number" && ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0);
}