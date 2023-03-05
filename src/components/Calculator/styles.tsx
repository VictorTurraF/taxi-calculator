import styled, { css } from "styled-components";
import TotalCostsComponent from "../TotalCosts";
import TotalEarningsComponent from "../TotalEarnings";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Container = styled.div`
  border: 2px solid #d7d7d7;
  border-top-color: transparent;
  padding: 2.5rem 2rem 2rem;
  border-radius: 1rem;
  position: relative;

  &::before,
  &::after {
    content: "";
    border: 2px solid transparent;
    position: absolute;
    top: -2px;
    left: -2px;
    bottom: -2px;
    width: 1.75rem;
    border-top-color: #d7d7d7;
    border-top-left-radius: 1rem;
    z-index: -1;
  }

  &::after {
    left: auto;
    right: -2px;
    border-top-right-radius: 1rem;
    border-top-left-radius: 0;
    width: calc(100% - 2rem - 85px);
  }
`

export const Title = styled.h4`
  margin-bottom: 1rem;
  position: absolute;
  top: -1rem;
`

export const InputsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

export const EarningsContainer = styled(Container)`
  &::after {
    width: calc(100% - 2rem - 95px);
  }
`

export const TotalContainer = styled(Container)`
  gap: .5rem;
  display: flex;
  flex-direction: column;

  &::after {
    width: calc(100% - 2rem - 120px);
  }
`

const TotalTotalStyles = css`
  color: /* muted hex */ #9e9e9e;
  font-size: .875rem;
`

export const TotalEarnings = styled(TotalEarningsComponent)`
  margin-top: 1rem;
`

export const TotalCosts = styled(TotalCostsComponent)`
  margin-top: 1rem;
`

export const TotalTotalEarnings = styled(TotalEarningsComponent)`
  ${TotalTotalStyles}
`

export const TotalTotalCosts = styled(TotalCostsComponent)`
  ${TotalTotalStyles}
`