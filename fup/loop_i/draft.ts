import * as fs from 'fs';

let input = fs.readFileSync(0, 'utf8').trim().split('\n');
let A = parseInt(input[0]);
let B = parseInt(input[1]);

for (let i = A; i < B; i++) {
    console.log(i);
}
