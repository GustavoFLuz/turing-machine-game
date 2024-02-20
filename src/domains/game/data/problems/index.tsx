import { Problem } from "@/types/game";
import Hints from "../hints";

export const problem1: Problem = {
    solution: 354,
    hints: [
        {
            hint: Hints.nEvens,
            result: 1
        },
        {
            hint: Hints.smallest,
            result: 0
        },
        {
            hint: Hints.bEvenOdd,
            result: false
        },
        {
            hint: Hints.aComparedTo3,
            result: 0
        }
    ]
} 

export const problem2: Problem = {
    solution: 425,
    hints: [
        {
            hint: Hints.cComparedTo5,
            result: 0
        },
        {
            hint: Hints.smallest,
            result: 1
        },
        {
            hint: Hints.nOdds,
            result: 1
        },
    ]
} 