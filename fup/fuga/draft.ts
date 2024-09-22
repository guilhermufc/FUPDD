let _entrada_: string[] = [];
try {
  _entrada_ = require("fs").readFileSync(0).toString().split(/\r?\n/);
} catch (e) {}
let ler = (): string => (_entrada_.length === 0 ? "" : _entrada_.shift()!);
let escrever = (texto: any, fim: string = "\n") => process.stdout.write("" + texto + fim);
export {};

let [H, P, F, D] = ler().split(' ').map(Number);

let podeFugir = false;

if (D === -1) { // Horário
  if ((F < H && H <= P) || (P < F && F <= H) || (H < P && P < F)) {
    podeFugir = true;
  }
} else { // Anti-horário
  if ((F > H && H >= P) || (P > F && F >= H) || (H > P && P > F)) {
    podeFugir = true;
  }
}

escrever(podeFugir ? "N" : "S");
