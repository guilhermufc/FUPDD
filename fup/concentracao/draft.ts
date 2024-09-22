let _entrada_: string[] = [];
try {
  _entrada_ = require("fs").readFileSync(0).toString().split(/\r?\n/);
} catch (e) {}
let ler = (): string => (_entrada_.length === 0 ? "" : _entrada_.shift()!);
let escrever = (texto: any, fim: string = "\n") => process.stdout.write("" + texto + fim);
export {};

let [inicio, fim] = ler().split(' ').map(Number);

let sequencia: number[] = [];
let i = inicio;
let j = fim;

while (i <= j) {
  sequencia.push(i++);
  if (i <= j) sequencia.push(j--);
}

let sequenciaReversa = sequencia.slice().reverse();
escrever("[ " + sequencia.concat(sequenciaReversa).join(" ") + " ]");
