import * as fs from 'fs';

let input = fs.readFileSync(0, 'utf8').trim().split(' ');
let A = parseInt(input[0]);
let B = parseInt(input[1]);

let result = [];
for (let i = A; i < B; i++) {
    result.push(i);
}

console.log(`[ ${result.join(' ')} ]`);
