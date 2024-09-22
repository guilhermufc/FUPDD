let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let numeroCompetidores = parseInt(input());
let indiceVencedor = -1;
let menorPontuacao = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < numeroCompetidores; i++) {
    let [pedraA, pedraB] = input().split(' ').map(Number);
    
    if (pedraA >= 10 && pedraB >= 10) {
        let pontuacao = Math.abs(pedraA - pedraB);
        
        if (pontuacao < menorPontuacao || (pontuacao === menorPontuacao && i < indiceVencedor)) {
            menorPontuacao = pontuacao;
            indiceVencedor = i;
        }
    }
}

if (indiceVencedor === -1) {
    write("sem ganhador");
} else {
    write(indiceVencedor);
}
