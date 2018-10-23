let _correct = 0;
let _failed = 0;
let _failedTests = [];
const test = (id, test) => { if (test) { _correct++; } else { _failed++; _failedTests.push(id); }; };
test(1, triangleArea(3, 4, 5) === 6);
test(2, triangleArea(3, 3, 3) === 3.9);
test(3, triangleArea(3, 6, 7) === 8.94);
test(4, triangleArea(3, 4, 10) === -1);
test(5, triangleArea(3, 4, -5) === -1);
test(6, triangleArea(3, 4, 0) === -1);
test(7, triangleArea(5, 5, 8) === 12); //t
[_correct, _failed, _failedTests];