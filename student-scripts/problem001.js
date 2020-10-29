function triangleArea(a, b, c) {
    area = -1;
    if (checkData(a, b, c)) {
        const p = (a + b + c) / 2;
        area = Math.round(Math.sqrt(p * (p - a) * (p - b) * (p - c)) * 100) / 100;
    }
    return area;
}

function checkData(a, b, c)
{
    return !isNaN(a) && !isNaN(b) && !isNaN(c) && 
           a > 0 && b > 0 && c > 0 &&
           a + b > c && a + c > b && b + c > a;
}