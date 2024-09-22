let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let num1 = parseInt(input().trim(), 10);
let num2 = parseInt(input().trim(), 10);

let maior = Math.max(num1, num2);

write(maior.toString());
