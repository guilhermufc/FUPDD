let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n") => process.stdout.write("" + text + end);
export {};

let N = parseInt(input().trim());
let X = parseInt(input().trim());
let Y = parseInt(input().trim());
let C = input().trim();
let S = parseInt(input().trim());

if (C === 'R') {
    X = (X + S) % N;
} else if (C === 'L') {
    X = (X - S + N) % N;
} else if (C === 'U') {
    Y = (Y - S + N) % N;
} else if (C === 'D') {
    Y = (Y + S) % N;
}

// Ajuste para garantir que X e Y estejam dentro do intervalo válido
X = (X + N) % N;
Y = (Y + N) % N;

write(`${X} ${Y}`);
