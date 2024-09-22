let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n") => process.stdout.write("" + text + end);
export {};

let n = Number(input());

let divisor = 2;
let fatores: [number, number][] = [];

while (n > 1) {
    let count = 0;
    while (n % divisor === 0) {
        n = Math.floor(n / divisor);
        count++;
    }
    if (count > 0) {
        fatores.push([divisor, count]);
    }
    divisor++;
}

for (let [fator, count] of fatores) {
    write(`${fator} ${count}`);
}
