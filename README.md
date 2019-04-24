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

```console
$ node --experimental-modules type.js
esm/esm.js esm
esm/cjs/cjs.js cjs
esm/cjs/cjs/cjs.js cjs
```