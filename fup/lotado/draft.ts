let _entrada_: string[] = [];
try {
  _entrada_ = require("fs").readFileSync(0).toString().split(/\r?\n/);
} catch (e) {}
let ler = (): string => (_entrada_.length === 0 ? "" : _entrada_.shift()!);
let escrever = (texto: any, fim: string = "\n") => process.stdout.write("" + texto + fim);
export {};

let capacidade = Number(ler());
let passageiros = 0;

while (true) {
  let movimentacao = Number(ler());
  passageiros += movimentacao;

  if (passageiros < 0) passageiros = 0; // Garantir que o número de passageiros não seja negativo

  if (passageiros === 0) {
    escrever("vazio");
  } else if (passageiros >= 2 * capacidade) {
    escrever("hora de partir");
    break;
  } else if (passageiros >= capacidade) {
    escrever("lotado");
  } else {
    escrever("ainda cabe");
  }
}
