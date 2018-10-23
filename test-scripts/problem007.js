let _correct = 0;
let _failed = 0;
let _failedTests = [];
const test = (id, test) => { if (test) { _correct++; } else { _failed++; _failedTests.push(id); }; };
test(1, findMax(4, 2, -1) === 4);
test(2, findMax(1, 2, 3) === 3);
test(3, findMax(3, 3, 3) === 3);
test(4, findMax(-1, -2, -3) === -1);
test(5, findMax(0.7, 0.5, 0.83) === 0.83);
test(6, findMax(7, 7, 7) === 7); // t
[_correct, _failed, _failedTests];