let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let comp1 = +input();
let larg1 = +input();
let comp2 = +input();
let larg2 = +input();

let area1 = comp1 * larg1;
let area2 = comp2 * larg2;

if (area2 > area1) {
    write(area2)
} else {
    write(area1)
}