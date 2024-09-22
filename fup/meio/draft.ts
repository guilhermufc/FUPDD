let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let a = parseInt(input(), 10);
let b = parseInt(input(), 10);
let c = parseInt(input(), 10);

let medio: number;

if ((a > b && a < c) || (a < b && a > c)) {
    medio = a;
} else if ((b > a && b < c) || (b < a && b > c)) {
    medio = b;
} else {
    medio = c;
}

write(medio);
