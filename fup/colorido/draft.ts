let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let N = parseInt(input());
let peInicial = input().trim();

let peEsquerdo = peInicial === 'e';
let sequencia: string[] = [];

for (let i = 0; i <= 10; i++) {
  if (i === N) continue;
  if (i === 10) {
    sequencia.push("ceu");
  } else {
    sequencia.push(i.toString() + (peEsquerdo ? "e" : "d"));
    peEsquerdo = !peEsquerdo;
  }
}

write("[ " + sequencia.join(" ") + " ]");