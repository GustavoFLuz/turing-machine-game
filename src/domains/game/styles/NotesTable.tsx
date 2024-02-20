import { ColorType } from "@/types/theme"
import styled from "styled-components"

export const Wrapper = styled.div`
    width: 500px;
    height: 80vh;

    font-size: 42px;

    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 64px;
`

export const TableContainer = styled.div`
  width:500px;
  max-height: 13em;

  overflow: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 18px;
  
  background-color: ${props => props.theme.colors.background.default};
  color: ${props => props.theme.colors.text};
`
export const NumbersTable = styled.table`
  width: 120px;
  border-collapse: collapse;
  box-sizing: border-box;


  & thead {
    position: sticky;
    top: 0;
    background-color: ${props => props.theme.colors.background.default};
    border-bottom: 2px solid ${props => props.theme.colors.lightGray};
  }
  & tr, & th, & td{
    height: 1em;
  }

  & th, & td{
    text-align: center;
    vertical-align: middle;
  }

  &>tbody tr:not(:last-child), &>thead tr{
    border-bottom: 2px solid ${props => props.theme.colors.lightGray};
  }

  & th:not(:last-child), & td:not(:last-child){
    border-right: 2px solid ${props => props.theme.colors.lightGray};
  }
`

export const UsedHintsTable = styled(NumbersTable)`
  width: 240px;
`

export const CheckTableStyle = styled.table`
    width: 100px;
    border-collapse: collapse;
    
    & div{
        text-align: center;
        vertical-align: middle;
        height: 1em;
        width: 1em;
    }
    
    & tr:not(:last-child){
        border-bottom: 2px solid ${props => props.theme.colors.lightGray};
    }
    
    & td:not(:last-child){
        border-right: 2px solid ${props => props.theme.colors.lightGray};
    }

    & td:not(:first-child){
      cursor: pointer;
    }

    & .checked{
        color: ${props => props.theme.colors.lightGray};
        position: relative;
        &::after{
            content: "/";
            position: absolute;
            padding:0;
            top: 50%;
            left: 50%;
            translate: -50% -50%;
        }
    }
`

export const CheckboxComponent = styled.div<{ color: ColorType }>`
    width: calc(1em - 8px);
    height: calc(1em - 8px);
    margin: auto;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.gray};
    background-color: ${props => props.theme.colors[props.color]};

    display:grid;
    place-items: center;
`