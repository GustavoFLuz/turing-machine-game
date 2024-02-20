import { useState } from 'react'
import { Combination } from '../../../types/game'
import { useGameContext } from '../contexts/Game'
import { ConfirmButton, ElementsWrapper, NumberBox, SelectorArrow, SelectorWrapper, Wrapper, ButtonWrapper, TestButton } from '../styles/NumberSelector'
import { Check } from '../icons/Check'

type Props = {}

export default function NumberSelector({ }: Props) {
    const [animatedButton, setAnimatedButton] = useState<string | null>(null)
    const { currentNumber: { current, set: setCurrentNumber, test: testCurrentNumber }, locked: { locked, toggle: toggleLocked } } = useGameContext();


    const shakeButton = (button: string) => {
        setTimeout(() => {
            setAnimatedButton(null);
        }, 500)
        setAnimatedButton(button)
    }

    const changeValue = (index: "a" | "b" | "c", increment: number) => {
        if (locked) return;
        if (current[index] + increment > 5 || current[index] + increment < 1) {
            shakeButton(index + increment);
            return;
        }
        const newCurrent: Combination = { ...current };
        newCurrent[index] += increment;
        newCurrent.value = newCurrent.a * 100 + newCurrent.b * 10 + newCurrent.c;
        setCurrentNumber(newCurrent)
    }

    const testNumber = () => {
        const correct = testCurrentNumber();
        if(!correct) shakeButton("check")
    }

    return (
        <Wrapper>
            <SelectorWrapper >
                <ElementsWrapper>
                    <SelectorArrow
                        shake={animatedButton === "a1"}
                        onClick={() => changeValue("a", 1)}
                        color="lightBlue"
                        locked={locked} />
                    <NumberBox key={current.a}>{current.a}</NumberBox>
                    <SelectorArrow
                        shake={animatedButton === "a-1"}
                        onClick={() => changeValue("a", -1)}
                        className="arrow-down"
                        color="lightBlue"
                        locked={locked} />
                </ElementsWrapper>
                <ElementsWrapper>
                    <SelectorArrow
                        shake={animatedButton === "b1"}
                        onClick={() => changeValue("b", 1)}
                        color="yellow"
                        locked={locked} />
                    <NumberBox>{current.b}</NumberBox>
                    <SelectorArrow
                        shake={animatedButton === "b-1"}
                        onClick={() => changeValue("b", -1)}
                        className="arrow-down"
                        color="yellow"
                        locked={locked} />
                </ElementsWrapper>
                <ElementsWrapper>
                    <SelectorArrow
                        shake={animatedButton === "c1"}
                        onClick={() => changeValue("c", 1)}
                        color="purple"
                        locked={locked} />
                    <NumberBox>{current.c}</NumberBox>
                    <SelectorArrow
                        shake={animatedButton === "c-1"}
                        onClick={() => changeValue("c", -1)}
                        className="arrow-down"
                        color="purple"
                        locked={locked} />
                </ElementsWrapper>
            </SelectorWrapper>
            <ButtonWrapper>
                <ConfirmButton locked={locked} onClick={!locked ? toggleLocked : () => { }}>Lock Number</ConfirmButton>
                <TestButton locked={false} onClick={testNumber} shake={animatedButton === "check"}>Check Number</TestButton>
            </ButtonWrapper>
        </Wrapper>
    )
}