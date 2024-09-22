let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n") => process.stdout.write("" + text + end);
export {};

let B = parseInt(input());
let T = parseInt(input());

let noteWidth = 160;
let noteHeight = 70;
let totalArea = noteWidth * noteHeight;
let halfArea = totalArea / 2;


let area1 = ((B + T) / 2) * noteHeight;


let area2 = totalArea - area1;

if (area1 > halfArea) {
    write(1);
} else if (area2 > halfArea) {
    write(2);
} else {
    write(0);
}
