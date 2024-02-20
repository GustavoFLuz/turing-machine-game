"use client";
import React from 'react';
import { Circle, Square, Triangle } from '../icons';
import { CheckTableStyle } from '../styles/NotesTable';

type Props = {}

export default function CheckTable({ }: Props) {
    const [checkedNumbers, setCheckedNumbers] = React.useState<boolean[][]>
        ([
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false]
        ])

    const checkNumber = (row: number, column: number) => {
        setCheckedNumbers(prev => {
            prev[row][column] = !prev[row][column]
            return [...prev]
        })
    }
    return (
        <CheckTableStyle>
            <tbody>
                <tr>
                    <td><div><Triangle size="1em" /></div></td>
                    {checkedNumbers[0].map((checked, index) =>
                        <td key={"checkedNumber-0" + index} onClick={() => checkNumber(0, index)}><div className={checked ? "checked" : ""}>{index + 1}</div></td>
                    )}
                </tr>
                <tr>
                    <td><div><Square size="1em" /></div></td>
                    {checkedNumbers[1].map((checked, index) =>
                        <td key={"checkedNumber-1" + index} onClick={() => checkNumber(1, index)}><div className={checked ? "checked" : ""}>{index + 1}</div></td>
                    )}
                </tr>
                <tr>
                    <td><div><Circle size="1em" /></div></td>
                    {checkedNumbers[2].map((checked, index) =>
                        <td key={"checkedNumber-2" + index} onClick={() => checkNumber(2, index)}><div className={checked ? "checked" : ""}>{index + 1}</div></td>
                    )}
                </tr>
            </tbody>
        </CheckTableStyle>
    )
}