let _cin_: string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string = "\n") => process.stdout.write("" + text + end);

let num1 = parseInt(input());
let num2 = parseInt(input());
let num3 = parseInt(input());

let soma = num1 + num2 + num3;

write(soma);
