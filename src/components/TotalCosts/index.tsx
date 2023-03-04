import { NumericFormat } from "react-number-format"
import MoneyFormat from "../MoneyFormat"

type Nullable<T> = T | null | undefined

interface TotalCostsProps {
  price: Nullable<number>
  autonomy: Nullable<number>
  distance: Nullable<number>
}

interface CostsParams {
  price: number
  autonomy: number
  distance: number
}

function TotalCosts({ price, autonomy, distance }: TotalCostsProps) {

  function calculateCosts({ price, autonomy, distance }: CostsParams) {
    console.log(distance, autonomy, price)
    console.log((distance / autonomy) * price)

    return (distance / autonomy) * price
  }

  if (!price || !autonomy || !distance) 
    return <></>

  return (
    <div>
      <span>Total de custos: </span>
      <NumericFormat 
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        decimalScale={2}
        displayType="text"
        fixedDecimalScale
        value={calculateCosts({ price, autonomy, distance })} 
      />
    </div>
  )
}

export default TotalCosts