import * as fs from 'fs';

let input = fs.readFileSync(0, 'utf8').trim().split(' ');
let A = parseInt(input[0]);
let B = parseInt(input[1]);

let result: number[] = [];
let increment = A < B ? 1 : -1;
let endCondition = A < B ? B - 1 : B + 1;

for (let i = A; (increment > 0 ? i <= endCondition : i >= endCondition); i += increment) {
    result.push(i);
}

console.log(`[ ${result.join(' ')} ]`);
