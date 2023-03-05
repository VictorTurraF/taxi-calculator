import styled from "styled-components";
import { Button } from "../Button/styles";
import { Input } from "../Input/styles";
import { MoneyFormat } from "../MoneyFormat/styles";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  ${Button}:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    height: auto;
  }

  ${Input},
  ${MoneyFormat} {
    &:first-child:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`