import React from 'react'
import { NumericFormat } from 'react-number-format'

interface TotalEarningsProps {
  earnings: Record<string, number>
}

function TotalEarnings({ earnings }: TotalEarningsProps) {
  console.log(earnings)
  return (
    <div>
      <span>Total de ganhos:</span>
      <span>
        <NumericFormat
          thousandSeparator="."
          decimalSeparator=","
          prefix="R$ "
          decimalScale={2}
          displayType="text"
          fixedDecimalScale
          value={Object.values(earnings).reduce((acc, earning) => acc + earning)}
        />
      </span>
    </div>
  )
}

export default TotalEarnings