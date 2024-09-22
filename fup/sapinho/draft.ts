let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n") => process.stdout.write("" + text + end);
export {};

let profundidade = Number(input());
let salto = Number(input());
let escorregada = Number(input());

let posicao = 0;
while (true) {
  posicao += salto;
  if (posicao >= profundidade) {
    write(`${posicao - salto} saiu`);
    break;
  }
  write(`${posicao - salto} ${posicao}`);
  posicao -= escorregada;
}
