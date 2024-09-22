let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n") => process.stdout.write("" + text + end);
export {};

let A = parseInt(input().trim());
let B = parseInt(input().trim());
let C = parseInt(input().trim());
let H = parseInt(input().trim());
let L = parseInt(input().trim());

function fitsInWindow(w1, w2, h, l) {
    return (w1 <= h && w2 <= l) || (w1 <= l && w2 <= h);
}

let canFit = fitsInWindow(A, B, H, L) || fitsInWindow(A, C, H, L) ||
              fitsInWindow(B, C, H, L) || fitsInWindow(B, A, H, L) ||
              fitsInWindow(C, A, H, L) || fitsInWindow(C, B, H, L);

write(canFit ? 'S' : 'N');
