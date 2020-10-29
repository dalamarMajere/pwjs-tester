function getTotalNumberOfNewYaersEveSundays(a, b) {

    let ans = 0;
    if (check(a, b)) {
        for (let i = a; i <= b; i++) {
            let year = new Date(i, 0, 1);
            if (year.getDay() == 0) ans++;
        }
    }
    return ans;
}

function check(a, b) {
    return typeof a == typeof b && typeof a == "number" && a >= 0 && b >= 0;
}
