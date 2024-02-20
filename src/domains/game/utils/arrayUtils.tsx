import { Combination, Hint, PossibleResults } from "@/types/game";

export function getAllPossibilities(): Combination[] {
    // Array from 111 to 555    
    const numbers = [1, 2, 3, 4, 5]
    const arr: Combination[] = []
    numbers.forEach(c =>
        numbers.forEach(b =>
            numbers.forEach(a =>
                arr.push({
                    value: 100 * a + 10 * b + c,
                    a,
                    b,
                    c,
                }))));
    return arr
}

export function CheckCombination(combination: Combination, hint: Hint, expected: PossibleResults) {
    return hint.callback(combination) === expected;
}