let _cin_: string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = (): string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export {};

function main() {
    let text = input();
    let target = input();
    let replacement = input();
    
    let result = "";
    let i = 0;

    while (i < text.length) {
        if (text.slice(i, i + target.length) === target) {
            result += replacement;
            i += target.length;
        } else {
            result += text[i];
            i++;
        }
    }

    write(result);
}

main();
