function get_men(vet: number[]): number[] {
    return vet.filter(x => x > 0);
}

function get_calm_women(vet: number[]): number[] {
    return vet.filter(x => x < 0 && Math.abs(x) < 10);
}

function sort(vet: number[]): number[] {
    return [...vet].sort((a, b) => a - b);
}

function sort_stress(vet: number[]): number[] {
    return [...vet].sort((a, b) => Math.abs(a) - Math.abs(b));
}

function reverse(vet: number[]): number[] {
    return [...vet].reverse();
}

function unique(vet: number[]): number[] {
    return Array.from(new Set(vet));
}

function repeated(vet: number[]): number[] {
    let countMap: { [key: number]: number } = {};
    let result: number[] = [];

    for (let num of vet) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    for (let num in countMap) {
        if (countMap[num] > 1) {
            result.push(Number(num));
        }
    }

    return result;
}

function input(): string { let X: any = input; X.L = X.L || require("fs").readFileSync(0).toString().split(/\r?\n/); return X.L.shift(); }
function write(text: any, endl="\n") { process.stdout.write("" + text + endl); }
export {};

function main() {
    let vet = new Array<string>();

    while (true) {
        write("$", "");
        let line = input();
        write(line);
        let args = line.split(" ");

        if      (args[0] === "end")             { break; }
        else if (args[0] === "get_men")         { write(fmt(get_men(       to_vet(args[1])))); }
        else if (args[0] === "get_calm_women")  { write(fmt(get_calm_women(to_vet(args[1])))); }
        else if (args[0] === "sort")            { write(fmt(sort(          to_vet(args[1])))); }
        else if (args[0] === "sort_stress")     { write(fmt(sort_stress(   to_vet(args[1])))); }
        else if (args[0] === "reverse")         { write(fmt(reverse(       to_vet(args[1])))); }
        else if (args[0] === "unique")          { write(fmt(unique(        to_vet(args[1])))); }
        else if (args[0] === "repeated")        { write(fmt(repeated(      to_vet(args[1])))); }
        else                                    { write("fail: comando invalido"); }
    }
}

function to_vet(token: string): number[] {
    let size = token.length;
    let inside = token.substring(1, size - 1);
    return inside === "" ? [] : inside.split(",").map(x => +x);
}

function fmt(vet: number[]): string {
    return "[" + vet?.join(", ") + "]";
}

main();
