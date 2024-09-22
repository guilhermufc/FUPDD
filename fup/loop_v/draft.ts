import * as fs from 'fs';

let input = fs.readFileSync(0, 'utf8').trim().split(' ');
let A = parseInt(input[0]);
let B = parseInt(input[1]);

let result: number[] = [];

for (let i = A; i < B; i++) {
    if (i % 2 === 0) {
        continue; // Pular números pares
    }
    result.push(i);
}

console.log(`[ ${result.join(' ')} ]`);
