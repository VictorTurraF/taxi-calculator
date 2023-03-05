import React from 'react'
import { NumericFormat } from 'react-number-format'
import { Nullable } from '../TotalCosts'

import * as S from './styles'

export interface TotalResultsProps extends React.HTMLAttributes<HTMLDivElement> {
  totalResults: Nullable<number>
}

function TotalResults({ className, totalResults }: TotalResultsProps) {

  if (!totalResults) return <></>

  return (
    <S.TotalResultRow className={className}>
      <S.ResultLabel>Resultado Final: </S.ResultLabel>
      <S.PriceContainer totalResults={totalResults}>
        <S.Signal>
          {totalResults > 0 && "+"}
          {totalResults < 0 && "-"}
        </S.Signal>
        <NumericFormat
          thousandSeparator="."
          decimalSeparator=","
          prefix="R$ "
          decimalScale={2}
          displayType="text"
          fixedDecimalScale
          allowNegative
          value={Math.abs(totalResults)}
        />
      </S.PriceContainer>
    </S.TotalResultRow>
  )
}

export default TotalResults