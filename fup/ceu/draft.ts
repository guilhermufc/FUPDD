let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n") => process.stdout.write("" + text + end);
export {};

import * as fs from 'fs';

let numeroPedra = parseInt(input().trim());

// Definir explicitamente o tipo da lista como string[]
let lista: string[] = [];
for (let i = 0; i < 10; i++) {
    if (i === numeroPedra) {
        continue;
    }
    lista.push(i.toString());
}

if (numeroPedra !== 10) {
    lista.push('ceu');
}

let resultado = `[ ${lista.join(' ')} ]`;
write(resultado);
