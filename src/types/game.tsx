import React from "react";
import hints from "@/domains/game/data/hints"

export type Combination = {
    value: number;
    a: number;
    b: number;
    c: number;
}

export type Hint = {
    name: string;
    category: string;
    text: React.ReactNode;
    options: {opt: React.ReactNode, expected: number | boolean}[];
    callback: (combination: Combination) => boolean | number;
}

export type Problem = {
    solution: number;
    hints: {
        hint: Hint;
        result: PossibleResults;
    }[];
}

export type Attempt = {
    combination: Combination;
    hints: HintAttempts;
}

export type HintAttempt = "correct" | "incorrect" | "empty" | "unused"
export type HintAttempts = [HintAttempt, HintAttempt, HintAttempt, HintAttempt, HintAttempt, HintAttempt]

export type PossibleResults = number | boolean