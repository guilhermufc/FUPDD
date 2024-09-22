let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n") => process.stdout.write("" + text + end);
export {};

let C = parseInt(input().trim());
let A = parseInt(input().trim());

let maxStudentsPerTrip = C - 1;
let trips = Math.ceil(A / maxStudentsPerTrip);

write(trips);
