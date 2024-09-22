let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let num1 = parseInt(input().trim(), 10);
let num2 = parseInt(input().trim(), 10);
let operator = input().trim();

let result: number;

switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = Math.floor(num1 / num2);
        break;
    default:
        throw new Error('Operador desconhecido');
}

write(result);
