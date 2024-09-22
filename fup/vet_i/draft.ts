let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export {};

let n = Number(input());
let vetor: number[] = [];

for (let i = 0; i < n; i++) {
    let elemento = Number(input());
    vetor.push(elemento);
}

for (let i = 0; i < vetor.length; i++) {
    write(vetor[i]);
}
