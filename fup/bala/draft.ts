let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let x1 = parseFloat(input());
let y1 = parseFloat(input());
let x2 = parseFloat(input());
let y2 = parseFloat(input());

let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

write(distance.toFixed(2));
