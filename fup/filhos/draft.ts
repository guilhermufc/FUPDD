import * as fs from 'fs';

// Ler a entrada
let input = fs.readFileSync(0, 'utf8').trim().split('\n');
let idadeMaisNova = parseInt(input[0]);
let quantidadeFilhos = parseInt(input[1]);

// Gerar e imprimir as idades dos filhos
for (let i = 0; i < quantidadeFilhos; i++) {
    console.log(idadeMaisNova + i * 2);
}
