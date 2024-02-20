import styled from "styled-components";

export const CardPaper = styled.div`
    width: 400px;
    height: 250px;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;

    background-color: ${props => props.theme.colors.background.paper};
    box-shadow: 0px 0px 10px 0px ${props => props.theme.colors.gray};
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    position: relative;
    font-size: 1.3em;
    cursor:pointer;
        
    &::before, &::after {
        content: "";
        position: absolute;
        width: 20px;
        height: 120px;
        background-color: ${props => props.theme.colors.green};
    }
    &::before {
        border-radius: 0 10px 10px 0;
        left: 0;
    }
    &::after {
        border-radius: 10px 0 0 10px;
        right: 0;
    }
`;
export const CardInfo = styled.div<{position: string}>`
    --b1: ${props => props.theme.colors.card.background.blue1};
    --b2: ${props => props.theme.colors.card.background.blue2};

    width: 80%;
    height: 50%;
    border-radius: ${props => props.theme.border.radius};
    padding: 5px 25px;
    
    color: ${props => props.theme.colors.background.default};
    background-color: #0b3448;
    opacity: 0.8;
    background-image:  
    repeating-linear-gradient(45deg, var(--b1) 25%, transparent 25%, transparent 75%, var(--b1) 75%, var(--b1)), 
    repeating-linear-gradient(45deg, var(--b1) 25%, var(--b2) 25%, var(--b2) 75%, var(--b1) 75%, var(--b1));
    
    background-position: 0 0, 10px 10px;
    background-size: 20px 20px;
    display: grid;
    place-content: center;
    position: relative;

    text-wrap: balance;
    text-align: center;

    &::after{
        content: "${props => props.position}";
        width: 20px;
        aspect-ratio:1;
        font-size: 2em;
        font-weight: bolder;
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px 10px;
        border-radius: 50%;
        color: ${props => props.theme.colors.green};
    }
`

export const CardIcons = styled.div`
    width: 100%;
    height: 50%;
    
    display: flex;
    justify-content: space-around;
    align-items: center;

    &>span:not(.divider){
        flex: 1 1 0px;
        text-align: center;
    }
    &>span.divider{
        height: 15px;
        width: 2px;
        background-color: ${props => props.theme.colors.text};
    }
`