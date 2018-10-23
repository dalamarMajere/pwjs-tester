let _correct = 0;
let _failed = 0;
let _failedTests = [];
const test = (id, test) => { if (test) { _correct++; } else { _failed++; _failedTests.push(id); }; };
test(1, stringRotate('UniwersytetŚląski', 0) === 'UniwersytetŚląski');
test(2, stringRotate('UniwersytetŚląski', 1) === 'niwersytetŚląskiU');
test(3, stringRotate('UniwersytetŚląski', 2) === 'iwersytetŚląskiUn');
test(4, stringRotate('UniwersytetŚląski', -1) === '');
test(5, stringRotate('UniwersytetŚląski', 'a') === '');
test(6, stringRotate('ab', 0) === 'ab'); // t
test(7, stringRotate('ab', 1) === 'ba'); // t
[_correct, _failed, _failedTests];