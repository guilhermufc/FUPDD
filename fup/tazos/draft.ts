let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n = parseInt(input());
let tazos = input().trim().split(' ').map(Number);

let contagem = new Map<number, number>();
for (let tazo of tazos) {
    contagem.set(tazo, (contagem.get(tazo) || 0) + 1);
}

let maxCount = Math.max(...contagem.values());
let maisRepetidos = Array.from(contagem.entries())
    .filter(([_, count]) => count === maxCount)
    .map(([tazo]) => tazo);

write(`[ ${maisRepetidos.join(' ')} ]`);
