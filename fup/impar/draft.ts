let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n") => process.stdout.write("" + text + end);
export {};

let P = Number(input());
let D1 = Number(input());
let D2 = Number(input());

let soma = D1 + D2;
let resultado = soma % 2 === 0 ? (P === 0 ? 0 : 1) : (P === 0 ? 1 : 0);

write(resultado);
