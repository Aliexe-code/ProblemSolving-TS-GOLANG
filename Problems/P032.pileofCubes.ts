export function findNb(m: number): number {
    let total = 0;
    let n = 0;

    while (total < m) {
        n++;
        total += Math.pow(n, 3);
    }

    return total === m ? n : -1;
}

