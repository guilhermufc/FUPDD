let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n") => process.stdout.write("" + text + end);
export {};

import * as fs from 'fs';

let numeroAlvo = parseInt(input().trim());

for (let i = 1; i <= numeroAlvo; i += 2) {
    write(i);
}

for (let i = numeroAlvo - 1; i >= 0; i -= 2) {
    write(i);
}
