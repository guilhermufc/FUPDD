let _cin_: string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = (): string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export {};

function main() {
    let text = input();
    let startIndex = parseInt(input());
    let length = parseInt(input());
    
    if (startIndex < 0 || startIndex >= text.length || length < 0) {
        write("");
        return;
    }
    
    let substring = "";
    for (let i = startIndex; i < startIndex + length && i < text.length; i++) {
        substring += text[i];
    }
    
    write(substring);
}

main();
