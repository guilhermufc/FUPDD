let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n") => process.stdout.write("" + text + end);
export {};

let N = parseInt(input().trim());
let D = parseInt(input().trim());
let A = parseInt(input().trim());

// Calcular a diferença direta e ajustar para o movimento circular
let moves = (D - A + N) % N;

write(`${moves}`);
