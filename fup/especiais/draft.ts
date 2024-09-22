//retorna um vetor de pares
function occurr(vet: number[]): number[][] {
    const countMap: { [key: number]: number } = {};
    for (const num of vet) {
        const absNum = Math.abs(num);
        countMap[absNum] = (countMap[absNum] || 0) + 1;
    }
    return Object.entries(countMap)
        .map(([key, value]) => [Number(key), value])
        .sort((a, b) => a[0] - b[0]);
}

//retorna um vetor de pares
function teams(vet: number[]): number[][] {
    const result: number[][] = [];
    let count = 1;

    for (let i = 1; i <= vet.length; i++) {
        if (vet[i] === vet[i - 1]) {
            count++;
        } else {
            if (count > 0) {
                result.push([vet[i - 1], count]);
            }
            count = 1;
        }
    }
    return result;
}

function mnext(vet: number[]): number[] {
    const result = Array(vet.length).fill(0);
    for (let i = 1; i < vet.length; i++) {
        if (vet[i - 1] > 0 && vet[i] < 0) {
            result[i - 1] = 1;
        }
        if (vet[i - 1] < 0 && vet[i] > 0) {
            result[i] = 1;
        }
    }
    return result;
}

function alone(vet: number[]): number[] {
    const result = Array(vet.length).fill(0);
    for (let i = 0; i < vet.length; i++) {
        if (
            vet[i] > 0 &&
            (i === 0 || vet[i - 1] < 0) && // Verifica se não tem uma mulher à esquerda
            (i === vet.length - 1 || vet[i + 1] < 0) // Verifica se não tem uma mulher à direita
        ) {
            result[i] = 1;
        }
    }
    return result;
}

function couple(vet: number[]): number {
    let count = 0;
    for (let i = 0; i < vet.length; i++) {
        for (let j = i + 1; j < vet.length; j++) {
            if (vet[i] > 0 && vet[j] < 0 && Math.abs(vet[i]) === Math.abs(vet[j])) {
                count++;
            }
        }
    }
    return count;
}

function has_subseq(vet: number[], seq: number[], pos: number): boolean {
    for (let i = 0; i < seq.length; i++) {
        if (vet[pos + i] !== seq[i]) {
            return false;
        }
    }
    return true;
}

function subseq(vet: number[], seq: number[]): number {
    for (let i = 0; i <= vet.length - seq.length; i++) {
        if (has_subseq(vet, seq, i)) {
            return i;
        }
    }
    return -1;
}

function erase(vet: number[], pos_list: number[]): number[] {
    const result = vet.filter((_, index) => !pos_list.includes(index));
    return result;
}

function clear(vet: number[], value: number): number[] {
    return vet.filter(num => num !== value);
}


// -------------------------- MAIN --------------------------

function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); } // _TEST_ONLY_
// function input(): string { let X: any = input; X.P = X.P || require("readline-sync"); return X.P.question() } // _FREE_ONLY_
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    while (true) {
        write("$", "");
        let line = input();
        write(line); // _TEST_ONLY_
        let args = line.split(" ");

        if      (args[0] === "end")   {
            break; 
        }
        else if (args[0] === "occurr") {
            write(fmtpair(occurr(to_vet(args[1]))));
        }
        else if (args[0] === "teams") {
            write(fmtpair(teams(to_vet(args[1]))));
        }
        else if (args[0] === "mnext") {
            write(fmt(mnext(to_vet(args[1]))));
        }
        else if (args[0] === "alone") {
            write(fmt(alone(to_vet(args[1]))));
        }
        else if (args[0] === "couple") {
            write(couple(to_vet(args[1])));
        }
        else if (args[0] === "subseq") {
            write(subseq(to_vet(args[1]), to_vet(args[2])));
        }
        else if (args[0] === "erase") {
            write(fmt(erase(to_vet(args[1]), to_vet(args[2]))));
        }
        else if (args[0] === "clear") {
            write(fmt(clear(to_vet(args[1]), +args[2])));
        }
        else {
            write("Comando invalido");
        }
    }
}

// Função auxiliar para converter de string para vetor
// "[1,2,3,4]" para [1, 2, 3, 4]
function to_vet(token: string): number[] {
    let size = token.length;
    let inside = token.substring(1, size - 1);
    return inside === "" ? [] : inside.split(",").map(x => +x)
}

//Converte de vetor para string sem inserir os espaços
//[1, 2, 3, 4] => "[1,2,3,4]"
function fmt(vet: any[]): string {
    return "[" + vet?.join(", ") + "]";
}

function fmtpair(vet: number[][]): string {
    return fmt(vet?.map((x: number[]) => {
        let [key, value] = x;
        return "(" + key + ", " + value + ")";
    }));
}


main()
