import { Combination } from "@/types/game";


export function XisEven(combination: Combination, x: "a"|"b"|"c"): boolean{
    return combination[x as keyof Combination] % 2 === 0
}

export function nOfEvens(combination: Combination): number{
    return [combination.a, combination.b, combination.c].filter(x=>x%2===0).length
}
export function nOfOdds(combination: Combination): number{
    return [combination.a, combination.b, combination.c].filter(x=>x%2===1).length
}

export function checkLargest(combination: Combination): number{
    if(combination.a > combination.b && combination.a > combination.c) return 0
    if(combination.b > combination.a && combination.b > combination.c) return 1
    if(combination.c > combination.a && combination.c > combination.b) return 2
    return -1;
}
export function checkSmallest(combination: Combination): number{
    if(combination.a < combination.b && combination.a < combination.c) return 0
    if(combination.b < combination.a && combination.b < combination.c) return 1
    if(combination.c < combination.a && combination.c < combination.b) return 2
    return -1;
}

export function XComparedToY(combination: Combination, x: "a"|"b"|"c", y: 1|2|3|4|5): number{
    if(combination[x as keyof Combination] < y) return -1
    if(combination[x as keyof Combination] > y) return 1
    return 0
}