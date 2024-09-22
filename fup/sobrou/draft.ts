let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtd1 = parseInt(input());
let qtd2 = parseInt(input());
let qtd3 = parseInt(input());

let preco1 = parseFloat(input());
let preco2 = parseFloat(input());
let preco3 = parseFloat(input());

let dinheiro = parseFloat(input());

let total = qtd1 * preco1 + qtd2 * preco2 + qtd3 * preco3;
let sobra = dinheiro - total;

write(sobra.toFixed(2));
