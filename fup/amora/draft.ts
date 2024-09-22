let _cin_: string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = (): string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export {};

function main() {
    let text = input();
    let substring = input();
    
    let count = 0;
    let index = 0;

    while ((index = text.indexOf(substring, index)) !== -1) {
        count++;
        index++;
    }

    write(count);
}

main();
