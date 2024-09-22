let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n") => process.stdout.write("" + text + end);
export {};

function verificarOrdenacaoLexicografica(frase: string): string {
    const palavras = frase.split(' ');
    
    for (let i = 0; i < palavras.length - 1; i++) {
        if (palavras[i] > palavras[i + 1]) {
            return "nao";
        }
    }
    
    return "sim";
}

let frase = input();
write(verificarOrdenacaoLexicografica(frase));
