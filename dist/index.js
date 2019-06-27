'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var deepIncludePartial = require('deep-include-partial');
var chai = require('chai');
var fp = require('lodash/fp');
var isEqualApprox = _interopDefault(require('is-equal-approx'));

const errOf = (data, comp, shouldPass, name) => `

Check your source code or test,
It Should${shouldPass ? ' ' : ' NOT '}pass the '${name}' function ~
    -------- your data:
${JSON.stringify(data)}
    -------- compared data:
${JSON.stringify(comp)}
`;

const checkFit = (data, comp, shouldPass = true) => chai.assert(deepIncludePartial.deepIncludePartial(data, comp) === shouldPass, errOf(data, comp, shouldPass, 'checkFit'));

const checkFitApprox = (data, comp, shouldPass = true, delta) => chai.assert(deepIncludePartial.deepIncludePartial(data, comp, (a, b) => isEqualApprox(a, b, delta)) === shouldPass, errOf(data, comp, shouldPass, 'checkFitApprox'));

const checkEqual = (data, comp, shouldPass = true) => chai.assert(fp.isEqual(data, comp) === shouldPass, errOf(data, comp, shouldPass, 'checkEqual'));

const checkEqualApprox = (data, comp, shouldPass = true, delta) => chai.assert(isEqualApprox(data, comp, delta) === shouldPass, errOf(data, comp, shouldPass, 'checkEqualApprox'));

const checkError = chai.assert.throws;

Object.defineProperty(exports, 'ANY', {
    enumerable: true,
    get: function () {
        return deepIncludePartial.ANY;
    }
});
Object.defineProperty(exports, 'VOID', {
    enumerable: true,
    get: function () {
        return deepIncludePartial.VOID;
    }
});
exports.checkEqual = checkEqual;
exports.checkEqualApprox = checkEqualApprox;
exports.checkError = checkError;
exports.checkFit = checkFit;
exports.checkFitApprox = checkFitApprox;
//# sourceMappingURL=index.js.map
