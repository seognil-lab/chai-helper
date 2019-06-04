import { ANY, VOID, deepIncludePartial } from 'deep-include-partial';

import { assert } from 'chai';
import { isEqual } from 'lodash/fp';
import isEqualApprox from 'is-equal-approx';

const errOf = (data, comp, shouldPass, name) => `

Check your source code or test,
It Should${shouldPass ? ' ' : ' NOT '}pass the '${name}' function ~
    -------- your data:
${JSON.stringify(data)}
    -------- compared data:
${JSON.stringify(comp)}
`;

const checkFit = (data, comp, shouldPass = true) =>
    assert(
        deepIncludePartial(data, comp) === shouldPass,
        errOf(data, comp, shouldPass, 'checkFit'),
    );

const checkFitApprox = (data, comp, shouldPass = true, delta) =>
    assert(
        deepIncludePartial(data, comp, (a, b) => isEqualApprox(a, b, delta)) === shouldPass,
        errOf(data, comp, shouldPass, 'checkFitApprox'),
    );

const checkEqual = (data, comp, shouldPass = true) =>
    assert(isEqual(data, comp) === shouldPass, errOf(data, comp, shouldPass, 'checkEqual'));

const checkEqualApprox = (data, comp, shouldPass = true, delta) =>
    assert(
        isEqualApprox(data, comp, delta) === shouldPass,
        errOf(data, comp, shouldPass, 'checkEqualApprox'),
    );

const checkError = assert.throws;

export { checkFit, checkFitApprox, checkEqual, checkEqualApprox, checkError, VOID, ANY };
