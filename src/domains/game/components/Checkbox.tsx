import { ColorType } from '@/types/theme'
import { HintAttempt } from '../../../types/game'
import { Check, Cross } from '../icons/'
import { CheckboxComponent } from '../styles/NotesTable'

type Props = {
    type: HintAttempt
}

export default function Checkbox({ type }: Props) {
    const color = {
        "correct": "white",
        "incorrect": "white",
        "empty": "white",
        "unused": "lightGray",
    }[type] as ColorType

    const icon = {
        "correct": <Check size="calc(1em - 8px)"/>,
        "incorrect": <Cross size="calc(1em - 8px)"/>,
        "empty": false,
        "unused": false,
    }[type]


    return (
        <CheckboxComponent color={color}>
            {icon ? icon : null}
        </CheckboxComponent>
    )
}