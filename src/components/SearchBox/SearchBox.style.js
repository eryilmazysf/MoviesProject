import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  border-radius: 0.2rem;
`;

export const StyledSearchButton = styled(StyledButton)`
  cursor: pointer;

  font-weight: bold;
`;

export const StyledSearchInput = styled.input`
  color: black;
  ${(p) =>
    p.isColored &&
    css`
      color: red;
    `}

  font-weight: bold;
  border-radius: 0.3rem;
  margin-right: 0.5rem;
`;

export const StyledSearchBox = styled.div`
  margin: 2rem;

  /*     ${StyledSearchInput} {
        color: gray;
    } */
`;
