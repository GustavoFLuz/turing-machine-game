import hintsRecord from "@/domains/game/data/hints";
import { CheckCombination, getAllPossibilities } from "@/domains/game/utils/arrayUtils";
import { Combination, Hint, Problem } from "@/types/game";

const MAX_HINTS = 6

function GetExpectedResults(hint: Hint): (number | boolean)[] {
    return hint.options.map(option => option.expected);
}

function GetPossibleProblemsFromRemaining(hints: Hint[], possibilitiesLeft: Combination[], numberOfHintsLeft: number): Problem[] {
    if (possibilitiesLeft.length === 1 && numberOfHintsLeft <= 2) return [{ solution: possibilitiesLeft[0].value, hints: [] }]
    if (possibilitiesLeft.length === 1) return []
    if (hints.length === 0 || numberOfHintsLeft === 0) return []
    if (numberOfHintsLeft == 1) return [];
    return hints.map(hint => {
        const expectedResults = GetExpectedResults(hint);
        return expectedResults.map(result => {
            const possibilities = possibilitiesLeft.filter(combination => CheckCombination(combination, hint, result));
            const availableHints = hints.filter(h => h.category != hint.category);
            const possibleProblems = GetPossibleProblemsFromRemaining(
                availableHints,
                possibilities,
                numberOfHintsLeft - 1
            );
            if (possibleProblems.length === 0) return [];
            return possibleProblems.map(problem => problem.hints.length ?
                ({ solution: problem.solution, hints: [{ hint, result }, ...problem.hints] })
                : ({ solution: problem.solution, hints: [{ hint, result }] }));

        })
    }).filter(el => el.length).flat(Infinity) as Problem[];
}

function GetPossibleProblems() {
    const possibilities = getAllPossibilities();
    const hintsArray = Object.values(hintsRecord);
    return GetPossibleProblemsFromRemaining(hintsArray, possibilities, MAX_HINTS);
}
const problems: any = GetPossibleProblems();

export default problems;