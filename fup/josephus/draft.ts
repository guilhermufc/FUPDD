let _cin_ : string[] = [];
try { 
    _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); 
} catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);


function josephus(n: number, x: number): number {
    // Criando um array de jogadores (1 a N)
    let pessoas = Array.from({length: n}, (_, i) => i + 1);

    let posicao = x - 1;


    while (pessoas.length > 1) {
    
        let aSerEliminado = (posicao + 1) % pessoas.length; 
        pessoas.splice(aSerEliminado, 1); 
        
        // Atualiza a posição da espada para o próximo
        if (aSerEliminado >= pessoas.length) {
            posicao = 0; 
        } else {
            posicao = aSerEliminado; 
        }
    }

    return pessoas[0];
}

// Entrada
const n = parseInt(input());
const x = parseInt(input());

write(josephus(n, x));
