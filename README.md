## Confirm package.json "type" field

Each file's module type depends on the closest parent's package.json.

```sh
.
├── esm
│   ├── cjs
│   │   ├── cjs
│   │   │   └── cjs.js   # ↓
│   │   ├── cjs.js       # ↓
│   │   └── package.json # type: commonjs
│   └── esm.js           # ↓
├── package.json         # type: module
└── type.js              # ↑
```

```javascript
console.log(`name: type.js module-type: ${typeof module !== 'undefined' ? 'cjs' : 'esm'}`);
```

```console
$ node --experimental-modules type.js
name: esm/esm.js          module-type: esm
name: esm/cjs/cjs.js      module-type: cjs
name: esm/cjs/cjs/cjs.js  module-type: cjs
name: type.js             module-type: esm
```