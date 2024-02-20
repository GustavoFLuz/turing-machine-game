import { Attempt, Combination, Hint, HintAttempts, Problem } from '@/types/game'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

type ContextType = {
    problem: Problem;
    hint: {
        list: Hint[];
        verify: (slot: number) => boolean
    };
    currentNumber: {
        current: Combination,
        set: (combination: Combination) => void,
        test: () => boolean
    },
    attempts: {
        attempts: Attempt[],
        set: (attempts: Attempt[]) => void
    },
    locked: {
        locked: boolean,
        toggle: () => void
    },
}

type Props = {
    children: React.ReactNode;
    problem: Problem;
}

const GameContext = createContext<ContextType | null>(null)

export function GameProvider({ children, problem }: Props) {
    const [currentNumber, setCurrentNumber] = useState<Combination>({ value: 111, a: 1, b: 1, c: 1 })
    const [attempts, setAttempts] = useState<Attempt[]>([]);
    const [locked, setLocked] = useState<boolean>(false);
    const router = useRouter();
    const hints = problem.hints.map(el => el.hint)

    useEffect(() => {
        if (attempts.length > 0 && attempts[attempts.length - 1].hints.filter(el => el === "correct" || el === "incorrect").length === 3) {
            toggleLocked();
        }
    }, [attempts]);

    const changeCurrent = (combination: Combination) => {
        if (locked) return;
        setCurrentNumber(combination)
    }

    const toggleLocked = () => {
        setLocked(prev => !prev)
        if (!locked)
            setAttempts(prev =>
                [...prev,
                {
                    combination: currentNumber,
                    hints: getAttemptHints(problem.hints.map(el => el.hint))
                }
                ]
            )
    }

    const verifyHint = (slot: number) => {
        if (!locked)
            toggleLocked();

        const isCorrect = problem.hints[slot].hint.callback(currentNumber) === problem.hints[slot].result;

        setAttempts(prev => {
            const newAttempts = structuredClone(prev);
            const lastAttempt = newAttempts.at(-1);
            if (lastAttempt === undefined) return prev
            lastAttempt.hints[slot] = (isCorrect ? "correct" : "incorrect");
            return newAttempts;
        })

        return isCorrect;
    }

    const testNumber = () => {
        const correct = currentNumber.value === problem.solution;
        if (correct) {
            router.push(`/solved?solution=${problem.solution}&attempts=${JSON.stringify(attempts)}`)
        }
        return correct;
    }
    return (
        <GameContext.Provider value={{
            problem,
            hint: {
                list: hints,
                verify: verifyHint
            },
            currentNumber: {
                current: currentNumber,
                set: changeCurrent,
                test: testNumber
            },
            attempts: {
                attempts: attempts,
                set: setAttempts
            },
            locked: {
                locked: locked,
                toggle: toggleLocked
            },
        }}>
            {children}
        </GameContext.Provider>
    )
}

export function useGameContext(): ContextType {
    const context = useContext(GameContext)

    if (context === null) {
        throw new Error('Game context is null');
    }

    return context;
}

function getAttemptHints(hints: Hint[]): HintAttempts {
    return Array.from({ length: hints.length }, () => "empty").concat(
        Array.from({ length: 6 - hints.length }, () => "unused")
    ) as HintAttempts
}