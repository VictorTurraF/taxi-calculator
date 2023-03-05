import styled, { css } from "styled-components";
import { TotalResultsProps } from ".";

export const TotalResultRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font: 700 1.25rem/130% "Roboto";
  margin-top: .75rem
`

export const PriceContainer = styled.span<TotalResultsProps>`
  ${({ totalResults }) => !!totalResults && totalResults > 0 ? GreenTextColor : RedTextColor };
`

const GreenTextColor = css`
  color: #00bfa5;
`

const RedTextColor = css`
  color: #ff1744;
`

export const Signal = styled.span`
  margin-right: .5rem;
`

export const ResultLabel = styled.div`
  color: #333;
`