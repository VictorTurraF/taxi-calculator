import styled, { css } from "styled-components";
import { ButtonProps } from ".";

export const Button = styled.button<ButtonProps>`
  background: #FFD666;
  border-radius: 0.5rem;
  border: 0;
  padding: 0 1.5rem;
  height: 3rem;
  color: #fff;
  font: 700 1rem/100% Roboto;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    background: #d7d7d7;
    cursor: not-allowed;
  }

  ${props => props.isOutlined && OutlineButton}

  ${props => props.isDanger && DangerButton}

  ${props => props.isDanger && props.isOutlined && DangerOutlineButton}
`

const OutlineButton = css`
  background: #fff;
  border: 1px solid #FFD666;
  color: #FFD666;
`

const DangerButton = css`
  background: #e52e4d;
  border: 0;
  color: #fff;

  &:hover {
    filter: brightness(0.9);
  }
`

const DangerOutlineButton = css`
  background: #fff;
  border: 2px solid #e52e4d;
  color: #e52e4d;
`
