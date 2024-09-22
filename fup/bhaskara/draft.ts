let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n") => process.stdout.write("" + text + end);
export {};

let A = parseFloat(input().trim());
let B = parseFloat(input().trim());
let C = parseFloat(input().trim());

let delta = B * B - 4 * A * C;

const formatNumber = (num: number) => num.toFixed(2);

if (delta > 0) {
    let sqrtDelta = Math.sqrt(delta);
    let x1 = (-B + sqrtDelta) / (2 * A);
    let x2 = (-B - sqrtDelta) / (2 * A);
    
    if (x1 > x2) {
        write(formatNumber(x1));
        write(formatNumber(x2));
    } else {
        write(formatNumber(x2));
        write(formatNumber(x1));
    }
} else if (delta === 0) {
    let x = -B / (2 * A);
    write(formatNumber(x));
} else {
    write("nao ha raiz real");
}
