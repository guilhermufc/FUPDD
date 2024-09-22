let _cin_: string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = (): string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export {};

const ledsCount = {
    '0': 6,
    '1': 2,
    '2': 5,
    '3': 5,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 3,
    '8': 7,
    '9': 6
};

function main() {
    let n = parseInt(input());
    
    for (let i = 0; i < n; i++) {
        let number = input().trim();
        let totalLeds = 0;

        for (const digit of number) {
            totalLeds += ledsCount[digit];
        }
        
        write(`${totalLeds} leds`);
    }
}

main();
