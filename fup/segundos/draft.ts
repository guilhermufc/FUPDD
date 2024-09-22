let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let segundos = parseInt(input());

let horas = Math.floor(segundos / 3600);
segundos %= 3600;

let minutos = Math.floor(segundos / 60);
segundos %= 60;

write(`${horas}:${minutos}:${segundos}`);
