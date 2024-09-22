let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n") => process.stdout.write("" + text + end);
export {};

function fazerLiaison(texto: string): string {
    const vogais = 'aeiou';
    const palavras = texto.split(' ');
    let resultado = palavras[0];

    for (let i = 1; i < palavras.length; i++) {
        const anterior = resultado[resultado.length - 1]; 
        const atual = palavras[i][0]; 
        
        // Se ambos forem vogais, junta as palavras
        if (vogais.includes(anterior) && vogais.includes(atual)) {
            resultado += palavras[i].substring(1);
        } else {
            resultado += ' ' + palavras[i];
        }
    }

    return resultado;
}


let texto = input();

write(fazerLiaison(texto));
