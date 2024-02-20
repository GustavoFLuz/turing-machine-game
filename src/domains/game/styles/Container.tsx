import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100vh;
  width: clamp(1500px, 80%, 2000px);
  margin: auto;
  user-select: none;
`