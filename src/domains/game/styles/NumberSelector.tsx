import { ColorType } from "@/types/theme"
import styled, { keyframes } from "styled-components"
import Selector from "/public/svg/selector.svg"

export const Wrapper = styled.div`
    margin-top: -10%;
    width: 500px;
    height: 80vh;

    font-size: 4em;

    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 64px;
`

export const SelectorWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ElementsWrapper = styled.div`
    width: 200px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const ShakeAnimation = keyframes`
    10%, 90% { translate: -1px 0; }
    20%, 80% { translate: 2px 0; }
    30%, 50%, 70% { translate: -4px 0; }
    40%, 60% { translate: 4px 0; }
`

export const SelectorArrow = styled.button<{ color: ColorType, shake: boolean, locked: boolean }>`
    --size: ${props => props.theme.components.selector.arrowSize};
    --color: ${props => !props.locked?props.theme.colors[props.color]:props.theme.colors.lightGray};

    width: var(--size);
    aspect-ratio: 1;

    mask-image: url(${Selector.src});
    background-color: var(--color);

    cursor: ${props => !props.locked?"pointer":"default"};

    &.arrow-down{
        transform: rotate(180deg);
    }

    animation: ${props => props.shake ? ShakeAnimation : "none"} .5s ease-in-out both;
`

export const NumberBox = styled.div`
    width: 150px;
    aspect-ratio: 1;
    border: 2px solid black;
    border-radius: ${props => props.theme.border.radius};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
`

export const ConfirmButton = styled.button<{locked: boolean}>`
    width: 360px;
    padding: 8px 32px;
    border-radius: ${props => props.theme.border.radius};
    background-color: ${props=>!props.locked?props.theme.colors.green:props.theme.colors.lightGray};
    color: ${props => props.theme.colors.background.default};
    font-size: .6em;
    cursor: ${props=>!props.locked?"pointer":"default"};
    display: grid;
`

export const TestButton = styled(ConfirmButton)<{shake: boolean}>`
    background-color: ${props=>props.theme.colors.lightBlue};

    animation: ${props => props.shake ? ShakeAnimation : "none"} .5s ease-in-out both;
`;
