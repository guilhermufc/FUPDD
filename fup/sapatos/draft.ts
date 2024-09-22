import * as fs from 'fs';

let input = fs.readFileSync(0, 'utf8').trim().split('\n');
let A = parseInt(input[0]);
let B = parseInt(input[1]);

if (A > B) {
    console.log('invalido');
} else {
    let sum = 0;
    for (let i = A; i <= B; i++) {
        if (i % 6 === 0) { // Verifica se o número é divisível por 6
            sum += i;
        }
    }
    console.log(sum);
}
