import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    margin-top: 32px;
    height: 100vh;
    font-size: 4em;
`

export const SolvedTitle = styled.h1`
    color: ${props => props.theme.colors.text};
    font-size: 4rem;
    text-align: center;
    margin: 0;
`