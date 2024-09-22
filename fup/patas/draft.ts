let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end: string = "\n") => process.stdout.write("" + text + end);
export {};

let chuteChico = Number(input());
let chuteCebolinha = Number(input());
let numAnimais = Number(input());

let patasTotal = 0;
for (let i = 0; i < numAnimais; i++) {
    let animal = input();
    if (animal === 'v' || animal === 'c') {
        patasTotal += 4;
    } else if (animal === 'g') {
        patasTotal += 2;
    }
}

write(patasTotal);

if (Math.abs(patasTotal - chuteChico) < Math.abs(patasTotal - chuteCebolinha)) {
    write("Chico Bento");
} else if (Math.abs(patasTotal - chuteCebolinha) < Math.abs(patasTotal - chuteChico)) {
    write("Cebolinha");
} else {
    write("empate");
}
