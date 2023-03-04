import styled, { css } from "styled-components";

export const InputStyles = css`
  width: 100%;
  padding: 1.25rem 1.5rem;
  line-height: 100%;
  border-radius: 0.5rem;
  border: 2px solid #d7d7d7;
  background: #e7e9ee;
  font-weight: 400;
  font-size: 1rem;
  outline: none;
  transition: background-color 0.2s, border-color 0.2s;

  &::placeholder {
    color: #969cb3;
  }

  &:focus {
    border-color: /* smooth yellow in hex */ #FFD666 ;
    background: #fff;
  }
`

export const Input = styled.input`
  ${InputStyles}
`