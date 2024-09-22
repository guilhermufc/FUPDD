let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let linha1 = input().trim().split(' ').map(Number);
let linha2 = input().trim().split(' ').map(Number);

let n1 = linha1[0];
let vetor1 = linha1.slice(1, n1 + 1);

let n2 = linha2[0];
let vetor2 = linha2.slice(1, n2 + 1);

let contido = vetor1.every(elemento => vetor2.includes(elemento));

write(contido ? "sim" : "nao");
