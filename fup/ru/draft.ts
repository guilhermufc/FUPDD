let _cin_: string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = (): string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export {};

function main() {
    let phrase = input().trim();
    let vowels = '';
    let consonants = '';
    
    for (let char of phrase) {
        if (char === ' ') continue;
        if ('aeiou'.includes(char)) {
            vowels += char;
        } else {
            consonants += char;
        }
    }

    write(vowels);
    write(consonants);
}

main();
