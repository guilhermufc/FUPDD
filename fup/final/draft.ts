let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let nota1 = parseFloat(input().trim());
let nota2 = parseFloat(input().trim());
let notaFinal = parseFloat(input().trim());

let media = (nota1 + nota2) / 2;

if (media >= 7) {
    write("aprovado");
} else if (media < 4) {
    write("reprovado");
} else {
    let mediaFinal = (media + notaFinal) / 2;
    if (mediaFinal >= 5) {
        write("aprovado na final");
    } else {
        write("reprovado na final");
    }
}
