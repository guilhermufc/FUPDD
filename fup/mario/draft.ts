let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n") => process.stdout.write("" + text + end);
export {};

function desenharCenario(alturas: number[]): void {
    const alturaMaxima = Math.max(...alturas);
    const largura = alturas.length;
    let cenario: string[] = [];

    for (let i = 0; i < alturaMaxima; i++) {
        let linha = '';
        for (let j = 0; j < largura; j++) {
            if (alturas[j] >= alturaMaxima - i) {
                linha += '#';
            } else {
                linha += '_';
            }
        }
        cenario.push(linha);
    }

    for (let linha of cenario) {
        write(linha);
    }
}

let n = parseInt(input());
let alturas = input().split(' ').map(Number);
desenharCenario(alturas);
