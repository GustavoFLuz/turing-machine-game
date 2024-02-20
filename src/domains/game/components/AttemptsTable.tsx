import { Attempt } from '@/types/game'
import React from 'react'
import { Triangle, Square, Circle } from '../icons'
import { TableContainer, UsedHintsTable, NumbersTable } from '../styles/NotesTable'
import Checkbox from './Checkbox'

type Props = {
    attempts: Attempt[];
    usedHints: number;
    showEmpty?: boolean;
}

export default function AttemptsTable({ attempts, usedHints, showEmpty=true }: Props) {
    return (
        <TableContainer>
            <NumbersTable>
                <thead>
                    <tr>
                        <th><Triangle size="1em" /></th>
                        <th><Square size="1em" /></th>
                        <th><Circle size="1em" /></th>
                    </tr>
                </thead>
                <tbody>
                    {attempts.map((attempt, index) =>
                        <tr key={`attempt-${attempt.combination.value}-${index}`}>
                            <td>{attempt.combination.a}</td>
                            <td>{attempt.combination.b}</td>
                            <td>{attempt.combination.c}</td>
                        </tr>
                    )}
                    {showEmpty && Array.from({ length: 10 - attempts.length }).map((_, index) =>
                        <tr key={"empty-attempt-" + index}>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    )}
                </tbody>
            </NumbersTable>
            <UsedHintsTable>
                <thead>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                        <th>E</th>
                        <th>F</th>
                    </tr>
                </thead>
                <tbody>
                    {attempts.map((attempt, attemptIndex) =>
                        <tr key={`hint-${attempt.combination.value}-${attemptIndex}`}>
                            {attempt.hints.map((hint, hintIndex) =>
                                <td key={`attempt-hint-${attemptIndex}-${hintIndex}`}><Checkbox type={hint} /></td>
                            )}
                            {Array.from({ length: 6 - attempt.hints.length }).map((_, hintIndex) =>
                                <td key={`empty-attempt-hint-${attemptIndex}-${hintIndex}`}><Checkbox type="unused" /></td>
                            )}
                        </tr>
                    )}
                    {showEmpty && Array.from({ length: 10 - attempts.length }).map((_, index) =>
                        <tr key={"empty-hint-" + index}>
                            <td><Checkbox type={usedHints >= 1 ? 'empty' : "unused"} /></td>
                            <td><Checkbox type={usedHints >= 2 ? 'empty' : "unused"} /></td>
                            <td><Checkbox type={usedHints >= 3 ? 'empty' : "unused"} /></td>
                            <td><Checkbox type={usedHints >= 4 ? 'empty' : "unused"} /></td>
                            <td><Checkbox type={usedHints >= 5 ? 'empty' : "unused"} /></td>
                            <td><Checkbox type={usedHints >= 6 ? 'empty' : "unused"} /></td>
                        </tr>
                    )}
                </tbody>
            </UsedHintsTable>
        </TableContainer>
    )
}