let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export {};

let n = Number(input());
let somaSoldados = 0;
let somaRebeldes = 0;

for (let i = 0; i < n; i++) {
    let valor = Number(input());
    if (valor % 2 === 0) {
        somaRebeldes += valor;
    } else {
        somaSoldados += valor;
    }
}

if (somaSoldados > somaRebeldes) {
    write("soldados");
} else if (somaRebeldes > somaSoldados) {
    write("rebeldes");
} else {
    write("empate");
}
