let _cin_: string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch (e) { }
let input = (): string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export {};

let A = parseInt(input());
let B = parseInt(input());

if (A > B) {
    write('invalido');
} else {
    let sum = 0;
    for (let i = A; i <= B; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    write(sum);
}
