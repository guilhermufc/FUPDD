let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let line = input().trim().split(' ');
let num1 = parseInt(line[0], 10);
let num2 = parseInt(line[1], 10);

let diferenca = num1 - num2;
let valorAbsoluto = Math.abs(diferenca);

write(valorAbsoluto.toString());
