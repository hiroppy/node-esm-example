import './esm/esm.js';
import './esm/cjs/cjs.js';
import './esm/cjs/cjs/cjs.js';

console.log(`name: type.js module-type: ${typeof module !== 'undefined' ? 'cjs' : 'esm'}`);