let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let nome = input().trim();
let idade = parseInt(input(), 10);

let classificacao: string;

if (idade < 12) {
    classificacao = "crianca";
} else if (idade < 18) {
    classificacao = "jovem";
} else if (idade < 65) {
    classificacao = "adulto";
} else if (idade < 1000) {
    classificacao = "idoso";
} else {
    classificacao = "mumia";
}

write(`${nome} eh ${classificacao}`);
