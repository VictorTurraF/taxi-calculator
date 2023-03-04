import * as S from "./styles"

function CalculatorInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <S.Input {...props} />
  )
}

export default CalculatorInput