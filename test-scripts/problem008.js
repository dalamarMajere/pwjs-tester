let _correct = 0;
let _failed = 0;
let _failedTests = [];
const test = (id, test) => { if (test) { _correct++; } else { _failed++; _failedTests.push(id); }; };
test(1, magicSequence(1) === -1);
test(2, magicSequence(2) === -2);
test(3, magicSequence(3) === -2);
test(4, magicSequence(4) === -2);
test(5, magicSequence(5) === -4);
test(6, magicSequence(6) === -12);
test(7, magicSequence(15) === -958003200);
test(8, magicSequence(14) === -79833600); // t
[_correct, _failed, _failedTests];
