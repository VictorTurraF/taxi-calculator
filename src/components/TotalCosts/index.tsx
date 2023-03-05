import { NumericFormat } from "react-number-format"
import * as S from "./styles"

export type Nullable<T> = T | null | undefined

interface TotalCostsProps extends React.HTMLAttributes<HTMLDivElement> {
  totalCosts: Nullable<number>
}

function TotalCosts({ totalCosts, className }: TotalCostsProps) {
  if (!totalCosts) 
    return <></>

  return (
    <S.Container className={className}>
      <span>Total de custos: </span>
      <NumericFormat 
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        decimalScale={2}
        displayType="text"
        fixedDecimalScale
        value={totalCosts} 
      />
    </S.Container>
  )
}

export default TotalCosts