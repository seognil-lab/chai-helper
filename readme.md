## ⭐️ What

A bundle of suger functions of chai the assertion library.

## 📦 Getting Started

**Installation**

```shell
npm install –-save-dev @seognil-lab/chai-helper
# or
yarn add -D @seognil-lab/chai-helper
```

**Usage**

`checkFitApprox(data, comp, [shouldPass = true], [delta])`

```javascript
// `test.js` which would be called by `mocha`

const {
    checkFit,
    checkFitApprox,
    checkEqual,
    checkEqualApprox,
    checkError,
    VOID,
    ANY,
} = require('@seognil-lab/chai-helper');

describe('simple test for api call', () => {
    it('wont crash', () => {
        checkFitApprox({ a: 0.1 + 0.2 }, { a: 0.3, d: VOID }, true);
    });
});
```

---

## 💡 Why

Make my life easier :)

## 📖 Description

**API**

-   checkFit
-   checkFitApprox
-   checkEqual
-   checkEqualApprox
-   checkError

**CheckFit Helper from deepIncludePartial**

-   VOID
-   ANY

---

## ⌨️ Contribution

```shell
# git clone and cd into it
git clone https://github.com/seognil-lab/chai-helper

# npm command
npm i
npm run test:watch
```

---

## 📜 References

https://github.com/seognil-lab/la-starter-cli  
https://github.com/seognil-lab/deep-include-partial  
https://github.com/seognil-lab/is-equal-approx

---

## 🕗 TODO
