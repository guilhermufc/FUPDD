let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let totalFigurinhas = parseInt(input());
input();
let figurinhas = input().trim().split(' ').map(Number);

let figurinhasContadas = new Map<number, number>();
for (let figura of figurinhas) {
    figurinhasContadas.set(figura, (figurinhasContadas.get(figura) || 0) + 1);
}

let repetidas: number[] = [];
for (let [figura, count] of figurinhasContadas.entries()) {
    for (let i = 1; i < count; i++) {
        repetidas.push(figura);
    }
}

let faltando: number[] = [];
for (let i = 1; i <= totalFigurinhas; i++) {
    if (!figurinhasContadas.has(i)) {
        faltando.push(i);
    }
}

write(repetidas.length > 0 ? repetidas.join(' ') : 'N');
write(faltando.length > 0 ? faltando.join(' ') : 'N');
