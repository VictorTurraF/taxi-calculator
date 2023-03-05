import { NumericFormat } from 'react-number-format'
import { Nullable } from '../TotalCosts'
import * as S from './styles'

interface TotalEarningsProps extends React.HTMLAttributes<HTMLDivElement> {
  totalEarnings: Nullable<number>
}

function TotalEarnings({ totalEarnings, className = "" }: TotalEarningsProps) {

  if (!totalEarnings) return <></>

  return (
    <S.TotalEarningsRow className={className}>
      <span>Total de ganhos: </span>
      <span>
        <NumericFormat
          thousandSeparator="."
          decimalSeparator=","
          prefix="R$ "
          decimalScale={2}
          displayType="text"
          fixedDecimalScale
          value={totalEarnings}
        />
      </span>
    </S.TotalEarningsRow>
  )
}

export default TotalEarnings