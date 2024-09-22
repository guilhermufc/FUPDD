let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let dados = input().trim().split(' ');
let A = +dados[0];
let B = +dados[1];

let resultado: number[] = [];
for (let i = A; i > B; i--) {
    resultado.push(i);
}

write(`[ ${resultado.join(' ')} ]`);
