let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let op = input().trim();
let num = parseFloat(input());

let resultado: number;

switch (op) {
    case 'c':
        resultado = Math.ceil(num);
        break;
    case 'f':
        resultado = Math.floor(num);
        break;
    case 'r':
        resultado = Math.round(num);
        break;
    default:
        resultado = 0;
        break;
}

write(resultado);
