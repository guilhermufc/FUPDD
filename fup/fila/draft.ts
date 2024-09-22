let _cin_: string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch (e) {}
let input = (): string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export {};

let n = Number(input());
let fila = input().split(' ').map(Number);

let impares: number[] = [];
let pares: number[] = [];

for (let num of fila) {
    if (num === 0) {
 
        continue;
    }
    if (num % 2 === 0) {
        pares.push(num);
    } else {
        impares.push(num);
    }
}


const formatArray = (arr: number[]): string => arr.length > 0 ? `[ ${arr.join(' ')} ]` : `[ ]`;

write(formatArray(impares));
write(formatArray(pares));
