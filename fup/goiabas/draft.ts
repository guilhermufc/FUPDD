let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n") => process.stdout.write("" + text + end);
export {};

let C = parseInt(input().trim());
let bananas = parseInt(input().trim());
let goiabas = parseInt(input().trim());
let mangas = parseInt(input().trim());

let totalFruits = bananas + goiabas + mangas;
let trips = Math.ceil(totalFruits / C);

write(trips);
