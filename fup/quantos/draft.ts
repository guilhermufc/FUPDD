let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let a = Number(input());
let b = Number(input());
let c = Number(input());

if (a === b && b === c) {
    write(3);
} else if (a === b || a === c || b === c) {
    write(2);
} else {
    write(0);
}
