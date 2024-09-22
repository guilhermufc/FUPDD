let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n") => process.stdout.write("" + text + end);
export {};

let salario = parseFloat(input().trim());

let aumento;
if (salario <= 1000) {
    aumento = 0.20;
} else if (salario <= 1500) {
    aumento = 0.15;
} else if (salario <= 2000) {
    aumento = 0.10;
} else {
    aumento = 0.05;
}

let novoSalario = salario * (1 + aumento);
write(`${novoSalario.toFixed(2)}`);
