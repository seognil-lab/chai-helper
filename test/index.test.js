const {
    checkFit,
    checkFitApprox,
    checkEqual,
    checkEqualApprox,
    checkError,
    VOID,
    ANY,
} = require('../dist');

describe('simple test for api call', () => {
    it('wont crash', () => {
        checkFit({ a: 2 }, { a: ANY, d: VOID });
        checkFitApprox({ a: 0.1 + 0.2 }, { a: 0.3, d: VOID }, true);
        checkFitApprox({ a: 0.1 + 0.2 }, { a: 1 }, false);
        checkEqual([2], [2], true);
        checkEqual([2], [3], false);
        checkEqualApprox([0.1 + 0.2], [0.3], true);
        checkEqualApprox([0.1 + 0.2], [1], false);
    });

    it('should throw', () => {
        checkError(() => checkFitApprox({ a: 0.1 + 0.2 }, { a: 0.3 }, false));
    });
});
