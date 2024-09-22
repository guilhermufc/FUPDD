function inside(vet: number[], value: number): boolean {
    for (let num of vet) {
        if (num === value) {
            return true;
        }
    }
    return false;
}


function index_of(vet: number[], value: number): number {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] === value) {
            return i;
        }
    }
    return -1;
}

function find_if(vet: number[]): number {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] > 0) {
            return i;
        }
    }
    return -1;
}

function min_element(vet: number[]): number {
    if (vet.length === 0) {
        return -1;
    }
    let minIndex = 0;
    for (let i = 1; i < vet.length; i++) {
        if (vet[i] < vet[minIndex]) {
            minIndex = i;
        }        
    }
    return minIndex;
}


function find_min_if(vet: number[]): number {
    if (vet.length === 0) {
        return -1;
    }
    let minIndex = -1
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] > -1 || vet[i] > vet[minIndex]) {
            minIndex = i
        }
    }
    return minIndex
}


if (require.main === module) {
   let lista = [1, 2, 3, 4, 5]
   console.log(lista)
   console.log(lista[2])
}

export { inside, index_of, find_if, min_element, find_min_if };
