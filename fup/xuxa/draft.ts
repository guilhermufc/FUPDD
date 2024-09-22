let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

// Função principal
function main() {
    // Ler a string de entrada
    let inputString = input();
    
    // Inverter a string
    let invertedString = inputString.split("").reverse().join("");
    
    // Exibir a string invertida
    write(invertedString);
}

// Chamar a função principal
main();
