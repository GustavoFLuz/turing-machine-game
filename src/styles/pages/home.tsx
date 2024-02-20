import { ColorType } from '@/types/theme';
import styled, { DefaultTheme } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25%;

    margin:auto;
    width: 1080px;
    height: 100vh;
    box-sizing: border-box;
    
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
`;

export const Title = styled.h1`
    font-size: 4rem;
    margin-bottom: 1rem;
    text-align: left;
    &>span{
        color: ${props => props.theme.colors.green};
    
    }
`;

export const ButtonSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap:2em;
    width: 360px;
`;


export const ButtonWrapper = styled.div<{ color: ColorType }>`
    --color: ${props => props.theme.colors[props.color]}; 
    --thickness: 5px;
    --gap: 5px; 
    --_g: #0000 25%,var(--color) 0;
   
    padding: calc(var(--gap) + var(--thickness));
    background: 
        conic-gradient(from 180deg at top    var(--thickness) right var(--thickness),var(--_g))
        var(--_i,200%) 0  /200% var(--_i,var(--thickness))  no-repeat,
        conic-gradient(at bottom var(--thickness) left  var(--thickness),var(--_g))
        0   var(--_i,200%)/var(--_i,var(--thickness)) 200%  no-repeat;
    transition: .3s, background-position .3s .3s;
    cursor: pointer;
    border: none;
    border-radius: 5px;

    &:hover {
        --_i: 100%;
        transition: .3s, background-size .3s .3s;
    }
`;

export const Button = styled.button<{ color: ColorType }>`
    background-color: ${props => props.theme.colors.background.paper};
    font-weight: bolder;
    font-size: 2.5rem;
    border: none;
    border-radius: 2px;
    width: 100%;
    cursor: pointer;
    &:hover {
        color:${(prop) => prop.theme.colors[prop.color]}; 
        --_i: 100%;
        transition: .3s, background-size .3s .3s;
    }
`;