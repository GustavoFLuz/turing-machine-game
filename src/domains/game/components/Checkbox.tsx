import { ColorType } from '@/types/theme'
import { HintAttempt } from '../../../types/game'
import { Check } from '../icons/Check'
import { Cross } from '../icons/Cross'
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
        "correct": <Check size={"1em"} />,
        "incorrect": <Cross size={"1em"} />,
        "empty": false,
        "unused": false,
    }[type]


    return (
        <CheckboxComponent color={color}>
            {icon ? icon : null}
        </CheckboxComponent>
    )
}