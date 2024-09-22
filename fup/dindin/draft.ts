let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export {};

let n = Number(input());
let contagemDindin = { c: 0, l: 0 };
let contagemTurno = { m: 0, t: 0 };

for (let i = 0; i < n; i++) {
    let [sabor, turno] = input().split(" ");
    contagemDindin[sabor]++;
    contagemTurno[turno]++;
}

let saborMaisVendido = contagemDindin.c > contagemDindin.l ? 'c' : contagemDindin.c < contagemDindin.l ? 'l' : 'empate';
let turnoMaisVago = contagemTurno.m < contagemTurno.t ? 'm' : contagemTurno.m > contagemTurno.t ? 't' : 'empate';

write(saborMaisVendido);
write(turnoMaisVago);
