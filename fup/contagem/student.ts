
function count(vet: number[], value: number): number {
    let count = 0;
    for (let elem of vet) {
        if (elem === value) {
            count++;
        }
    }
    return count;
}


function sum(vet: number[]): number {
    let soma = 0;
    for (let elem of vet) {
        soma += Math.abs(elem);
    }
    return soma;
}


function average(vet: number[]): number {
    return sum(vet) / vet.length;
}


function more_men(vet: number[]): string {
    let men = 0;
    let women = 0;

    for (let elem of vet) {
        if (elem > 0) {
            men++; // 
        } else if (elem < 0) {
            women++; 
        }
    }

    if (men === women) {
        return "draw";
    } else if (men > women) {
        return "men";
    } else {
        return "women";
    }
}


function half_compare(vet: number[]): string {
    const middle = vet.length / 2;
    const firstHalf = vet.slice(0, middle);
    const secondHalf = vet.slice(middle);

    const firstHalfSum = sum(firstHalf);
    const secondHalfSum = sum(secondHalf);

    if (firstHalfSum === secondHalfSum) {
        return "draw";
    } else if (firstHalfSum > secondHalfSum) {
        return "first";
    } else {
        return "second";
    }
}


function sex_battle(vet: number[]): string {
    let menStress = 0;
    let womenStress = 0;
    let menCount = 0;
    let womenCount = 0;

    for (let elem of vet) {
        if (elem > 0) {
            menStress += elem; 
            menCount++;
        } else if (elem < 0) {
            womenStress += Math.abs(elem); 
            womenCount++;
        }
    }

    const menAverage = menCount === 0 ? 0 : menStress / menCount;
    const womenAverage = womenCount === 0 ? 0 : womenStress / womenCount;

    if (menAverage === womenAverage) {
        return "draw";
    } else if (menAverage > womenAverage) {
        return "men";
    } else {
        return "women";
    }
}


if (require.main === module) {
   
    let vet = [5, 3, -1, -50, -1, -99];
    console.log(count(vet, -1)); 
    console.log(sum(vet)); 
    console.log(average(vet)); 
    console.log(more_men(vet)); 
    console.log(half_compare(vet)); 
    console.log(sex_battle(vet)); 
}

export { count, sum, average, more_men, half_compare, sex_battle };
