let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export {};

let numDias = Number(input());

let somaCalorias = 0;

for (let i = 0; i < numDias; i++) {
    somaCalorias += Number(input());
}

let mediaCalorias = numDias > 0 ? somaCalorias / numDias : 0;

write(mediaCalorias.toFixed(1));
