let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export {};

function imprimeVetor(vet: number[]): void {
    write("[", "");
    for (let i = 0; i < vet.length; i++) {
        if (i > 0) {
            write(", ", "");
        }
        write(vet[i], "");
    }
    write("]");
}

let n = Number(input());
let vetor = n > 0 ? input().split(" ").map(Number) : [];

imprimeVetor(vetor);
