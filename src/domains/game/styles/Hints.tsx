import styled from 'styled-components';

export const SmallestOrLargestWrapper = styled.span`
    font-weight: bold;

    &>*{
        vertical-align: middle;
    }
    & .horizontal{
        display: inline-block;
        font-size: 1.5em;
    }
    & .vertical{
        writing-mode: vertical-rl;
    }
        
`