let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n") => process.stdout.write("" + text + end);
export {};

let wifi = parseInt(input().trim(), 10);
let login = parseInt(input().trim(), 10);
let admin = parseInt(input().trim(), 10);

if (wifi === 0) {
    write("you must connect to wifi");
} else if (login === 0) {
    write("you need to login first");
} else if (admin === 0) {
    write("you must to login as admin");
} else {
    write("done");
}
